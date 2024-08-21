import { useMutation, useQueryClient } from '@tanstack/react-query';
import { parseEther } from 'viem';
import { waitForTransactionReceipt } from '@wagmi/core';
import { usePublicClient, useChainId } from 'wagmi';
import {
  useWriteErc20Approve,
  useWriteStakeContractStake,
  useWriteStakeContractWithdraw,
  useWriteStakeContractClaimRewards,
  seedTokenConfig,
  stakeContractConfig,
} from "@/generated";
import {wagmiPrivyConfig} from "@/app/providers";

export function useStakingMutations() {
  const queryClient = useQueryClient();
  const publicClient = usePublicClient();
  const chainId = useChainId();

  const { writeContractAsync: approveToken } = useWriteErc20Approve();
  const { writeContractAsync: stakeTokens } = useWriteStakeContractStake();
  const { writeContractAsync: withdrawTokens } = useWriteStakeContractWithdraw();
  const { writeContractAsync: claimRewards } = useWriteStakeContractClaimRewards();

  const _stakingInvalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['seedAllowance'] });
    queryClient.invalidateQueries({ queryKey: ['seedBalance'] });
    queryClient.invalidateQueries({ queryKey: ['leafBalance'] });
    queryClient.invalidateQueries({ queryKey: ['stakeDetails'] });
  };

  const stakingApproveMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      const cleanedAmount = amount.replace(/,/g, '');
      if (isNaN(Number(cleanedAmount))) {
        throw new Error('Invalid amount format');
      }
      const parsedAmount = parseEther(cleanedAmount);
      const SEED_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`;
      //const LEAF_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_LEAF_TOKEN as `0x${string}`;
      const STAKING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`;
      //const seedAddress = process.env.NEXT_PUBLIC_RPC_SERVER //seedTokenConfig.address[chainId  as keyof typeof seedTokenConfig.address];
      //const stakeAddress = process.env.NEXT_PUBLIC_RPC_SERVER //stakeContractConfig.address[chainId as keyof typeof stakeContractConfig.address];
      
      if (!SEED_TOKEN_ADDRESS || !STAKING_CONTRACT_ADDRESS) {
        throw new Error('Contract address not found for the current chain');
      }

      const tx = await approveToken({
        address: SEED_TOKEN_ADDRESS,
        args: [STAKING_CONTRACT_ADDRESS, parsedAmount],
      });
      await waitForTransactionReceipt(wagmiPrivyConfig, { hash: tx });
      return tx;
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingStakeMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      const cleanedAmount = amount.replace(/,/g, '');
      if (isNaN(Number(cleanedAmount))) {
        throw new Error('Invalid amount format');
      }
      const parsedAmount = parseEther(cleanedAmount);
      const tx = await stakeTokens({
        args: [parsedAmount],
      });
      await waitForTransactionReceipt(wagmiPrivyConfig, { hash: tx });
      return tx;
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingWithdrawMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      const cleanedAmount = amount.replace(/,/g, '');
      
      let parsedAmount;
      if (cleanedAmount.length > 18) {
        parsedAmount = BigInt(cleanedAmount);
      } else {
        parsedAmount = parseEther(cleanedAmount);
      }
      
      const tx = await withdrawTokens({
        args: [parsedAmount],
      });
      await waitForTransactionReceipt(wagmiPrivyConfig, { hash: tx });
      return tx;
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingClaimMutation = useMutation({
    mutationFn: async () => {
      const tx = await claimRewards({});
      await waitForTransactionReceipt(wagmiPrivyConfig, { hash: tx });
      return tx;
    },
    onSuccess: _stakingInvalidateQueries,
  });

  return {
    stakingApproveMutation,
    stakingStakeMutation,
    stakingWithdrawMutation,
    stakingClaimMutation,
  };
}
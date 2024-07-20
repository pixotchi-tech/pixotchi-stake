import { useMutation, useQueryClient } from '@tanstack/react-query';
import { parseEther } from 'viem';
import {
  useWriteErc20Approve,
  useWriteStakeContractStake,
  useWriteStakeContractWithdraw,
  useWriteStakeContractClaimRewards,
} from "@/generated";

const SEED_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`;
const STAKING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`;

export function useStakingMutations() {
  const queryClient = useQueryClient();

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
      return approveToken({
        address: SEED_TOKEN_ADDRESS,
        args: [STAKING_CONTRACT_ADDRESS, parsedAmount],
      });
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
      return stakeTokens({
        args: [parsedAmount],
      });
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
      
      return withdrawTokens({
        args: [parsedAmount],
      });
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingClaimMutation = useMutation({
    mutationFn: async () => {
      return claimRewards({});
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
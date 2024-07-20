import { useMutation, useQueryClient } from '@tanstack/react-query';
import { parseEther } from 'viem';
import {
  useWriteErc20Approve,
  useWriteStakeContractStake,
  useWriteStakeContractWithdraw,
  useWriteStakeContractClaimRewards,
  useSimulateErc20Approve,
  useSimulateStakeContractStake,
  useSimulateStakeContractWithdraw,
  useSimulateStakeContractClaimRewards,
} from "@/generated";

const SEED_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`;
const STAKING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`;

export function useStakingMutations() {
  const queryClient = useQueryClient();

  const { writeContractAsync: approveToken } = useWriteErc20Approve();
  const { writeContractAsync: stakeTokens } = useWriteStakeContractStake();
  const { writeContractAsync: withdrawTokens } = useWriteStakeContractWithdraw();
  const { writeContractAsync: claimRewards } = useWriteStakeContractClaimRewards();

  const { data: simulateApprove, error: simulateApproveError } = useSimulateErc20Approve({
    address: SEED_TOKEN_ADDRESS,
    args: [STAKING_CONTRACT_ADDRESS, parseEther('1')], // Use a sample amount for simulation
  });
  console.log('Simulate Approve Result:', simulateApprove);
  const { data: simulateStake } = useSimulateStakeContractStake();
  const { data: simulateWithdraw } = useSimulateStakeContractWithdraw();
  const { data: simulateClaim } = useSimulateStakeContractClaimRewards();

  const _stakingInvalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['seedAllowance'] });
    queryClient.invalidateQueries({ queryKey: ['seedBalance'] });
    queryClient.invalidateQueries({ queryKey: ['leafBalance'] });
    queryClient.invalidateQueries({ queryKey: ['stakeDetails'] });
  };

  const stakingApproveMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!simulateApprove) {
        console.error('Approve simulation failed or returned null/undefined');
        throw new Error('Approve simulation failed');
      }
      const parsedAmount = parseEther(amount);
      return approveToken({
        address: SEED_TOKEN_ADDRESS,
        args: [STAKING_CONTRACT_ADDRESS, parsedAmount],
      });
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingStakeMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!simulateStake) throw new Error('Stake simulation failed');
      const parsedAmount = parseEther(amount);
      return stakeTokens({
        args: [parsedAmount],
    });
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingWithdrawMutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      if (!simulateWithdraw) throw new Error('Withdraw simulation failed');
      const parsedAmount = parseEther(amount);
      return withdrawTokens({
        args: [parsedAmount],
      });
    },
    onSuccess: _stakingInvalidateQueries,
  });

  const stakingClaimMutation = useMutation({
    mutationFn: async () => {
      if (!simulateClaim) throw new Error('Claim simulation failed');
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
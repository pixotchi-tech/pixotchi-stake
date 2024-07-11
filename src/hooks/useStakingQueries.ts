import { useQuery } from '@tanstack/react-query';
import { useWatchBlockNumber } from 'wagmi';
import { useIdle } from '@reactuses/core';
import {
  useReadErc20Allowance,
  useReadErc20BalanceOf,
  useReadStakeContractGetStakeInfo,
} from "@/generated";

const SEED_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`;
const LEAF_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_LEAF_TOKEN as `0x${string}`;
const STAKING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`;

export function useStakingQueries(address: `0x${string}` | undefined) {
  const isIdle = useIdle(30000); // 30 seconds idle timeout
  const isTabActive = !isIdle;

  const seedAllowanceQuery = useReadErc20Allowance({
    address: SEED_TOKEN_ADDRESS,
    args: address ? [address, STAKING_CONTRACT_ADDRESS] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const seedBalanceQuery = useReadErc20BalanceOf({
    address: SEED_TOKEN_ADDRESS,
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const leafBalanceQuery = useReadErc20BalanceOf({
    address: LEAF_TOKEN_ADDRESS,
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const stakeDetailsQuery = useReadStakeContractGetStakeInfo({
    address: STAKING_CONTRACT_ADDRESS,
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  useWatchBlockNumber({
    onBlockNumber: () => {
      if (address) {
        seedAllowanceQuery.refetch();
        seedBalanceQuery.refetch();
        leafBalanceQuery.refetch();
        stakeDetailsQuery.refetch();
      }
    },
    enabled: !!address && isTabActive,
  });

  return {
    seedAllowance: seedAllowanceQuery.data ?? BigInt(0),
    seedBalance: seedBalanceQuery.data ?? BigInt(0),
    leafBalance: leafBalanceQuery.data ?? BigInt(0),
    stakeDetails: stakeDetailsQuery.data,
    stakedBalance: stakeDetailsQuery.data?.[0] ?? BigInt(0),
    claimableRewards: stakeDetailsQuery.data?.[1] ?? BigInt(0),
    isLoading: seedAllowanceQuery.isLoading || seedBalanceQuery.isLoading || 
               leafBalanceQuery.isLoading || stakeDetailsQuery.isLoading,
  };
}
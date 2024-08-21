'use client';
import { useEffect, useState } from 'react';
import { useAccount, useChainId, useDisconnect } from 'wagmi';
import { usePrivy } from '@privy-io/react-auth';
import { Header } from './stake/header';
import { Footer } from './stake/footer';
import { StakeCard } from './stake/stake-card';
import { ClaimCard } from './stake/claim-card';
import { StakingInfoCard } from './stake/staking-info-card';
import { StakeWithdraw } from './stake/stake-withdraw';
import { AlertComponent } from '@/components/AlertComponent';
import { useStakingQueries } from '@/hooks/useStakingQueries';
import { useStakingMutations } from '@/hooks/useStakingMutations';
import {
  formatBalanceWithTwoDecimals,
  parseBalanceToBigInt,
} from '@/lib/utils';

import './style.scss';

export function StakeComponent() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { login, logout, connectWallet, authenticated, user } = usePrivy();
  const chainId = useChainId();

  const {
    seedAllowance,
    seedBalance,
    leafBalance,
    stakeDetails,
    stakedBalance,
    claimableRewards,
    isLoading,
  } = useStakingQueries(address);

  const {
    stakingApproveMutation,
    stakingStakeMutation,
    stakingWithdrawMutation,
    stakingClaimMutation,
  } = useStakingMutations();

  const handleStake = async () => {
    if (!address || !stakeAmount) return;
    setError(null);
    setSuccessMessage(null);

    try {
      const amountToStake = parseBalanceToBigInt(stakeAmount);
      if (seedAllowance < amountToStake) {
        await stakingApproveMutation.mutateAsync({ amount: stakeAmount });
      }
      await stakingStakeMutation.mutateAsync({ amount: stakeAmount });
      setStakeAmount('');
      setSuccessMessage('Staking successful!');
    } catch (error) {
      console.error('Staking failed:', error);
      setError('Failed to stake. Please try again.');
    }
  };

  const handleWithdraw = async () => {
    if (!address || !withdrawAmount) return;
    setError(null);
    setSuccessMessage(null);

    try {
      await stakingWithdrawMutation.mutateAsync({ amount: withdrawAmount });
      setWithdrawAmount('');
      setSuccessMessage('Withdrawal successful!');
    } catch (error) {
      console.error('Withdrawal failed:', error);
      setError('Failed to withdraw. Please try again.');
    }
  };

  const handleClaim = async () => {
    if (!address) return;
    setError(null);
    setSuccessMessage(null);

    try {
      await stakingClaimMutation.mutateAsync();
      setSuccessMessage('Claim successful!');
    } catch (error) {
      console.error('Claiming rewards failed:', error);
      setError('Failed to claim rewards. Please try again.');
    }
  };

  const handleConnectWallet = () => {
    if (isConnected) {
      connectWallet();
    } else {
      login();
    }
  };

  const handleDisconnect = () => {
    disconnect();
    logout();
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header
        isConnected={isConnected}
        address={address}
        onConnect={handleConnectWallet}
        onDisconnect={handleDisconnect}
      />
      <section className="background-image flex-1 px-4 py-8 sm:px-6">
        <AlertComponent error={error} successMessage={successMessage} />
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <StakeCard
            address={address as `0x${string}`}
            stakeAmount={stakeAmount}
            setStakeAmount={setStakeAmount}
            seedBalance={seedBalance}
            seedAllowance={seedAllowance}
            onStakeSuccess={() => setSuccessMessage('Staking successful!')}
            onStakeError={setError}
            onMaxStake={() => setStakeAmount(formatBalanceWithTwoDecimals(seedBalance))}
            onRemoveAllowance={() => stakingApproveMutation.mutate({ amount: '0' })}
            isConnected={isConnected}
            isApproving={stakingApproveMutation.isPending}
            isStaking={stakingStakeMutation.isPending}
            onStake={handleStake}
          />
          <StakeWithdraw
            address={address as `0x${string}`}
            withdrawAmount={withdrawAmount}
            setWithdrawAmount={setWithdrawAmount}
            isConnected={isConnected}
            stakedBalance={stakedBalance}
            onWithdrawSuccess={() => setSuccessMessage('Withdrawal successful!')}
            onWithdrawError={setError}
            onMaxWithdraw={() =>
              setWithdrawAmount(formatBalanceWithTwoDecimals(stakedBalance))
            }
            isWithdrawing={stakingWithdrawMutation.isPending}
            onWithdraw={handleWithdraw}
          />
          <ClaimCard
            address={address as `0x${string}`}
            isConnected={isConnected}
            leafBalance={leafBalance}
            leafClaimable={claimableRewards}
            onClaimSuccess={() => setSuccessMessage('Claim successful!')}
            onClaimError={setError}
            onClaim={handleClaim}
            isClaiming={stakingClaimMutation.isPending}
          />
          <StakingInfoCard />
        </div>
      </section>
    </div>
  );
}

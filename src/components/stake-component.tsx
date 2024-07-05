'use client';
import { useState, useEffect } from "react";
import {useAccount, useDisconnect} from "wagmi";
import { usePrivy } from "@privy-io/react-auth";
import { useMutation, useQueryClient} from '@tanstack/react-query';
import {formatEther, parseEther, formatUnits} from "viem";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Header } from "./stake/header";
import { Footer } from "./stake/footer";
import { StakeCard } from "./stake/stake-card";
import { ClaimCard } from "./stake/claim-card";
import { StakingInfoCard } from "./stake/staking-info-card";
import {
  useReadErc20Allowance,
  useReadErc20BalanceOf,
  useWriteErc20Approve,
  useWriteStakeContractStake
} from "@/generated";
import { waitForTransactionReceipt } from '@wagmi/core'
import {wagmiConfig} from "@/app/providers";

import { formatBalanceWithTwoDecimals, parseBalanceToBigInt } from "@/lib/utils";

// Add these constants for token addresses (replace with actual addresses)
const SEED_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_SEED_TOKEN!;
const LEAF_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_LEAF_TOKEN!;
const STAKING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STAKING_CONTRACT;

export function StakeComponent() {
  const { address } = useAccount();
  
  const [stakeAmount, setStakeAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isApproving, setIsApproving] = useState(false);
  const [isStaking, setIsStaking] = useState(false);
  const [isStakeSuccess, setIsStakeSuccess] = useState(false);

  const queryClient = useQueryClient();

  const { writeContractAsync: approveToken } = useWriteErc20Approve();
  const { writeContractAsync: stakeTokens } = useWriteStakeContractStake();

  const { data: seedAllowance, queryKey: allowanceQueryKey } = useReadErc20Allowance({
    address: SEED_TOKEN_ADDRESS as `0x${string}`,
    args: address ? [address as `0x${string}`, STAKING_CONTRACT_ADDRESS as `0x${string}`] : undefined,
  });

  const { data: seedBalance, queryKey: seedBalanceQueryKey } = useReadErc20BalanceOf({
    address: SEED_TOKEN_ADDRESS as `0x${string}`,
    args: address ? [address as `0x${string}`] : undefined,
  });

  const { data: leafBalance, queryKey: leafBalanceQueryKey } = useReadErc20BalanceOf({
    address: LEAF_TOKEN_ADDRESS as `0x${string}`,
    args: address ? [address as `0x${string}`] : undefined,
  });



  const handleStake = async () => {
    if (!address) {
      setError("Please connect your wallet.");
      return;
    }

    const amountToStake = stakeAmount ? parseBalanceToBigInt(stakeAmount) : null;
    
    if (!amountToStake) {
      setError("Please enter a valid amount to stake.");
      return;
    }

    try {
      setError(null);
      setSuccessMessage(null);
      
      // Check if approval is needed
      if (!seedAllowance || seedAllowance < amountToStake) {
        setIsApproving(true);
        const approveTx = await approveToken({
          address: SEED_TOKEN_ADDRESS as `0x${string}`,
          args: [STAKING_CONTRACT_ADDRESS as `0x${string}`, amountToStake]
        });
        
        // Wait for approval transaction
        await waitForTransactionReceipt(wagmiConfig, { hash: approveTx });
        
        setIsApproving(false);
      }
      
      // Proceed with staking
      setIsStaking(true);
      const stakeTx = await stakeTokens({ args: [amountToStake] });
      
      // Wait for stake transaction
      await waitForTransactionReceipt(wagmiConfig, { hash: stakeTx });
      
      setIsStaking(false);
      setIsStakeSuccess(true);
      setStakeAmount("");

      // Refetch balances and allowance
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: seedBalanceQueryKey }),
        queryClient.invalidateQueries({ queryKey: leafBalanceQueryKey }),
        queryClient.invalidateQueries({ queryKey: allowanceQueryKey })
      ]);

      setSuccessMessage("Staking successful!");
    } catch (error) {
      console.error("Staking failed:", error);
      setError("Failed to stake. Please try again.");
    } finally {
      setIsApproving(false);
      setIsStaking(false);
    }
  };

  useEffect(() => {
    if (isStakeSuccess) {
      const timer = setTimeout(() => {
        setIsStakeSuccess(false);
        setSuccessMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isStakeSuccess]);

  const { ready, user, authenticated, login, connectWallet, logout} = usePrivy();
  //const {wallets, ready: walletsReady} = useWallets();

  // WAGMI hooks
  const { isConnected, isConnecting, isDisconnected, connector} = useAccount();
  const {disconnect} = useDisconnect();
  //const {setActiveWallet} = useSetActiveWallet();

  const handleConnectWallet = () => {
    if (authenticated) {
      connectWallet();
    } else {
      login();
    }
  };

  const handleDisconnect = () => {
    disconnect();
    logout();
  };

  const handleMaxStake = () => {
    if (seedBalance) {
      setStakeAmount(formatBalanceWithTwoDecimals(seedBalance));
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header 
        isConnected={isConnected} 
        address={address} 
        onConnect={handleConnectWallet} 
        onDisconnect={handleDisconnect} 
      />
      <main className="flex-1 px-4 py-8 sm:px-6">
        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {successMessage && (
          <Alert variant="default">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <StakeCard 
            stakeAmount={stakeAmount}
            setStakeAmount={setStakeAmount}
            seedBalance={seedBalance}
            seedAllowance={seedAllowance}
            isApproving={isApproving}
            isStaking={isStaking}
            onStake={handleStake}
            onMaxStake={handleMaxStake}
          />
          <ClaimCard leafBalance={leafBalance} />
          <StakingInfoCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

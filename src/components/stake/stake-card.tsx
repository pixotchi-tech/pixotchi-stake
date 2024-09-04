import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card/Card';
import { Button, Input, Label } from '@/components/ui';
import { formatBalanceWithTwoDecimals } from '@/lib/utils';
import seedLogo from '../../assets/images/seed-logo.webp';
import type { TransactionError } from '@coinbase/onchainkit/transaction';
import TransactionWrapperStake from '../onchainkit/TransactionWrapperStake';
import { useChainId } from 'wagmi';
import { useWallets } from '@privy-io/react-auth';

interface StakeCardProps {
  address: `0x${string}`;
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
  seedBalance: bigint | undefined;
  seedAllowance: bigint | undefined;
  onStakeSuccess: () => void;
  onStakeError: (error: string) => void;
  onMaxStake: () => void;
  onRemoveAllowance: () => void;
  isConnected: boolean;

  //EOA accounts
  isApproving: boolean;
  isStaking: boolean;
  onStake: () => void;
}

export function StakeCard({
  address,
  stakeAmount,
  setStakeAmount,
  seedBalance,
  seedAllowance,
  onStakeSuccess,
  onStakeError,
  onMaxStake,
  onRemoveAllowance,
  isConnected,
  isApproving,
  isStaking,
  onStake,
}: StakeCardProps) {
  const [showRemoveAllowance, setShowRemoveAllowance] = useState(false);
  const chainId = useChainId();
  const { wallets } = useWallets();

  const [isSmartWallet, setIsSmartWallet] = useState(false);

  useEffect(() => {
    if (address && wallets) {
      const currentWallet = wallets.find(wallet => wallet.address.toLowerCase() === address.toLowerCase());
      setIsSmartWallet(currentWallet?.connectorType === 'coinbase_wallet');
    }
  }, [address, wallets]);

  useEffect(() => {
    setShowRemoveAllowance(Boolean(seedAllowance && seedAllowance > 0n));
  }, [seedAllowance]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setStakeAmount(value);
  };

  const handleStakeSuccess = () => {
    setStakeAmount('');
    onStakeSuccess();
  };

  const handleStakeError = (error: TransactionError) => {
    console.error('Staking error:', error);
    onStakeError('Failed to stake. Please try again.');
  };

  const formattedBalance = formatBalanceWithTwoDecimals(seedBalance);
  const formattedAllowance = formatBalanceWithTwoDecimals(seedAllowance);
// console.log("STAKE CARD", seedBalance, seedAllowance);
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Stake SEED</CardTitle>
        <CardDescription>
          Stake your SEED tokens to earn LEAF rewards
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stake-amount">Stake Amount</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="stake-amount"
                placeholder="0.0"
                value={stakeAmount}
                onChange={handleInputChange}
                disabled={!isConnected}
              />
              <Image src={seedLogo} alt="Seed logo" width={32} height={32} />
              <Button
                className="min-w-[64px]"
                onClick={onMaxStake}
                disabled={!isConnected}
              >
                Max
              </Button>
            </div>
          </div>
          <div className="flex justify-between text-sm gap-2">
            <span>Balance: {formattedBalance} SEED</span>
            <span>
              Allowance: {formattedAllowance} SEED
              {showRemoveAllowance && (
                <span
                  className="underline cursor-pointer ml-1"
                  onClick={onRemoveAllowance}
                >
                  remove
                </span>
              )}
            </span>
          </div>
        </div>
        {isConnected && (
          <div className='max-w-fit mx-auto mt-8'>
          { isSmartWallet ?
          <TransactionWrapperStake
            address={address}
            amount={stakeAmount}
            chainId={chainId}
            seedTokenAddress={process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`}
            stakeContractAddress={process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`}
            seedAllowance={seedAllowance || 0n}
            onSuccess={handleStakeSuccess}
            onError={handleStakeError}
          />
          :
          <Button
          className="w-[150px]"
          wrapperClassName="mt-4 mx-auto"
          onClick={onStake}
          disabled={isApproving || isStaking || !isConnected}
        >
          {isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake'}
        </Button>
}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

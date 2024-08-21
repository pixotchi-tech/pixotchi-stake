import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useChainId } from 'wagmi';
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
import TransactionWrapperWithdraw from '../onchainkit/TransactionWrapperWithdraw';
import { usePrivy, useWallets } from '@privy-io/react-auth';

interface StakeWithdrawProps {
  address: `0x${string}`;
  withdrawAmount: string;
  setWithdrawAmount: (amount: string) => void;
  isConnected: boolean;
  stakedBalance: bigint | undefined;
  onWithdrawSuccess: () => void;
  onWithdrawError: (error: string) => void;
  onMaxWithdraw: () => void;

  //EOA accounts
  isWithdrawing: boolean;
  onWithdraw: () => void;
}

export function StakeWithdraw({
  address,
  withdrawAmount,
  setWithdrawAmount,
  isConnected,
  stakedBalance,
  onWithdrawSuccess,
  onWithdrawError,
  onMaxWithdraw,
  isWithdrawing,
  onWithdraw,
}: StakeWithdrawProps) {
  const chainId = useChainId();
  console.log('chainId:', chainId);
  const { user } = usePrivy();
  console.log('user:', user);
  const { wallets } = useWallets();

  const [isSmartWallet, setIsSmartWallet] = useState(false);

  useEffect(() => {
    if (address && wallets) {
      const currentWallet = wallets.find(wallet => wallet.address.toLowerCase() === address.toLowerCase());
      setIsSmartWallet(currentWallet?.connectorType === 'coinbase_wallet');
    }
  }, [address, wallets]);

  console.log('isSmartWallet:', isSmartWallet);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setWithdrawAmount(value);
  };

  const handleWithdrawSuccess = () => {
    setWithdrawAmount('');
    onWithdrawSuccess();
  };

  const handleWithdrawError = (error: TransactionError) => {
    console.error('Withdrawal error:', error);
    onWithdrawError('Failed to withdraw. Please try again.');
  };

  const formattedStakedBalance = formatBalanceWithTwoDecimals(stakedBalance);

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Withdraw SEED</CardTitle>
        <CardDescription>
          Withdraw your staked SEED tokens <br /> from the staking contract.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount">Withdraw Amount</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="withdraw-amount"
                placeholder="0.0"
                value={withdrawAmount}
                onChange={handleInputChange}
                disabled={!isConnected}
              />
              <Image src={seedLogo} alt="Seed logo" width={32} height={32} />
              <Button
                className="min-w-[64px]"
                onClick={onMaxWithdraw}
                disabled={!isConnected}
              >
                Max
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start text-sm gap-2">
            <span>Staked Balance: </span>
            <span className='-mt-2'>{formattedStakedBalance} SEED</span>
          </div>
        </div>
        {isConnected && (
          <div className='max-w-fit mx-auto mt-8'>
            { isSmartWallet ?
              <TransactionWrapperWithdraw
                address={address}
                amount={withdrawAmount}
                seedTokenAddress={process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`}
                stakeContractAddress={process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`}
                seedAllowance={0n} // Not needed for withdraw
                onSuccess={handleWithdrawSuccess}
                onError={handleWithdrawError}
                chainId={chainId}
              />
              :
              <Button
                className="w-[150px]"
                wrapperClassName="mt-4 mx-auto"
                onClick={onWithdraw}
                disabled={isWithdrawing || !isConnected}
              >
                {isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
              </Button>
            }
          </div>


        )}
      </CardContent>
    </Card>
  );
}

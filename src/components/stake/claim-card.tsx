import { useChainId } from 'wagmi';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card/Card';
import { formatBalanceWithTwoDecimals } from '@/lib/utils';
import type { TransactionError } from '@coinbase/onchainkit/transaction';
import TransactionWrapperClaim from '../onchainkit/TransactionWrapperClaim';
import Image from 'next/image';
import leafLogo from '../../assets/images/leaf-logo.webp';
import { Button } from '../ui/Button/Button';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';
import { useWriteStakeContractClaimRewards } from '@/generated';

interface ClaimCardProps {
  address: `0x${string}`;
  isConnected: boolean;
  leafBalance: bigint | undefined;
  leafClaimable: bigint | undefined;
  onClaimSuccess: () => void;
  onClaimError: (error: string) => void;

  //EOA accounts
  onClaim?: () => void;
  isClaiming?: boolean;
}

export function ClaimCard({
  address,
  isConnected,
  leafBalance,
  leafClaimable,
  onClaimSuccess,
  onClaimError,
  onClaim,
  isClaiming,
}: ClaimCardProps) {
  const chainId = useChainId();
  const { user } = usePrivy();
  const { wallets } = useWallets();

  const [isSmartWallet, setIsSmartWallet] = useState(false);

  useEffect(() => {
    if (address && wallets) {
      const currentWallet = wallets.find(wallet => wallet.address.toLowerCase() === address.toLowerCase());
      setIsSmartWallet(currentWallet?.connectorType === 'coinbase_wallet');
    }
  }, [address, wallets]);

  const handleClaimSuccess = () => {
    onClaimSuccess();
  };

  const handleClaimError = (error: TransactionError) => {
    console.error('Claim error:', error);
    onClaimError('Failed to claim rewards. Please try again.');
  };

  //EOA accounts

  const { writeContractAsync: claimRewards } = useWriteStakeContractClaimRewards();

  const handleClaim = async () => {
    if (onClaim) {
      onClaim();
    } else {
      try {
        await claimRewards({ args: [] }); // Pass necessary arguments here
      } catch (error) {
        console.error('Claiming rewards failed:', error);
      }
    }
  };

  const formattedBalance = formatBalanceWithTwoDecimals(leafBalance);
  const formattedClaimable = formatBalanceWithTwoDecimals(leafClaimable);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Claim LEAF</CardTitle>
        <CardDescription>Claim your earned LEAF rewards</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex gap-2 justify-center">
              <p className="text-2xl font-bold">{formattedClaimable}</p>
              <Image src={leafLogo} alt="Leaf logo" width={32} height={32} />
            </div>
            <p className="text-sm text-muted-foreground">Available to claim</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{formattedBalance} LEAF</p>
            <p className="text-xs text-muted-foreground">Balance</p>
          </div>
        </div>
        {isConnected && (
          <div className='max-w-fit mx-auto mt-8'>
          { isSmartWallet ?
            <TransactionWrapperClaim
              address={address}
              amount="0" // Not needed for claim
              seedTokenAddress={process.env.NEXT_PUBLIC_SEED_TOKEN as `0x${string}`}
              stakeContractAddress={process.env.NEXT_PUBLIC_STAKING_CONTRACT as `0x${string}`}
              seedAllowance={0n} // Not needed for claim
              onSuccess={handleClaimSuccess}
              onError={handleClaimError}
              chainId={chainId}
            />
            :
            <Button
              className="w-[150px]"
              wrapperClassName="mx-auto mt-8"
              onClick={handleClaim}
              disabled={leafClaimable === BigInt(0) || isClaiming || !isConnected}
              >
              {isClaiming ? 'Claiming...' : 'Claim Rewards'}
            </Button>
          }
          </div>
        )}
      </CardContent>
    </Card>
  );
}

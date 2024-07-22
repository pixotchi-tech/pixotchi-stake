import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card/Card';
import { Button } from '@/components/ui';
import { formatBalanceWithTwoDecimals } from '@/lib/utils';
import { useWriteStakeContractClaimRewards } from '@/generated';
import leafLogo from '../../assets/images/leaf-logo.webp';

interface ClaimCardProps {
  leafBalance: bigint | undefined;
  leafClaimable: bigint | undefined;
  onClaim?: () => void;
  isClaiming?: boolean;
  isConnected: boolean;
}

export function ClaimCard({
  leafBalance,
  leafClaimable,
  onClaim,
  isClaiming = false,
  isConnected,
}: ClaimCardProps) {
  const { writeContractAsync: claimRewards } =
    useWriteStakeContractClaimRewards();

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
        <Button
          className="w-[150px]"
          wrapperClassName="mx-auto mt-8"
          onClick={handleClaim}
          disabled={leafClaimable === BigInt(0) || isClaiming || !isConnected}
        >
          {isClaiming ? 'Claiming...' : 'Claim Rewards'}
        </Button>
      </CardContent>
    </Card>
  );
}

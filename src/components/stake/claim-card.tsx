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
            <p className="text-2xl font-bold">{formattedClaimable} LEAF</p>
            <p className="text-sm text-muted-foreground">Available to claim</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{formattedBalance} LEAF</p>
            <p className="text-xs text-muted-foreground">Balance</p>
          </div>
        </div>
        <Button
          className="w-full"
          wrapperClassName="w-full mt-8"
          onClick={handleClaim}
          disabled={leafClaimable === BigInt(0) || isClaiming || !isConnected}
        >
          {isClaiming ? 'Claiming...' : 'Claim Rewards'}
        </Button>
      </CardContent>
    </Card>
  );
}

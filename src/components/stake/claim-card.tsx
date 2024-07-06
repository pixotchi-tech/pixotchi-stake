import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import { useWriteStakeContractClaimRewards } from "@/generated";

interface ClaimCardProps {
  leafBalance: bigint | undefined;
  leafClaimable: bigint | undefined;
  onClaim?: () => void;
  isClaiming?: boolean;
}

export function ClaimCard({ leafBalance, leafClaimable, onClaim, isClaiming = false }: ClaimCardProps) {
  const { writeContractAsync: claimRewards } = useWriteStakeContractClaimRewards();

  const handleClaim = async () => {
    if (onClaim) {
      onClaim();
    } else {
      try {
        await claimRewards({ args: [] }); // Pass necessary arguments here
      } catch (error) {
        console.error("Claiming rewards failed:", error);
      }
    }
  };

  const formattedBalance = formatBalanceWithTwoDecimals(leafBalance);
  const formattedClaimable = formatBalanceWithTwoDecimals(leafClaimable);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Claim LEAF</CardTitle>
        <CardDescription>Claim your earned LEAF rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{formattedClaimable} LEAF</p>
            <p className="text-sm text-muted-foreground">Available to claim</p>
            <p className="text-xl font-bold">{formattedBalance} LEAF</p>
            <p className="text-xs text-muted-foreground">Balance</p>
          </div>
          <Button 
            className="w-full" 
            onClick={handleClaim}
            disabled={!leafClaimable || leafClaimable <= (leafBalance ?? BigInt(0)) || isClaiming}
          >
            {isClaiming ? 'Claiming...' : 'Claim Rewards'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
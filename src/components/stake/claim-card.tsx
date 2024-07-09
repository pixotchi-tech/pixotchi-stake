import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import { useWriteStakeContractClaimRewards } from "@/generated";
import BtnTemplate2 from "@/components/ui/btnTemplate2"

interface ClaimCardProps {
  leafBalance: bigint | undefined;
  leafClaimable: bigint | undefined;
  onClaim?: () => void;
  isClaiming?: boolean;
  isConnected: boolean;
}

export function ClaimCard({ leafBalance, leafClaimable, onClaim, isClaiming = false, isConnected }: ClaimCardProps) {
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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Claim LEAF</CardTitle>
        <CardDescription>Claim your earned LEAF rewards</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-bold">{formattedClaimable} LEAF</p>
            <p className="text-sm text-muted-foreground">Available to claim</p>
          </div>
          <div className="text-center">
            <p className="text-md font-bold">{formattedBalance} LEAF</p>
            <p className="text-xs text-muted-foreground">Balance</p>
          </div>
        </div>
        <button 
          className="w-full mt-8 grid justify-items-center" 
          onClick={handleClaim}
          disabled={leafClaimable === BigInt(0) || isClaiming || !isConnected}
        >
          <BtnTemplate2 text={isClaiming ? 'Claiming...' : 'Claim'} />
        </button>
      </CardContent>
    </Card>
  )
}
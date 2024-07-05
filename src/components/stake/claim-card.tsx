import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"

interface ClaimCardProps {
  leafBalance: bigint | undefined;
  onClaim?: () => void;
  isClaiming?: boolean;
}

export function ClaimCard({ leafBalance, onClaim, isClaiming = false }: ClaimCardProps) {
  const formattedBalance = formatBalanceWithTwoDecimals(leafBalance);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Claim LEAF</CardTitle>
        <CardDescription>Claim your earned LEAF rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{formattedBalance} LEAF</p>
            <p className="text-sm text-muted-foreground">Available to claim</p>
          </div>
          <Button 
            className="w-full" 
            onClick={onClaim}
            disabled={!leafBalance || leafBalance === 0n || isClaiming}
          >
            {isClaiming ? 'Claiming...' : 'Claim Rewards'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
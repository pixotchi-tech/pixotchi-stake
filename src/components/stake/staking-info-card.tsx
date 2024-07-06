import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StakingInfoCardProps {

}

export function StakingInfoCard({ }: StakingInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🌱 Staking Info 🌱</CardTitle>
        <CardDescription>✨ Learn more about the magic of SEED staking</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc space-y-2">
          <li>🌿 Stake your SEED tokens to earn LEAF rewards</li>
          <li>🔓 No lock-up period - unstake anytime</li>
          <li>📈 Returns vary based on total staked amount</li>
          <li>⏱️ Reward calculation is in real time (blocktime)</li>
        </ul>
      </CardContent>
    </Card>
  )
}
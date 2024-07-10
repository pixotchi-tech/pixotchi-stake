import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BorderTemplate } from '../ui/borderTemplate';

export function StakingInfoCard() {
  return (
    <BorderTemplate >
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>🌱 Staking Info 🌱</CardTitle>
          <CardDescription>✨ Learn more about the magic of SEED staking</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-inside list-disc space-y-2 text-sm">
            <li>🌿 Stake your SEED tokens to earn LEAF rewards</li>
            <li>🔓 No lock-up period - unstake anytime</li>
            <li>📈 Returns vary based on total staked amount</li>
            <li>⏱️ Reward calculation is in real time (blocktime)</li>
          </ul>
        </CardContent>
      </Card>
    </BorderTemplate>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StakingInfoCardProps {
  stakedBalance: bigint;
  rewards: bigint;
}

export function StakingInfoCard({ stakedBalance, rewards }: StakingInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staking Info</CardTitle>
        <CardDescription>Learn more about SEED staking</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc space-y-2">
          <li>Stake your SEED tokens to earn LEAF rewards</li>
          <li>Rewards are distributed daily</li>
          <li>No lock-up period - unstake anytime</li>
          <li>APY varies based on total staked amount</li>
          <li>Tokens Staked: {stakedBalance}</li>
          <li>Rewards: {rewards}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
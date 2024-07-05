import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"

interface StakeCardProps {
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
  seedBalance: bigint | undefined;
  seedAllowance: bigint | undefined;
  isApproving: boolean;
  isStaking: boolean;
  onStake: () => void;
  onMaxStake: () => void;
  onRemoveAllowance: () => void;
}

export function StakeCard({
  stakeAmount,
  setStakeAmount,
  seedBalance,
  seedAllowance,
  isApproving,
  isStaking,
  onStake,
  onMaxStake,
  onRemoveAllowance
}: StakeCardProps) {
  const [showRemoveAllowance, setShowRemoveAllowance] = useState(false);

  useEffect(() => {
    setShowRemoveAllowance(seedAllowance && seedAllowance > 0);
  }, [seedAllowance]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setStakeAmount(value);
  };

  const formattedBalance = formatBalanceWithTwoDecimals(seedBalance);
  const formattedAllowance = formatBalanceWithTwoDecimals(seedAllowance);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stake SEED</CardTitle>
        <CardDescription>Stake your SEED tokens to earn LEAF rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stake-amount">Stake Amount</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="stake-amount"
                placeholder="0.0"
                value={stakeAmount}
                onChange={handleInputChange}
              />
              <Button variant="outline" onClick={onMaxStake}>Max</Button>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Balance: {formattedBalance} SEED</span>
            <span>
              Allowance: {formattedAllowance} SEED
              {showRemoveAllowance && (
                <span className="underline cursor-pointer ml-1" onClick={onRemoveAllowance}>
                  remove
                </span>
              )}
            </span>
          </div>
          <Button
            className="w-full"
            onClick={onStake}
            disabled={isApproving || isStaking}
          >
            {isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
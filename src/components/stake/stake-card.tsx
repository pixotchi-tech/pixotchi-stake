import { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card/Card';
import { Button, Input, Label } from '@/components/ui';
import { formatBalanceWithTwoDecimals } from '@/lib/utils';

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
  isConnected: boolean;
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
  onRemoveAllowance,
  isConnected,
}: StakeCardProps) {
  const [showRemoveAllowance, setShowRemoveAllowance] = useState(false);

  useEffect(() => {
    setShowRemoveAllowance(Boolean(seedAllowance && seedAllowance > 0));
  }, [seedAllowance]);

  useEffect(() => {
    if (seedBalance) {
      setStakeAmount(formatBalanceWithTwoDecimals(seedBalance));
    }
  }, [seedBalance, setStakeAmount]);

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
        <CardDescription>
          Stake your SEED tokens to earn LEAF rewards
        </CardDescription>
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
                disabled={!isConnected}
              />
              <Button
                variant="outline"
                onClick={onMaxStake}
                disabled={!isConnected}
              >
                Max
              </Button>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Balance: {formattedBalance} SEED</span>
            <span>
              Allowance: {formattedAllowance} SEED
              {showRemoveAllowance && (
                <span
                  className="underline cursor-pointer ml-1"
                  onClick={onRemoveAllowance}
                >
                  remove
                </span>
              )}
            </span>
          </div>
          <Button
            className="w-full"
            wrapperClassName="w-full"
            onClick={onStake}
            disabled={isApproving || isStaking || !isConnected}
          >
            {isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
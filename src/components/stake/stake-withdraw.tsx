import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"

interface StakeWithdrawProps {
  withdrawAmount: string;
  setWithdrawAmount: (amount: string) => void;
  stakedBalance: bigint | undefined;
  isWithdrawing: boolean;
  onWithdraw: () => void;
  onMaxWithdraw: () => void;
}

export function StakeWithdraw({
  withdrawAmount,
  setWithdrawAmount,
  stakedBalance,
  isWithdrawing,
  onWithdraw,
  onMaxWithdraw
}: StakeWithdrawProps) {
  useEffect(() => {
    if (stakedBalance) {
      setWithdrawAmount(formatBalanceWithTwoDecimals(stakedBalance));
    }
  }, [stakedBalance, setWithdrawAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setWithdrawAmount(value);
  };

  const formattedStakedBalance = formatBalanceWithTwoDecimals(stakedBalance);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Withdraw SEED</CardTitle>
        <CardDescription>Withdraw your staked SEED tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount">Withdraw Amount</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="withdraw-amount"
                placeholder="0.0"
                value={withdrawAmount}
                onChange={handleInputChange}
              />
              <Button variant="outline" onClick={onMaxWithdraw}>Max</Button>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Staked Balance: {formattedStakedBalance} SEED</span>
          </div>
          <Button
            className="w-full"
            onClick={onWithdraw}
            disabled={isWithdrawing}
          >
            {isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
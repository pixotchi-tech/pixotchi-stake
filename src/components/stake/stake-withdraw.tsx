import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import BtnTemplate2 from "@/components/ui/btnTemplate2"

interface StakeWithdrawProps {
  withdrawAmount: string;
  setWithdrawAmount: (amount: string) => void;
  stakedBalance: bigint | undefined;
  isWithdrawing: boolean;
  onWithdraw: () => void;
  onMaxWithdraw: () => void;
  isConnected: boolean;
}

export function StakeWithdraw({
  withdrawAmount,
  setWithdrawAmount,
  stakedBalance,
  isWithdrawing,
  onWithdraw,
  onMaxWithdraw,
  isConnected
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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Withdraw SEED</CardTitle>
        <CardDescription>Withdraw your staked SEED tokens</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount">Withdraw Amount</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="withdraw-amount"
                placeholder="0.0"
                value={withdrawAmount}
                onChange={handleInputChange}
                disabled={!isConnected}
              />
              <Button variant="outline" onClick={onMaxWithdraw} disabled={!isConnected}>Max</Button>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span>Staked Balance: {formattedStakedBalance} SEED</span>
          </div>
        </div>
        <button
          className="w-full mt-4 grid justify-items-center"
          onClick={onWithdraw}
          disabled={isWithdrawing || !isConnected}
        >
        <BtnTemplate2 text={isWithdrawing ? 'Withdrawing...' : 'Withdraw'} />
        </button>
      </CardContent>
    </Card>
  )
}
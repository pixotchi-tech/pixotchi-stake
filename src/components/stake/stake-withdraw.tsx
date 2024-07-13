import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import BtnTemplate from "@/components/ui/btnTemplate"
import Image from "next/image";
import { BorderTemplate } from '../ui/borderTemplate';
import { BtnBlue, SeedIcon } from "../../../public/icons";

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
    <BorderTemplate>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>Withdraw SEED</CardTitle>
          <CardDescription>Withdraw your staked SEED tokens</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between ">
          <div className="space-y-4 mt-1">
            <div className="space-y-2">
              <Label htmlFor="withdraw-amount">Amount</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="withdraw-amount"
                  placeholder="0.0"
                  value={withdrawAmount}
                  onChange={handleInputChange}
                  disabled={!isConnected}
                  className='w-full'
                />

                <div className="flex flex-row ml-2">
                  <div style={{ width: "30px" }}>
                    <Image alt="" src={SeedIcon} />
                  </div>
                </div>

                <button onClick={onMaxWithdraw} disabled={!isConnected}
                className="w-1/3 grid justify-items-center cursor-pointer" >
                  <div className={`relative w-full`}>
                      <Image alt="" src={BtnBlue} />
                      <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      text-xs md:text-sm lg:text-sm text-white cursor-pointer`} >
                          MAX
                      </h1>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span>Staked Balance: {formattedStakedBalance} SEED</span>
            </div>
          </div>
          <div className='grid justify-items-center w-full mt-6'>
            <div className="max-w-28 hover:cursor-pointer">
              <BtnTemplate
              action={onWithdraw}
              disabled={isWithdrawing || !isConnected}
              text={isWithdrawing ? 'Unstaking...' : 'Unstake'} />
            </div>
          </div>
        </CardContent>
      </Card>
    </BorderTemplate>
  )
}
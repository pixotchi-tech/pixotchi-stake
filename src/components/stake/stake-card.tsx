import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import BtnTemplate2 from "@/components/ui/btnTemplate2"
import Image from "next/image";
import { BtnBlue } from "../../../public/icons";
import { BorderTemplate } from '../ui/borderTemplate';

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
  isConnected
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
    <BorderTemplate>
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
                  disabled={!isConnected} 
                  className='w-full'
                />
                <button onClick={onMaxStake} disabled={!isConnected}
                className="w-1/3 grid justify-items-center" >
                  <div className={`relative w-full`}>
                      <Image alt="" src={BtnBlue} />
                      <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      text-xs md:text-sm lg:text-sm text-white`} >
                          MAX
                      </h1>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-between text-xs">
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
            <button
              className="w-full grid justify-items-center"
              onClick={onStake}
              disabled={isApproving || isStaking || !isConnected} >
              <BtnTemplate2 text={isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake'} />
            </button>
          </div>
        </CardContent>
      </Card>
    </BorderTemplate>
  )
}
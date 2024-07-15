import { useState, useEffect } from 'react';
import {Container, Heading, Input, Button, Colors} from 'nes-ui-react';
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
    <Container  style={{ backgroundColor: Colors.color3D, color: Colors.color01 }} title="Stake SEED" roundedCorners>
      <Heading size="medium">Stake your SEED tokens to earn LEAF rewards</Heading>
      
      <Container align="left">
        <Heading size="small">Stake Amount</Heading>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            id="stake-amount"
            value={stakeAmount}
            onChange={handleInputChange}
            disabled={!isConnected}
          />
          <Button onClick={onMaxStake} disabled={!isConnected}>Max</Button>
        </div>
      </Container>
      
      <Container align="left">
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
      </Container>
      
      <Button
        onClick={onStake}
        disabled={isApproving || isStaking || !isConnected}
      >
        {isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake'}
      </Button>
    </Container>
  )
}
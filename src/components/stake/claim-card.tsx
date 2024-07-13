import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatBalanceWithTwoDecimals } from "@/lib/utils"
import { useWriteStakeContractClaimRewards } from "@/generated";
import BtnTemplate from "@/components/ui/btnTemplate"
import { BorderTemplate } from '../ui/borderTemplate';
import { leafIcon } from "../../../public/icons";
import Image from "next/image";

interface ClaimCardProps {
  leafBalance: bigint | undefined;
  leafClaimable: bigint | undefined;
  onClaim?: () => void;
  isClaiming?: boolean;
  isConnected: boolean;
}

export function ClaimCard({ leafBalance, leafClaimable, onClaim, isClaiming = false, isConnected }: ClaimCardProps) {
  const { writeContractAsync: claimRewards } = useWriteStakeContractClaimRewards();

  const handleClaim = async () => {
    if (onClaim) {
      onClaim();
    } else {
      try {
        await claimRewards({ args: [] }); // Pass necessary arguments here
      } catch (error) {
        console.error("Claiming rewards failed:", error);
      }
    }
  };

  const formattedBalance = formatBalanceWithTwoDecimals(leafBalance);
  const formattedClaimable = formatBalanceWithTwoDecimals(leafClaimable);

  return (
    <BorderTemplate>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>Claim LEAF</CardTitle>
          <CardDescription>Claim your earned LEAF rewards</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center">
          <div className="space-y-8">
            <div className="text-center justify-center grid justify-items-center ">
                <div className="flex flex-row">
                  <p className="text-lg font-bold">{formattedClaimable}</p>
                  <div className="ml-2" style={{ width: "30px" }}>
                    <Image alt="" src={leafIcon} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Available to claim</p>
            </div>
            <div className="text-center">
              <p className="text-md font-bold">{formattedBalance} LEAF</p>
              <p className="text-xs text-muted-foreground">Balance</p>
            </div>
          </div>
          <div className='grid justify-items-center w-full mt-10'>
            <div className="max-w-28 hover:cursor-pointer">
              <BtnTemplate
              action={handleClaim}
              disabled={leafClaimable === BigInt(0) || isClaiming || !isConnected}
              text={isClaiming ? 'Claiming...' : 'Claim'} />
            </div>
          </div>
        </CardContent>
      </Card>
    </BorderTemplate>
  )
}
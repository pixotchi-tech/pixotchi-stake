import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeafIcon } from "./leaf-icon"
import BtnTemplate from "../ui/btnTemplate";

interface HeaderProps {
  isConnected: boolean;
  address: string | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function Header({ isConnected, address, onConnect, onDisconnect }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b bg-background px-4 py-3 sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">SEED Staking</span>
        </Link>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <>
              <span className="font-medium">{address && `${address.slice(0, 6)}...${address.slice(-4)}`}</span>
              <Button variant="outline" onClick={onDisconnect}>Disconnect</Button>
            </>
          ) : (
            // <Button variant="outline" onClick={onConnect}>Connect Wallet</Button>
            <div className="grid justify-items-end max-w-28">
            <BtnTemplate text={"ENTER"} action={onConnect} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
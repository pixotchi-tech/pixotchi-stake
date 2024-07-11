import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import BtnTemplate from "../ui/btnTemplate";
import { Logo  } from "../../../public/icons";

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
          <Image src={Logo} alt=""  className="h-10 w-10 text-primary" />
          <span className="font-bold">SEED STAKING</span>
        </Link>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <>
              <span className="font-medium">{address && `${address.slice(0, 6)}...${address.slice(-4)}`}</span>
              {/* <Button variant="outline" onClick={onDisconnect}>Disconnect</Button> */}
              <div className="grid justify-items-end max-w-28">
              <BtnTemplate text={"Disconnect"} action={onDisconnect} />
              </div>
            </>
          ) : (
            // <Button variant="outline" onClick={onConnect}>Connect Wallet</Button>
            <div className="grid justify-items-end max-w-28">
            <BtnTemplate text={"CONNECT"} action={onConnect} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
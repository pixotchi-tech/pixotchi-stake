import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui';
import logo from '../../assets/images/logo.webp';

interface HeaderProps {
  isConnected: boolean;
  address: string | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function Header({
  isConnected,
  address,
  onConnect,
  onDisconnect,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b bg-background px-4 py-3 sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={logo} alt="logo" width={24} height={24} />
          <span className="font-bold">SEED Staking</span>
        </Link>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <>
              <span className="font-medium">
                {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
              </span>
              <Button variant="outline" onClick={onDisconnect}>
                Disconnect
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={onConnect}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

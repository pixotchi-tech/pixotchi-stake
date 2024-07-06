'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {http, webSocket} from 'viem';
import {baseSepolia} from 'viem/chains';

import type { PrivyClientConfig} from '@privy-io/react-auth';
import {addRpcUrlOverrideToChain} from '@privy-io/react-auth';
import {PrivyProvider} from '@privy-io/react-auth';
import {WagmiProvider, createConfig} from '@privy-io/wagmi';
import {fallback} from "wagmi";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: fallback([
      webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100 }),
      http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
    ])
  },
});

const baseSepoliaOverride = addRpcUrlOverrideToChain(baseSepolia, process.env.NEXT_PUBLIC_RPC_SERVER!);

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: false,
    noPromptOnSignature: true,
  },
  loginMethods: ['wallet', 'email'],
  appearance: {
    showWalletLoginFirst: true,
  },

};

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      /*apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}*/
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        ...privyConfig,
        defaultChain: baseSepolia,
        supportedChains: [baseSepoliaOverride],
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

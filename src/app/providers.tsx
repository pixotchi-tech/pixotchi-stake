'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {http, webSocket} from 'viem';
import {baseSepolia, base} from "viem/chains";
import { extractChain } from 'viem'
import type { PrivyClientConfig} from '@privy-io/react-auth';
import {addRpcUrlOverrideToChain} from '@privy-io/react-auth';
import {PrivyProvider} from '@privy-io/react-auth';
import {WagmiProvider, createConfig} from '@privy-io/wagmi';
import {fallback} from "wagmi";

const queryClient = new QueryClient();

const chain = extractChain({chains: [baseSepolia, base], id: Number(process.env.NEXT_PUBLIC_CHAIN_ID) == 8453 ? 8453 : 84532 })

export const wagmiConfig = createConfig({ // this needs debuging to change
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: fallback([
      webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100 }),
      http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
    ])
  },
});

const ChainOverride = addRpcUrlOverrideToChain(chain, process.env.NEXT_PUBLIC_RPC_SERVER!);

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
        defaultChain: chain,
        supportedChains: [ChainOverride],
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

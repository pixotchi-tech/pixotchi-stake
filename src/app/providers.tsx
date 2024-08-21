// 'use client';

// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import {Chain, ClientConfig, http, webSocket} from 'viem';
// import {baseSepolia, base} from "viem/chains";
// import {extractChain} from 'viem'
// import type {PrivyClientConfig} from '@privy-io/react-auth';
// import {addRpcUrlOverrideToChain} from '@privy-io/react-auth';
// import {PrivyProvider} from '@privy-io/react-auth';
// import {WagmiProvider, createConfig} from '@privy-io/wagmi';
// import {fallback} from "wagmi";

// const queryClient = new QueryClient();

// export const chainId =  84532;
// // export const chainId = Number("process.env.NEXT_PUBLIC_CHAIN_ID") == 8453 ? 8453 : 84532;

// const chain = extractChain({
//   chains: [baseSepolia],
//   id: chainId,
// })

// const ChainOverride = addRpcUrlOverrideToChain(baseSepolia, process.env.NEXT_PUBLIC_RPC_SERVER!);


// const wagmiPrivyConfig = createConfig({ // this needs testing
//   chains: [ChainOverride],
//   transports: {
//     [ChainOverride.id]: fallback([
//       webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100}),
//       http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
//     ])
//   },
// });

// export const wagmiConfig = createConfig({ // this needs testing
//   chains: [baseSepolia],
//   transports: {
//     [baseSepolia.id]: fallback([
//       webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100}),
//       http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
//     ])
//   },
// });

// const privyConfig: PrivyClientConfig = {
//   embeddedWallets: {
//     createOnLogin: 'users-without-wallets',
//     requireUserPasswordOnCreate: false,
//     noPromptOnSignature: true,
//   },
//   loginMethods: ['wallet', 'email'],
//   appearance: {
//     showWalletLoginFirst: true,
//   },

// };

// export default function Providers({children}: {children: React.ReactNode}) {
//   return (
//     <PrivyProvider
//       /*apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}*/
//       appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
//       config={{
//         ...privyConfig,
//         defaultChain: ChainOverride,
//         supportedChains: [ChainOverride],
//         embeddedWallets: {
//           createOnLogin: 'users-without-wallets'
//         },
//         externalWallets: {
//           coinbaseWallet: {
//             // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
//             connectionOptions: 'smartWalletOnly',
//           },
//         },
//       }}
//     >
//       <QueryClientProvider client={queryClient}>
//         <WagmiProvider config={wagmiPrivyConfig} reconnectOnMount={false}>
//           {children}
//         </WagmiProvider>
//       </QueryClientProvider>
//     </PrivyProvider>
//   );
// }

'use client';

import * as React from 'react';

import {
  base,
  mainnet,
  baseSepolia,
  localhost
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from '@privy-io/wagmi';
import { PrivyClientConfig, PrivyProvider } from '@privy-io/react-auth';
import { useRouter } from "next/navigation";
import {http, webSocket} from 'wagmi';
import {createConfig} from '@privy-io/wagmi';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import {extractChain, fallback} from 'viem'


import {addRpcUrlOverrideToChain} from '@privy-io/react-auth';

export const chainId = 8453;//= Number("process.env.NEXT_PUBLIC_CHAIN_ID") == 8453 ? 8453 : 84532;

const chain = extractChain({
  chains: [base],
  id: chainId,
})

const ChainOverride = addRpcUrlOverrideToChain(base, process.env.NEXT_PUBLIC_RPC_SERVER!);

const rpcOverride = addRpcUrlOverrideToChain(baseSepolia, process.env.NEXT_PUBLIC_RPC_SERVER || "");



export const wagmiPrivyConfig = createConfig({ // this needs testing
  chains: [ChainOverride],
  transports: {
    [ChainOverride.id]: fallback([
      webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100}),
      http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
    ])
  },
});

// export const wagmiConfig = createConfig({ // this needs testing
//   chains: [base],
//   transports: {
//     [base.id]: fallback([
//       webSocket(process.env.NEXT_PUBLIC_RPC_SERVER_WS, {reconnect: true, retryCount: 100}),
//       http(process.env.NEXT_PUBLIC_RPC_SERVER, {batch: true}),
//     ])
//   },
// });

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  loginMethods: ['wallet', 'email', 'sms'],
  loginMethodsAndOrder: { primary: ['coinbase_wallet'], overflow: ['metamask', 'rainbow', 'detected_wallets', 'email']},
  appearance: {
    showWalletLoginFirst: true,
    walletList: [ 'coinbase_wallet', 'metamask', 'rainbow', 'detected_wallets'],
    accentColor: "#2A3D55",
    logo : "/icons/logo.png"
  },
  externalWallets: {
    coinbaseWallet: {
      connectionOptions: 'smartWalletOnly', // or 'smartWalletOnly' if only Smart Wallet
    },
  },

};

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      onSuccess={() => router.push("/")}
      config={{
        ...privyConfig,
        defaultChain: ChainOverride,
        supportedChains: [ChainOverride],
      }}

    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiPrivyConfig} reconnectOnMount={false}>
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_CDP_API_KEY || ""}
            chain={ChainOverride}
          >
          {children}
          </OnchainKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

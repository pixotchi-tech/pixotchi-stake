import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'
import { baseSepolia } from 'wagmi/chains'
import {chainId} from "@/app/providers";
import {base} from "viem/chains";

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: chainId,
      contracts: [
        {
          name: 'SeedToken',
          address: {
            [baseSepolia.id]: '0xc64F740D216B6ec49e435a8a08132529788e8DD0',
            [base.id]: '0x546D239032b24eCEEE0cb05c92FC39090846adc7',
          },
        },
        {
          name: 'LeafToken',
          address: {
            [baseSepolia.id]: '0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4',
            [base.id]: '0xe78ee52349d7b031e2a6633e07c037c3147db116',
          },
        },
        {
          name: 'StakeContract',
          address: {
            [baseSepolia.id]: '0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce',
            [base.id]: '0xf15d93c3617525054af05338cc6ccf18886bd03a',
          },
        },
      ],
    }),
    react(),
  ],
})
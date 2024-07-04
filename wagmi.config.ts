import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'
import { baseSepolia } from 'wagmi/chains'

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
      chainId: baseSepolia.id,
      contracts: [
        {
          name: 'SeedToken',
          address: {
            [baseSepolia.id]: '0xc64F740D216B6ec49e435a8a08132529788e8DD0',
          },
        },
        {
          name: 'LeafToken',
          address: {
            [baseSepolia.id]: '0x33feeD5a3eD803dc03BBF4B6041bB2b86FACD6C4',
          },
        },
        {
          name: 'StakeContract',
          address: {
            [baseSepolia.id]: '0xEA6fBFDb8c846323f56cd819350fB63f1D8aFdce',
          },
        },
      ],
    }),
    react(),
  ],
})
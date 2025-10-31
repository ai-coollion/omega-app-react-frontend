import { createConfig, http } from 'wagmi'
import { bscTestnet, mainnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, bscTestnet],
  transports: {
    [mainnet.id]: http(),
    [bscTestnet.id]: http()
  }
})

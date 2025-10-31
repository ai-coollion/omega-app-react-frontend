import { config } from '@/constants/wagmiConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import { FC, ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { ConnectKitModalProvider } from './ConnectKitModalProvider'

interface Props {
  children: ReactNode
}

const queryClient = new QueryClient()

const Web3Provider: FC<Props> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme='auto'
          mode='dark'
          customTheme={{
            '--ck-font-family': '"Exo",  cursive'
          }}
        >
          <ConnectKitModalProvider>{children}</ConnectKitModalProvider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider

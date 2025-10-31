// ConnectKitModalProvider.tsx
import { ConnectKitButton } from 'connectkit'
import { createContext, ReactNode, useContext } from 'react'

interface ConnectKitModalContextType {
  show: () => void
}

const ConnectKitModalContext = createContext<ConnectKitModalContextType | null>(null)

interface ConnectKitModalProviderProps {
  children: ReactNode
}

export const ConnectKitModalProvider: React.FC<ConnectKitModalProviderProps> = ({ children }) => {
  return (
    <ConnectKitButton.Custom>
      {({ show }) => {
        return show && <ConnectKitModalContext.Provider value={{ show }}>{children}</ConnectKitModalContext.Provider>
      }}
    </ConnectKitButton.Custom>
  )
}

export const useConnectKitModal = (): (() => void) => {
  const context = useContext(ConnectKitModalContext)
  if (!context) {
    throw new Error('useConnectKitModal must be used within a ConnectKitModalProvider')
  }
  return context.show
}

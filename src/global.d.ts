import { Eip1193Provider } from 'ethers' // or the appropriate type from your library

interface ExtendedEip1193Provider extends Eip1193Provider {
  on(event: string, listener: (...args: any[]) => void): void
  removeListener(event: string, listener: (...args: any[]) => void): void
}

declare global {
  interface Window {
    ethereum?: any
  }
}

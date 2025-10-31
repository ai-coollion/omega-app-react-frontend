import { useSelector } from '@/store'

export function useWalletAddress() {
  const { account } = useSelector(store => store.wallet)
  return { account }
}

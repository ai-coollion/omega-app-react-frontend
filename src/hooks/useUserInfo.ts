import { useSelector } from '@/store';

export function useUserInfo() {
  const { user } = useSelector(store => store.auth);

  return user;
}

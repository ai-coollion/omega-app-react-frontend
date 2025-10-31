import { useSelector } from '@/store';

export function useNotificationInfo() {
  const { notifications, newsCount } = useSelector(store => store.notification);

  return { notifications, newsCount };
}

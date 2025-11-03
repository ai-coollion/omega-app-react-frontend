// import { API_ENDPOINTS } from '@/configs'
// import apiRequest from '@/lib/axios'
// import { NotificationType } from '@/types'

// export const readNotification = async (notificationId: string) => {
//   return apiRequest({
//     method: 'PATCH',
//     url: API_ENDPOINTS.NOTIFICATION.READ(notificationId),
//     errorMessage: 'Mark Notification Failed'
//   })
// }

// export const readNotificationAll = async () => {
//   return apiRequest({
//     method: 'PATCH',
//     url: API_ENDPOINTS.NOTIFICATION.MARK_ALL,
//     errorMessage: 'Mark Notification Failed'
//   })
// }

// export const getNotifications = async (userId: string): Promise<NotificationType[]> => {
//   return apiRequest({
//     url: API_ENDPOINTS.NOTIFICATION.GET(userId),
//     method: 'GET',
//     errorMessage: 'Fetching Failed'
//   })
// }

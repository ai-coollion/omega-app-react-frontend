export interface NotificationType {
  _id: string
  from: string
  fromUser: string
  title: string
  content: string
  createdAt: string
  isRead: boolean
  type: string
}

export interface NotificationResponse {
  data: NotificationType[]
}

export interface NotificationState {
  notifications: NotificationType[]
  newsCount: number
}

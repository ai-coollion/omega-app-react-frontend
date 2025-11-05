import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState, NotificationType } from '@/types/notification';

const initialState: NotificationState = {
  notifications: [],
  newsCount: 0
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification(state, action: PayloadAction<NotificationType>) {
      state.notifications.unshift(action.payload);
      state.newsCount++;
    },
    pushNotifications(
      state,
      action: PayloadAction<NotificationState['notifications']>
    ) {
      state.notifications = action.payload;
      state.newsCount = state.notifications.filter(item => !item.isRead).length;
    },
    markNotificationAsRead(state, action: PayloadAction<string>) {
      const updatedList = state.notifications.map(item => {
        const newItem = item;
        newItem.isRead = action.payload === item._id ? true : item.isRead;

        return newItem;
      });
      state.notifications = updatedList;
      state.newsCount = state.newsCount === 0 ? 0 : state.newsCount - 1;
    }
  }
});

export default notificationSlice.reducer;

export const { pushNotification, pushNotifications, markNotificationAsRead } =
  notificationSlice.actions;

export const API_ENDPOINTS = {
  USERS: {
    LOGIN: 'auth/signin',
    REGISTER: 'auth/signup',
    VERIFY: 'auth/Verify',
    UPDATE: 'auth/update',
    DPROFILE: 'user/updatedev',
    GETUSERS: 'user',
    DELETEUSER: (userId: string) => `user/${userId}`,
    ROLECHANGE: (userId: string, role: string) => `user/${userId}/${role}`,
    FOLLOW: (userId: string) => `user/follow/${userId}`,
    UNFOLLOW: (userId: string) => `user/unfollow/${userId}`
  },
  DEVELOPERS: {
    GET: 'user/developers'
  },
  MEDIA: {
    UPLOAD: `media/upload`,
    UPLOADVIDEO: `media/uploadvideo`
  },
  PROJECT: {
    CREATE: 'project',
    GET: 'project',
    GETALLOWED: 'project/allowed',
    GETBYUSER: (userId: string) => `project/user/${userId}`,
    MYPROJECT: 'project/myproject',
    VERIFYPROJCET: (projectId: string) => `project/${projectId}`
  },
  TASK: {
    CREATE: 'task',
    GET: 'task',
    PUT: (taskId: string) => `task/${taskId}`,
    DELETE: (taskId: string) => `task/${taskId}`,
    UPDATE: (taskId: string) => `task/update/${taskId}`
  },
  SERVICE: {
    CURRENT: 'service/currentstate'
  },
  NOTIFICATION: {
    GET: (userId: string) => `notification/user/${userId}`,
    READ: (notificationId: string) => `notification/${notificationId}/read`,
    MARK_Notification: 'notification/',
    MARK_ALL: 'notification/read-all'
  }
}

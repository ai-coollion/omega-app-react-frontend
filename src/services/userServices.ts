// import { API_ENDPOINTS } from '@/configs'
// import apiRequest from '@/lib/axios'
// import { Developer } from '@/types'
// import { AuthFormData, LoginUserRes, MessageRes, User, VerifyEmailFormData } from '@/types/auth'

// export const registerUser = async (data: AuthFormData): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'POST',
//     url: API_ENDPOINTS.USERS.REGISTER,
//     data,
//     errorMessage: 'Registration Failed'
//   })
// }

// export const loginUser = async (data: AuthFormData): Promise<LoginUserRes> => {
//   return apiRequest({
//     method: 'POST',
//     url: API_ENDPOINTS.USERS.LOGIN,
//     data,
//     errorMessage: 'Login Failed'
//   })
// }

// export const verifyEmail = async (data: VerifyEmailFormData) => {
//   return apiRequest({
//     method: 'POST',
//     url: API_ENDPOINTS.USERS.VERIFY,
//     data,
//     errorMessage: 'Verification Failed'
//   })
// }

// export const updateUserRequest = async (data: Partial<User>): Promise<User> => {
//   return apiRequest({
//     method: 'PUT',
//     url: API_ENDPOINTS.USERS.UPDATE,
//     data,
//     errorMessage: 'Failed to update user'
//   })
// }

// export const updateDeveloper = async (data: Partial<User>): Promise<User> => {
//   return apiRequest({
//     method: 'PUT',
//     url: API_ENDPOINTS.USERS.DPROFILE,
//     data,
//     errorMessage: 'Failed to update a developer'
//   })
// }

// export const getDevelopers = async (): Promise<Developer[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.DEVELOPERS.GET,
//     errorMessage: 'Failed to update a developer'
//   })
// }

// export const getUsers = async (): Promise<Developer[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.USERS.GETUSERS,
//     errorMessage: 'Failed to update a developer'
//   })
// }

// export const deleteUser = async (userId: string): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'DELETE',
//     url: API_ENDPOINTS.USERS.DELETEUSER(userId),
//     errorMessage: 'Delete Project Failed'
//   })
// }

// export const roleChangeUser = async (userId: string, role: string): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'PUT',
//     url: API_ENDPOINTS.USERS.ROLECHANGE(userId, role),
//     errorMessage: 'Delete Project Failed'
//   })
// }

// export const followUser = async (userId: string): Promise<Developer> => {
//   return apiRequest({
//     method: 'PATCH',
//     url: API_ENDPOINTS.USERS.FOLLOW(userId),
//     errorMessage: 'Delete Project Failed'
//   })
// }

// export const unFollowUser = async (userId: string): Promise<Developer> => {
//   return apiRequest({
//     method: 'PATCH',
//     url: API_ENDPOINTS.USERS.UNFOLLOW(userId),
//     errorMessage: 'Delete Project Failed'
//   })
// }

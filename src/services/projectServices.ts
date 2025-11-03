// import { API_ENDPOINTS } from '@/configs'
// import apiRequest from '@/lib/axios'
// import { IProject, MessageRes, ProjectType } from '@/types'

// export const createProject = async (data: ProjectType): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'POST',
//     url: API_ENDPOINTS.PROJECT.CREATE,
//     data,
//     errorMessage: 'Project Register Failed'
//   })
// }

// export const getProjectsByUserId = async (userId: string): Promise<IProject[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.PROJECT.GETBYUSER(userId),
//     errorMessage: 'Get Projects Failed'
//   })
// }

// export const getMyProjects = async (): Promise<IProject[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.PROJECT.MYPROJECT,
//     errorMessage: 'Get Projects Failed'
//   })
// }

// export const getProjects = async (): Promise<IProject[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.PROJECT.GET,
//     errorMessage: 'Get Projects Failed'
//   })
// }

// export const getAllowedProjects = async (): Promise<IProject[]> => {
//   return apiRequest({
//     method: 'GET',
//     url: API_ENDPOINTS.PROJECT.GETALLOWED,
//     errorMessage: 'Get Projects Failed'
//   })
// }

// export const setProjectVerify = async (projectId: string): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'PUT',
//     url: API_ENDPOINTS.PROJECT.VERIFYPROJCET(projectId),
//     errorMessage: 'Verify Project Failed'
//   })
// }

// export const deleteProject = async (projectId: string): Promise<MessageRes> => {
//   return apiRequest({
//     method: 'DELETE',
//     url: API_ENDPOINTS.PROJECT.VERIFYPROJCET(projectId),
//     errorMessage: 'Delete Project Failed'
//   })
// }

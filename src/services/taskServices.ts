import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { MessageRes, TaskResType, TaskType } from '@/types'

export const createTask = async (data: TaskType): Promise<MessageRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.TASK.CREATE,
    data,
    errorMessage: 'Task Create Failed'
  })
}

export const getTasks = async (): Promise<TaskResType[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.TASK.GET,
    errorMessage: 'Get Tasks Faield'
  })
}

export const setTaskSuccess = async (taskId: string): Promise<MessageRes> => {
  return apiRequest({
    method: 'PUT',
    url: API_ENDPOINTS.TASK.PUT(taskId),
    errorMessage: 'Put Tasks Faield'
  })
}

export const deleteTask = async (taskId: string): Promise<MessageRes> => {
  return apiRequest({
    method: 'DELETE',
    url: API_ENDPOINTS.TASK.DELETE(taskId),
    errorMessage: 'Delete Project Failed'
  })
}

export const updateTask = async (taskId: string, data: { solveVideo: string }): Promise<MessageRes> => {
  return apiRequest({
    method: 'PUT',
    url: API_ENDPOINTS.TASK.UPDATE(taskId),
    data,
    errorMessage: 'Delete Project Failed'
  })
}

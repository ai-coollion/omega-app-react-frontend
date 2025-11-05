// import { API_ENDPOINTS } from '@/configs'
// import apiRequest from '@/lib/axios'

// export const uploadMedia = async (file: File): Promise<string> => {
//   const formData = new FormData()
//   formData.append('file', file)

//   return apiRequest<{ filename: string }>({
//     method: 'POST',
//     url: API_ENDPOINTS.MEDIA.UPLOAD,
//     data: formData,
//     headers: { 'Content-Type': 'multipart/form-data' },
//     errorMessage: 'Failed to upload profile picture'
//   }).then(res => res.filename)
// }

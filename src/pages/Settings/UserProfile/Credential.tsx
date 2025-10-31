// import AppIcon from '@/components/Core/AppIcon'
// import { DashboardBox } from '@/components/Core/Styled'
// import { BASE_MEDIA_URL } from '@/configs'
// import { useUserInfo } from '@/hooks'
// import { uploadMedia } from '@/services'
// import { updateUserRequest } from '@/services/userServices'
// import { dispatch, updateUser } from '@/store'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { Avatar, Box, Button, FormControl, FormLabel, Stack, TextField, Typography } from '@mui/material'
// import { ChangeEvent, useRef, useState } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import * as yup from 'yup'

// interface FormValues {
//   username?: string
//   email: string
//   avatar: File | string
// }

// const Credential = () => {
//   const userInfo = useUserInfo()
//   const [inputValue, setInputValue] = useState<string>('')
//   const [previewUrl, setPreviewUrl] = useState<string>(`${BASE_MEDIA_URL}/${userInfo?.avatar}`)
//   const [loading, setLoading] = useState<boolean>(false)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const schema = yup.object().shape({
//     avatar: yup.mixed<File | string>().optional().default(''),
//     username: yup.string(),
//     email: yup
//       .string()
//       .email('Email is invalid')
//       .required('Email is required')
//       .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid')
//   })

//   const { control, setValue, handleSubmit } = useForm({
//     defaultValues: {
//       avatar: userInfo?.avatar,
//       email: userInfo?.email || '',
//       username: userInfo?.username || ''
//     },
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = async (data: FormValues) => {
//     setLoading(true)
//     try {
//       let avatarData = ''
//       if (data.avatar instanceof File) {
//         const filename = await uploadMedia(data.avatar)
//         avatarData = filename
//       }
//       data.avatar = avatarData || data.avatar
//       const user = await updateUserRequest(data)
//       dispatch(updateUser({ user }))
//       toast.success('User Profile Updated Successfully')
//     } catch (error: any) {
//       toast.error(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleInputImageChange = (file: ChangeEvent) => {
//     const reader = new FileReader()
//     const { files } = file.target as HTMLInputElement
//     if (files && files.length !== 0) {
//       setValue('avatar', files[0])
//       reader.onload = () => setPreviewUrl(reader.result as string)
//       reader.readAsDataURL(files[0])

//       if (reader.result !== null) {
//         setInputValue(reader.result as string)
//       }
//     }
//   }

//   const handleButtonClick = () => {
//     fileInputRef.current?.click()
//   }

//   return (
//     <DashboardBox>
//       <Stack flexDirection={'column'} gap={3}>
//         <Box>
//           <Typography variant='h4'>Credentials</Typography>
//           <Typography variant='body2' sx={{ color: '#747474' }}>
//             Update your credentials
//           </Typography>
//         </Box>
//         <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={3}>
//           <Stack
//             flexDirection={'column'}
//             alignItems={'center'}
//             p={3}
//             gap={3}
//             sx={{ border: `1px solid #343434`, borderRadius: '16px' }}
//           >
//             <Avatar
//               sx={{ width: '150px', height: '150px' }}
//               src={previewUrl || `${BASE_MEDIA_URL}/${userInfo?.avatar}`}
//             />
//             <input
//               id='account-settings-upload-image'
//               type='file'
//               ref={fileInputRef} // Attach the ref to the input
//               hidden
//               accept='image/png, image/jpeg'
//               onChange={handleInputImageChange}
//               value={inputValue}
//             />
//             <Stack flexDirection={'row'} gap={2}>
//               <Button
//                 variant='contained'
//                 color='secondary'
//                 startIcon={<AppIcon name='submit' size={20} />}
//                 onClick={handleButtonClick}
//               >
//                 UPLOAD
//               </Button>
//             </Stack>
//           </Stack>
//           <Box
//             component='form'
//             onSubmit={handleSubmit(onSubmit)}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               width: '100%',
//               gap: 3,
//               justifyContent: 'flex-start',
//               alignItems: 'flex-end'
//             }}
//           >
//             <FormControl fullWidth>
//               <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//                 Full name
//               </FormLabel>
//               <Controller
//                 name='username'
//                 control={control}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     type='username'
//                     placeholder='Full name'
//                     autoComplete='username'
//                     fullWidth
//                     size='small'
//                     variant='outlined'
//                     error={Boolean(error)}
//                     helperText={error?.message}
//                     {...field}
//                   />
//                 )}
//               />
//             </FormControl>
//             <FormControl fullWidth>
//               <FormLabel htmlFor='email' sx={{ color: '#747474' }}>
//                 Email
//               </FormLabel>
//               <Controller
//                 name='email'
//                 control={control}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     type='email'
//                     placeholder='Email'
//                     autoComplete='email'
//                     fullWidth
//                     size='small'
//                     variant='outlined'
//                     error={Boolean(error)}
//                     helperText={error?.message}
//                     {...field}
//                   />
//                 )}
//               />
//             </FormControl>
//             <Box width={{ md: 'auto', xs: '100%' }}>
//               <Button
//                 type='submit'
//                 fullWidth
//                 variant='contained'
//                 color='primary'
//                 size='small'
//                 aria-label='Submit'
//                 loading={loading}
//               >
//                 <Typography variant='body2'>SAVE CHANGES</Typography>
//               </Button>
//             </Box>
//           </Box>
//         </Stack>
//       </Stack>
//     </DashboardBox>
//   )
// }

// export default Credential

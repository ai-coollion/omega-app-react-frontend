// import AppIcon from '@/components/Core/AppIcon'
// import { TypeSelect } from '@/components/Core/Select/TypeSelect'
// import { DashboardBox } from '@/components/Core/Styled'
// import { BASE_MEDIA_URL } from '@/configs'
// import { developerTypes } from '@/constants'
// import { useUserInfo } from '@/hooks'
// import { uploadMedia } from '@/services'
// import { updateDeveloper } from '@/services/userServices'
// import { dispatch, updateUser } from '@/store'
// import { yupResolver } from '@hookform/resolvers/yup'
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   MenuItem,
//   OutlinedInput,
//   Stack,
//   TextField,
//   Typography
// } from '@mui/material'
// import { ChangeEvent, useRef, useState } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import * as yup from 'yup'

// interface FormValues {
//   description?: string
//   backImg: File | string
//   type?: string
// }

// const DeveloperProfile = () => {
//   const userInfo = useUserInfo()
//   const [inputValue, setInputValue] = useState<string>('')
//   const [previewUrl, setPreviewUrl] = useState<string>(`/assets/images/bestGood.png`)
//   const [loading, setLoading] = useState<boolean>(false)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const schema = yup.object().shape({
//     backImg: yup.mixed<File | string>().optional().default(''),
//     description: yup.string(),
//     type: yup.string()
//   })

//   const { control, setValue, handleSubmit } = useForm({
//     defaultValues: {
//       backImg: `${BASE_MEDIA_URL}/${userInfo?.backImg}`,
//       description: userInfo?.description || '',
//       type: userInfo?.type || developerTypes[0].value
//     },
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = async (data: FormValues) => {
//     setLoading(true)
//     try {
//       let backImgData = ''
//       if (data.backImg instanceof File) {
//         const filename = await uploadMedia(data.backImg)
//         backImgData = filename
//       }
//       data.backImg = backImgData || data.backImg
//       const user = await updateDeveloper(data)
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
//       setValue('backImg', files[0])
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
//           <Typography variant='h4'>Developer Profile</Typography>
//           <Typography variant='body2' sx={{ color: '#747474' }}>
//             Manage your Developer Profile
//           </Typography>
//         </Box>
//         <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={3}>
//           <Stack
//             flexDirection={'column'}
//             alignItems={'center'}
//             p={3}
//             gap={3}
//             height={'250px'}
//             flexGrow={0}
//             sx={{ border: `1px solid #343434`, borderRadius: '16px' }}
//           >
//             <Box
//               component={'img'}
//               src={previewUrl || `${BASE_MEDIA_URL}/${userInfo?.backImg}`}
//               width={'150px'}
//               height={'150px'}
//               sx={{ objectFit: 'cover' }}
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
//                 Developer Description
//               </FormLabel>
//               <Controller
//                 name='description'
//                 control={control}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     type='text'
//                     placeholder='Description'
//                     autoComplete='descriptoin'
//                     fullWidth
//                     multiline
//                     size='medium'
//                     variant='outlined'
//                     rows={5}
//                     error={Boolean(error)}
//                     helperText={error?.message}
//                     {...field}
//                   />
//                 )}
//               />
//             </FormControl>
//             <FormControl fullWidth>
//               <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//                 Developer Type
//               </FormLabel>
//               <Controller
//                 name='type'
//                 control={control}
//                 render={({ field }) => (
//                   <TypeSelect
//                     input={<OutlinedInput />}
//                     inputProps={{ 'aria-label': 'currency option label' }}
//                     size='small'
//                     {...field}
//                     disabled={loading}
//                   >
//                     {developerTypes.map(item => (
//                       <MenuItem key={item.value} value={item.value} sx={{ fontSize: '14px' }}>
//                         <Box>{item.value}</Box>
//                       </MenuItem>
//                     ))}
//                   </TypeSelect>
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
//                 <Typography variant='body2'>Submit</Typography>
//               </Button>
//             </Box>
//           </Box>
//         </Stack>
//       </Stack>
//     </DashboardBox>
//   )
// }

// export default DeveloperProfile

// import { useIsLoggedIn } from '@/hooks'
// import { createTask } from '@/services'
// import { TaskType } from '@/types'
// import { yupResolver } from '@hookform/resolvers/yup'
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
// import { Box, Button, FormControl, FormLabel, IconButton, Stack, TextField, Typography } from '@mui/material'
// import { FC, useState } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import * as yup from 'yup'

// interface Props {
//   onCloseModal: () => void
//   handleTask: () => void
// }

// const PostTask: FC<Props> = ({ onCloseModal, handleTask }) => {
//   const [loading, setLoading] = useState<boolean>(false)
//   const isLoggedIn = useIsLoggedIn()

//   const schema = yup.object().shape({
//     reward: yup.number().required('Only Numbers'),
//     githubLink: yup
//       .string()
//       .url('Please enter a valid URL')
//       .required('GitHub link is required')
//       .matches(
//         /^https:\/\/github\.com\//, // Use a regular expression to match the domain
//         'Please enter a valid GitHub link (e.g., https://github.com/user/repo)'
//       ),
//     title: yup.string().required('Only must String'),
//     deadLine: yup.date().required('Please select a date').min(new Date(), 'Date must be after today')
//   })

//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       reward: 0,
//       githubLink: '',
//       title: '',
//       deadLine: new Date()
//     },
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = async (data: TaskType) => {
//     try {
//       if (!isLoggedIn) {
//         toast.warning('Please Login')
//         return
//       }
//       setLoading(true)
//       const result = await createTask(data)
//       toast.success(result.message)
//       handleTask()
//     } catch (error: any) {
//       toast.error(error.message)
//     } finally {
//       setLoading(false)
//       onCloseModal()
//     }
//   }

//   return (
//     <Stack
//       gap={3}
//       p={3}
//       sx={{ backgroundColor: '#292929', borderRadius: 1, width: { md: '452px', xs: '100%' }, position: 'relative' }}
//       alignItems={'center'}
//     >
//       <Typography variant='h1' fontSize={'32px'} color='white'>
//         Posting A Task
//       </Typography>
//       <Box
//         component='form'
//         onSubmit={handleSubmit(onSubmit)}
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           width: '100%',
//           gap: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <FormControl fullWidth>
//           <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//             Task Name
//           </FormLabel>
//           <Controller
//             name='title'
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 type='text'
//                 placeholder='Task Name'
//                 autoComplete='title'
//                 fullWidth
//                 size='small'
//                 variant='outlined'
//                 error={Boolean(error)}
//                 helperText={error?.message}
//                 {...field}
//               />
//             )}
//           />
//         </FormControl>
//         <FormControl fullWidth>
//           <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//             GitHubLink
//           </FormLabel>
//           <Controller
//             name='githubLink'
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 type='text'
//                 placeholder='ex. github.com/98asd76gsf6sao8dr8sd7'
//                 autoComplete='githubLink'
//                 fullWidth
//                 size='small'
//                 variant='outlined'
//                 error={Boolean(error)}
//                 helperText={error?.message}
//                 {...field}
//               />
//             )}
//           />
//         </FormControl>
//         <FormControl fullWidth>
//           <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//             Reward
//           </FormLabel>
//           <Controller
//             name='reward'
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 type='number'
//                 placeholder='reward'
//                 autoComplete='reward'
//                 fullWidth
//                 size='small'
//                 variant='outlined'
//                 error={Boolean(error)}
//                 helperText={error?.message}
//                 {...field}
//               />
//             )}
//           />
//         </FormControl>
//         <FormControl fullWidth>
//           <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
//             Reward
//           </FormLabel>
//           <Controller
//             name='deadLine'
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 type='date'
//                 placeholder='deadLine'
//                 autoComplete='deadLine'
//                 fullWidth
//                 size='small'
//                 variant='outlined'
//                 error={Boolean(error)}
//                 helperText={error?.message}
//                 {...field}
//               />
//             )}
//           />
//         </FormControl>
//         <Box width={{ md: 'auto', xs: '100%' }}>
//           <Button
//             type='submit'
//             fullWidth
//             variant='contained'
//             color='primary'
//             size='small'
//             aria-label='Submit'
//             loading={loading}
//           >
//             <Typography variant='body2'>Submit</Typography>
//           </Button>
//         </Box>
//       </Box>
//       <IconButton color='default' sx={{ position: 'absolute', top: '12px', right: '12px' }} onClick={onCloseModal}>
//         <CloseOutlinedIcon />
//       </IconButton>
//     </Stack>
//   )
// }

// export default PostTask

// import AppIcon from '@/components/Core/AppIcon'
// import { useNotificationInfo, useUserInfo } from '@/hooks'
// import { getNotifications, readNotificationAll } from '@/services/notificationServices'
// import { dispatch, pushNotifications } from '@/store'
// import { colors } from '@/theme'
// import { Button, Stack, Typography } from '@mui/material'
// import { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import NotificationBox from './NotificationBox'

// const Notification = () => {
//   const userInfo = useUserInfo()
//   const { newsCount } = useNotificationInfo()
//   const [loading, setLoading] = useState<boolean>(false)

//   const handleReadAllNotification = async () => {
//     try {
//       setLoading(true)
//       const result = await readNotificationAll()
//       if (result) {
//         handleNotification()
//       }
//     } catch (err: any) {
//       toast.error(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleNotification = async () => {
//     try {
//       const result = userInfo && (await getNotifications(userInfo?._id))
//       if (result) {
//         dispatch(pushNotifications(result))
//       }
//     } catch (err: any) {
//       toast.error(err.message)
//     }
//   }

//   useEffect(() => {
//     handleNotification()
//   }, [])

//   return (
//     <Stack direction={'column'} gap={3}>
//       <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
//         <Typography variant='body2' color={'#747474'}>
//           You have {newsCount} new notifications
//         </Typography>
//         <Stack direction={'row'} gap={2}>
//           <Button
//             variant='contained'
//             color='inherit'
//             loading={loading}
//             sx={{
//               borderRadius: '6px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               border: '0px solid #111111',
//               borderColor: colors.transparent,
//               padding: '6px 12px',
//               minWidth: '0px',
//               gap: 1,
//               height: { xs: '32px', md: 'auto' },
//               width: { xs: '32px', md: 'auto' }
//             }}
//             onClick={handleReadAllNotification}
//           >
//             <AppIcon name='verify2' color='prime' />
//             <Typography
//               variant='body2'
//               component='span'
//               color={colors.prime}
//               sx={{ display: { md: 'block', xs: 'none' } }}
//             >
//               Mark all as read
//             </Typography>
//           </Button>
//           <Button
//             variant='contained'
//             color='inherit'
//             sx={{
//               borderRadius: '6px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               border: '0px solid #111111',
//               borderColor: colors.transparent,
//               padding: '6px 12px',
//               minWidth: '0px',
//               gap: 1,
//               height: { xs: '32px', md: 'auto' },
//               width: { xs: '32px', md: 'auto' }
//             }}
//           >
//             <Typography variant='body2' component='span' sx={{ display: { md: 'block', xs: 'none' } }}>
//               Newest
//             </Typography>
//             <AppIcon name='down' />
//           </Button>
//         </Stack>
//       </Stack>
//       <NotificationBox isInHead={false} />
//     </Stack>
//   )
// }

// export default Notification

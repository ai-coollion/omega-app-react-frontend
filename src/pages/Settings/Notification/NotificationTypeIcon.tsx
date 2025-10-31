// import AppIcon from '@/components/Core/AppIcon'
// import { colors } from '@/theme'
// import { Box, styled } from '@mui/material'
// import { FC } from 'react'

// interface Props {
//   type: string
//   isRead: boolean
// }

// interface NotificationProp {
//   isRead: boolean
// }

// const StyledNotificationIconContainer = styled(Box, {
//   shouldForwardProp: prop => prop !== 'isRead'
// })<NotificationProp>(({ isRead }) => ({
//   width: '36px !important',
//   height: '36px !important',
//   minWidth: '36px !important',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
//   borderRadius: '50%',
//   background: isRead ? '#74747429' : '#FFD25829'
// }))

// export const NotificationTypeIcon: FC<Props> = ({ type, isRead }) => {
//   return (
//     <StyledNotificationIconContainer isRead={isRead}>
//       <Box
//         sx={{
//           width: 20,
//           height: 20,
//           color: isRead ? '#747474' : colors.prime
//         }}
//       >
//         {type === 'user' ? (
//           <AppIcon name='people' />
//         ) : type === 'project' ? (
//           <AppIcon name='project' />
//         ) : (
//           <AppIcon name='task' />
//         )}
//       </Box>
//     </StyledNotificationIconContainer>
//   )
// }

// export default NotificationTypeIcon

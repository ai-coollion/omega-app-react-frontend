// import AppIcon, { IconType } from '@/components/Core/AppIcon'
// import { TaskResType } from '@/types'
// import { Chip, Stack, Typography } from '@mui/material'
// import { FC } from 'react'

// interface Props {
//   solvedItems: TaskResType[]
// }

// const LiveSolved: FC<Props> = ({ solvedItems }) => {
//   return (
//     <Stack gap={2} p={{ sm: '0', xs: '0px 20px' }}>
//       <Typography variant='h5' color='white' fontFamily={'Exo'}>
//         Live Solved
//       </Typography>
//       {solvedItems.map(task => (
//         <Stack
//           p={2}
//           sx={{ backgroundColor: 'none', border: `1px solid #424242`, borderRadius: '8px' }}
//           gap={2}
//           justifyContent={'flex-start'}
//           alignItems={'flex-start'}
//         >
//           <Stack direction={'row'} width={'100%'} gap={1.5} alignItems={'flex-start'}>
//             <AppIcon name={task.status as IconType} />
//             <Stack gap={1} sx={{ overflow: 'hidden' }}>
//               <Typography
//                 variant='h5'
//                 component={'span'}
//                 color='white'
//                 fontSize={'16px'}
//                 sx={{
//                   whiteSpace: 'nowrap',
//                   textOverflow: 'ellipsis',
//                   overflow: 'hidden'
//                 }}
//               >
//                 {task.title}
//               </Typography>
//             </Stack>
//           </Stack>
//           <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
//             <Stack direction={'row'} gap={1} flexGrow={1}>
//               <Stack display={task.status === 'success' ? 'flex' : 'none'} direction={'row'} gap={1}>
//                 <AppIcon name='present' color='gray' />
//                 <AppIcon name='omegaCoin' />
//                 <Typography variant='h6' component={'span'} fontSize={'14px'} color='white'>
//                   60
//                 </Typography>
//               </Stack>
//               <Stack direction={'row'} alignItems={'center'} gap={1}>
//                 <AppIcon name='comment' color='gray' />
//                 <Typography variant='h6' component={'span'} fontSize={'14px'} color='white'>
//                   5
//                 </Typography>
//               </Stack>
//             </Stack>
//             <Chip
//               label={task.status === 'success' ? 'Solved' : task.status === 'pending' ? 'Pending' : 'Issue'}
//               color={task.status === 'success' ? 'success' : task.status === 'pending' ? 'warning' : 'error'}
//               clickable={false}
//               onClick={() => {}}
//               sx={{ mr: 1 }}
//             />
//           </Stack>
//         </Stack>
//       ))}
//     </Stack>
//   )
// }

// export default LiveSolved

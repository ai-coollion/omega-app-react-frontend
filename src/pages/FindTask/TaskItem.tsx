// import AppIcon, { IconType } from '@/components/Core/AppIcon'
// import { colors } from '@/theme'
// import { TaskResType } from '@/types'
// import { Button, Chip, IconButton, Link, Stack, Typography } from '@mui/material'
// import moment from 'moment'
// import { FC } from 'react'

// interface Props {
//   task: TaskResType
//   id: number
//   handleModalOpen: () => void
//   handleCurrentId: (taskId: string) => void
// }

// const TaskItem: FC<Props> = ({ task, id, handleModalOpen, handleCurrentId }) => {
//   const handleOpen = () => (taskId: string) => {
//     handleModalOpen()
//     handleCurrentId(taskId)
//   }

//   return (
//     <Stack
//       p={'24px 16px'}
//       direction={{ desktop: 'row', xs: 'column' }}
//       sx={{ backgroundColor: !(id % 2) ? colors.bgDark : colors.dark2 }}
//       alignItems={{ sm: 'center', xs: 'flex-start' }}
//       gap={3}
//       justifyContent={'space-between'}
//     >
//       <Stack direction={'row'} flexGrow={1} maxWidth={{ sm: '300px', xs: '100%' }} gap={1.5} alignItems={'flex-start'}>
//         <AppIcon name={task.status as IconType} />
//         <Stack gap={1} sx={{ overflow: 'hidden' }}>
//           <Typography
//             variant='h5'
//             component={'span'}
//             color='white'
//             sx={{
//               whiteSpace: 'nowrap',
//               textOverflow: 'ellipsis',
//               overflow: 'hidden'
//             }}
//           >
//             {task.title}
//           </Typography>
//           <Typography
//             variant='body2'
//             component={'span'}
//             color='gray'
//             sx={{
//               whiteSpace: 'nowrap',
//               textOverflow: 'ellipsis',
//               overflow: 'hidden',
//               fontFamily: 'Open Sans'
//             }}
//           >
//             <Chip
//               label={task.status === 'success' ? 'Solved' : task.status === 'pending' ? 'Pending' : 'Issue'}
//               color={task.status === 'success' ? 'success' : task.status === 'pending' ? 'warning' : 'error'}
//               clickable={false}
//               onClick={() => {}}
//               sx={{ mr: 1 }}
//             />
//             {`${task.issueCount} Issues ${moment(task.createdAt).fromNow()} Posted`}
//           </Typography>
//         </Stack>
//       </Stack>
//       <Stack direction={'row'} gap={3} flexGrow={1} justifyContent={'center'} width={'100%'}>
//         <Stack direction={'row'} display={task.status === 'success' ? 'flex' : 'none'}>
//           <AppIcon name='flag' color='prime' />
//           <Typography variant='h6' component={'span'} fontSize={'16px'} color='#BD0BEA'>
//             #24
//           </Typography>
//         </Stack>
//         <Stack display={task.status === 'success' ? 'flex' : 'none'} direction={'row'} gap={1}>
//           <AppIcon name='present' color='gray' />
//           <AppIcon name='omegaCoin' />
//           <Typography variant='h6' component={'span'} fontSize={'16px'} color='white'>
//             {task.reward}
//           </Typography>
//         </Stack>
//         <Stack direction={'row'} alignItems={'center'} gap={1}>
//           <AppIcon name='comment' />
//           <Typography variant='h6' component={'span'} fontSize={'16px'} color='white'>
//             10
//           </Typography>
//         </Stack>
//       </Stack>
//       <Stack
//         direction={{ mobile: 'row', xs: 'column' }}
//         gap={1.5}
//         flexGrow={0}
//         alignItems={'center'}
//         width={'100%'}
//         justifyContent={'center'}
//       >
//         <Stack direction={'row'} gap={1.5}>
//           <Button
//             variant='outlined'
//             color='secondary'
//             endIcon={<AppIcon name='submit' size={'20px'} />}
//             onClick={() => handleOpen()(task._id)}
//           >
//             submit
//           </Button>
//           <Button
//             variant='outlined'
//             color='secondary'
//             startIcon={<AppIcon name='github' size={'20px'} />}
//             endIcon={<AppIcon name='up' size={'20px'} />}
//           >
//             <Link
//               href={task.githubLink}
//               target='_blank'
//               rel='noopener noreferrer'
//               sx={{ textDecoration: 'none' }}
//               color='inherit'
//             >
//               view
//             </Link>
//           </Button>
//         </Stack>
//         <Stack direction={'row'} gap={1.5}>
//           <IconButton color='inherit'>
//             <AppIcon name='star' size={'20px'} />
//           </IconButton>
//           <IconButton color='inherit'>
//             <AppIcon name='more' size={'20px'} />
//           </IconButton>
//         </Stack>
//       </Stack>
//     </Stack>
//   )
// }

// export default TaskItem

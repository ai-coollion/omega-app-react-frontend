// import AppIcon from '@/components/Core/AppIcon'
// import { taskCategories } from '@/constants'
// import { Box, Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
// import { FC, useState } from 'react'

// interface Props {
//   onModalOpen?: () => void
//   handleTaskList: (status: string) => void
// }

// const FindTaskPanel: FC<Props> = ({ onModalOpen, handleTaskList }) => {
//   const [alignment, setAlignment] = useState<string | null>(taskCategories[0].value)

//   const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
//     if (newAlignment && newAlignment !== alignment) {
//       setAlignment(newAlignment)
//       handleTaskList(newAlignment)
//     }
//   }

//   return (
//     <Stack
//       direction={{ md: 'row', xs: 'column' }}
//       gap={2}
//       justifyContent={'space-between'}
//       p={{ xs: '20px', sm: '0px' }}
//     >
//       <Box>
//         <ToggleButtonGroup
//           value={alignment}
//           exclusive
//           fullWidth
//           onChange={handleAlignment}
//           aria-label='text alignment'
//           color='secondary'
//         >
//           {taskCategories.map(task => (
//             <ToggleButton
//               key={task.item}
//               value={task.value}
//               aria-label={task.item}
//               sx={{
//                 padding: {
//                   md: '8px 12px',
//                   color: '#82868B',
//                   whiteSpace: 'nowrap'
//                 }
//               }}
//             >
//               {task.item}
//             </ToggleButton>
//           ))}
//         </ToggleButtonGroup>
//       </Box>
//       <Box width={{ xs: '100%', md: 'auto' }}>
//         <Button
//           fullWidth
//           variant='contained'
//           color='primary'
//           startIcon={<AppIcon name='add' size={'20px'} />}
//           sx={{ p: '10px 24px' }}
//           onClick={onModalOpen}
//         >
//           add task
//         </Button>
//       </Box>
//     </Stack>
//   )
// }

// export default FindTaskPanel

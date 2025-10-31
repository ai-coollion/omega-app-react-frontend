// import AppIcon from '@/components/Core/AppIcon'
// import { developerCategories } from '@/constants'
// import { colors } from '@/theme'
// import { Button, Divider, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
// import { FC, useState } from 'react'

// interface Props {
//   handleDeveloperList: (type: string) => void
// }

// const FindDevPanel: FC<Props> = ({ handleDeveloperList }) => {
//   const [alignment, setAlignment] = useState<string | null>(developerCategories[0].value)
//   const [developerTitle, setDeveloperTitle] = useState<string>('⭐ Popular')

//   const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
//     if (newAlignment && newAlignment !== alignment) {
//       setAlignment(newAlignment)
//       setDeveloperTitle(newAlignment)
//       handleDeveloperList(newAlignment)
//     }
//   }

//   return (
//     <Stack
//       direction={{ lg: 'row', sm: 'column' }}
//       justifyContent={'space-between'}
//       alignItems={{ xs: 'flex-start', lg: 'center' }}
//       gap={2}
//       width={'100%'}
//     >
//       <Stack
//         direction={'row'}
//         justifyContent={'space-between'}
//         alignItems={'center'}
//         width={{ xs: '100%', lg: 'auto' }}
//       >
//         <Typography variant='h3' color='white'>
//           {`${developerTitle} Developer`}
//         </Typography>
//         <Stack direction={'row'} gap={1} display={{ lg: 'none', xs: 'flex' }} alignItems={'center'}>
//           <IconButton color='inherit' sx={{ borderRadius: 1 }}>
//             <AppIcon name='sort' size={'16px'} />
//           </IconButton>
//         </Stack>
//       </Stack>
//       <Stack direction={'row'} gap={2} width={{ xs: '100%', md: 'auto' }}>
//         <ToggleButtonGroup
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label='text alignment'
//           color='standard'
//           sx={{
//             overflow: 'scroll',
//             width: { lg: 'auto', xs: '100%' },
//             '&::-webkit-scrollbar': { display: 'none' }
//           }}
//         >
//           {developerCategories.map(item => (
//             <ToggleButton
//               key={item.title}
//               value={item.value}
//               aria-label={item.title}
//               sx={{
//                 padding: {
//                   md: '8px 12px',
//                   color: '#82868B',
//                   whiteSpace: 'nowrap'
//                 }
//               }}
//             >
//               {item.title}
//             </ToggleButton>
//           ))}
//         </ToggleButtonGroup>
//         <Stack direction={'row'} gap={2} display={{ lg: 'flex', xs: 'none' }}>
//           <Divider orientation='vertical' flexItem />
//           <Button
//             variant='contained'
//             color='inherit'
//             sx={{ backgroundColor: colors.dark3, border: 'none' }}
//             startIcon={<AppIcon name='sort' />}
//             endIcon={<AppIcon name='down' />}
//           >
//             Newest
//           </Button>
//         </Stack>
//       </Stack>
//     </Stack>
//   )
// }

// export default FindDevPanel

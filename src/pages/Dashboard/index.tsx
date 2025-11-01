// import Loading from '@/components/Core/Loading/Loading'
// import PageDescription from '@/components/Core/PageDescription'
// import { headings } from '@/constants'
// import { getCurrentState } from '@/services/stateServices'
// import { Stack, Typography } from '@mui/material'
// import { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import DashboardBanner from './DashboardBanner'

// const Dashboard = () => {
//   const [loading, setLoading] = useState<boolean>(false)
//   const [userLength, setUserLength] = useState<string | null>(null)
//   const [projectLength, setProjectLength] = useState<string | null>(null)
//   const [taskLength, setTaskLength] = useState<string | null>(null)

//   const handleCurrentState = async () => {
//     try {
//       setLoading(true)
//       const result = await getCurrentState()
//       setUserLength(result.userLength)
//       setProjectLength(result.projectLength)
//       setTaskLength(result.taskLength)
//     } catch (error: any) {
//       toast.error(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     handleCurrentState()
//   }, [])

//   return (
//     <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 20px' }} gap={{ md: 8, xs: 3 }}>
//       <PageDescription title={headings.Dashboard.title} description={headings.Dashboard.description} />
//       <Stack direction={{ md: 'row', xs: 'column' }} gap={5}>
//         <DashboardBanner />
//       </Stack>
//       <Stack direction={{ sm: 'row', xs: 'column' }} gap={5}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <Stack padding={'10px 20px'} gap={2} sx={{ background: '#000', borderRadius: '16px', flexGrow: 1 }}>
//               <Typography variant='subtitle1' fontSize={'14px'}>
//                 Total active users
//               </Typography>
//               <Typography variant='h3'>{userLength}</Typography>
//             </Stack>
//             <Stack padding={'10px 20px'} gap={2} sx={{ background: '#000', borderRadius: '16px', flexGrow: 1 }}>
//               <Typography variant='subtitle1' fontSize={'14px'}>
//                 Total active Projects
//               </Typography>
//               <Typography variant='h3'>{projectLength}</Typography>
//             </Stack>
//             <Stack padding={'10px 20px'} gap={2} sx={{ background: '#000', borderRadius: '16px', flexGrow: 1 }}>
//               <Typography variant='subtitle1' fontSize={'14px'}>
//                 Total active Tasks
//               </Typography>
//               <Typography variant='h3'>{taskLength}</Typography>
//             </Stack>
//           </>
//         )}
//       </Stack>
//     </Stack>
//   )
// }

// export default Dashboard

// import AppIcon from '@/components/Core/AppIcon'
// import MarketSearch from '@/components/Core/Input/MarketSearch'
// import Loading from '@/components/Core/Loading/Loading'
// import { BASE_MEDIA_URL } from '@/configs'
// import { useSocket } from '@/hooks'
// import { getUsers } from '@/services'
// import { deleteUser, roleChangeUser } from '@/services/userServices'
// import { Developer } from '@/types'
// import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
// import {
//   Avatar,
//   Box,
//   Chip,
//   IconButton,
//   Menu,
//   MenuItem,
//   Paper,
//   Stack,
//   styled,
//   Table,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography
// } from '@mui/material'
// import TableCell, { tableCellClasses } from '@mui/material/TableCell'
// import { ChangeEvent, useEffect, useState } from 'react'
// import { toast } from 'react-toastify'

// const StyledTableCell = styled(TableCell)({
//   [`&.${tableCellClasses.head}`]: {},
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14
//   },
//   border: 'none',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis'
// })

// const UserManagement = () => {
//   const [users, setUsers] = useState<Developer[]>([])
//   const [currentId, setCurrentId] = useState<string>('')
//   const [changeRole, setChangeRole] = useState<string>('')
//   const [tempList, setTempList] = useState<Developer[]>([])
//   const [loading, setLoading] = useState<boolean>(false)
//   const socket = useSocket()
//   const [search, setSearch] = useState<string>('')

//   const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
//   const open2 = Boolean(anchorEl2)
//   const handleClick2 = (event: React.MouseEvent<HTMLElement>) => (userId: string, role: string) => {
//     setAnchorEl2(event.currentTarget)
//     setCurrentId(userId)
//     if (role === 'developer') setChangeRole('user')
//     else setChangeRole('developer')
//   }
//   const handleClose2 = () => {
//     setAnchorEl2(null)
//   }

//   const handleUsers = async () => {
//     try {
//       setLoading(true)
//       const users = await getUsers()
//       setUsers(users)
//       setTempList(users)
//     } catch (err: any) {
//       toast.error(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleRoleChange = async () => {
//     try {
//       const result = changeRole && (await roleChangeUser(currentId, changeRole))
//       if (result) handleUsers()
//     } catch (err: any) {
//       toast.error(err.message)
//     }
//   }

//   const handleDeleteUser = async () => {
//     try {
//       const result = await deleteUser(currentId)
//       if (result) handleUsers()
//     } catch (err: any) {
//       toast.error(err.message)
//     }
//   }

//   const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value)
//   }

//   useEffect(() => {
//     handleUsers()
//   }, [])

//   useEffect(() => {
//     const socketInit = () => {
//       if (socket) {
//         socket.on('developerProfile', () => {
//           handleUsers()
//         })
//       }
//     }
//     socketInit()
//   }, [socket])

//   useEffect(() => {
//     setUsers(() => {
//       const updatedFilteredItems = tempList.filter(item =>
//         item.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())
//       )
//       return updatedFilteredItems
//     })
//   }, [search])

//   return (
//     <Stack
//       direction='column'
//       alignItems={'flex-start'}
//       sx={{ gap: 3, width: '100%' }}
//       position={'relative'}
//       minHeight={'500px'}
//     >
//       <MarketSearch handleChange={handleSearchText} />
//       {loading ? (
//         <Loading />
//       ) : (
//         <TableContainer component={Paper} sx={{ position: 'relative' }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>User</StyledTableCell>
//                 <StyledTableCell>type</StyledTableCell>
//                 <StyledTableCell>followers</StyledTableCell>
//                 <StyledTableCell>following</StyledTableCell>
//                 <StyledTableCell>role</StyledTableCell>
//                 <StyledTableCell>status</StyledTableCell>
//                 <StyledTableCell></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {users.map((item, index) => (
//                 <TableRow
//                   key={`row${index}`}
//                   sx={{
//                     overflow: 'hidden',
//                     backgroundColor: '#363636 !important',
//                     borderBottom: '1px solid #292929 !important'
//                   }}
//                 >
//                   <StyledTableCell align='left'>
//                     <Stack direction={'row'} gap={3} alignItems={'center'}>
//                       <Avatar
//                         src={`${BASE_MEDIA_URL}/${item.avatar}`}
//                         sx={{ borderRadius: '50%', width: '48px', height: '48px' }}
//                       />
//                       <Stack direction={'column'}>
//                         <Typography variant='subtitle1' color='white' fontSize={'18px'}>
//                           {item.username}
//                         </Typography>
//                         <Typography variant='subtitle1' color='gray' fontSize={'14px'}>
//                           {item.email}
//                         </Typography>
//                       </Stack>
//                     </Stack>
//                   </StyledTableCell>
//                   <StyledTableCell align='left'>{item.type}</StyledTableCell>
//                   <StyledTableCell align='left'>{item.followers.length}</StyledTableCell>
//                   <StyledTableCell align='left'>{item.following.length}</StyledTableCell>
//                   <StyledTableCell align='left'>
//                     <Chip
//                       color={item.role === 'admin' ? 'success' : item.role === 'developer' ? 'error' : 'warning'}
//                       label={item.role === 'admin' ? 'Admin' : item.role === 'developer' ? 'Developer' : 'User'}
//                       clickable={false}
//                       onClick={() => {}}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell>
//                     <Chip color={'success'} label={'Allowed'} clickable={false} onClick={() => {}} />
//                   </StyledTableCell>
//                   <StyledTableCell align='left'>
//                     <IconButton
//                       onClick={e => {
//                         if (item._id) handleClick2(e)(item._id, item.role)
//                       }}
//                       size='small'
//                       sx={{ ml: 2 }}
//                       aria-controls={open2 ? 'account-menu' : undefined}
//                       aria-haspopup='true'
//                       aria-expanded={open2 ? 'true' : undefined}
//                     >
//                       <MoreVertIcon />
//                     </IconButton>
//                     <Menu
//                       anchorEl={anchorEl2}
//                       id='account-menu'
//                       open={open2}
//                       onClose={handleClose2}
//                       onClick={handleClose2}
//                       slotProps={{
//                         paper: {
//                           sx: { boxShadow: 'none !important' }
//                         }
//                       }}
//                       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                     >
//                       <MenuItem onClick={handleRoleChange}>
//                         <ChangeCircleOutlinedIcon />
//                         <Box component={'span'} ml={1} fontSize={'12px'}>
//                           RoleChange
//                         </Box>
//                       </MenuItem>
//                       <MenuItem onClick={handleDeleteUser}>
//                         <AppIcon name='delete' />
//                         <Box component={'span'} ml={1} fontSize={'12px'}>
//                           Delete
//                         </Box>
//                       </MenuItem>
//                     </Menu>
//                   </StyledTableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Stack>
//   )
// }

// export default UserManagement

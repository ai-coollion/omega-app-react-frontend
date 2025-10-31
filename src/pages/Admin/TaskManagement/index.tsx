import AppIcon from '@/components/Core/AppIcon'
import Loading from '@/components/Core/Loading/Loading'
import { BASE_MEDIA_URL } from '@/configs'
import { useSocket } from '@/hooks'
import { deleteTask, getTasks, setTaskSuccess } from '@/services'
import { colors } from '@/theme/themePrimitives'
import { TaskResType } from '@/types'
import {
  Box,
  Chip,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { GridMoreVertIcon } from '@mui/x-data-grid'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  border: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const TaskManagement = () => {
  const [currentId, setCurrentId] = useState<string>('')
  const [tasks, setTasks] = useState<TaskResType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const socket = useSocket()

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => (projectId: string) => {
    setAnchorEl2(event.currentTarget)
    setCurrentId(projectId)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const handleTasks = async () => {
    try {
      setLoading(true)
      const tasks = await getTasks()
      setTasks(tasks)
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSuccessTask = async () => {
    try {
      const task = tasks.find(item => item._id === currentId)
      if (task && task.status === 'pending') {
        const result = await setTaskSuccess(currentId)
        if (result) toast.success(result.message)
        handleTasks()
      } else toast.warning('Only Pending Task')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleDeleteTask = async () => {
    try {
      const result = await deleteTask(currentId)
      toast.success(result.message)
      handleTasks()
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    handleTasks()
  }, [])

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('createTask', () => {
          handleTasks()
        })
        socket.on('submitTask', () => {
          handleTasks()
        })
      }
    }
    socketInit()
  }, [socket])

  return (
    <Stack
      direction='column'
      alignItems={'flex-end'}
      sx={{ gap: 3, width: '100%' }}
      position={'relative'}
      minHeight={'500px'}
    >
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} sx={{ position: 'relative' }}>
          <Table aria-label='transaction history table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>TaskName</StyledTableCell>
                <StyledTableCell>Provider</StyledTableCell>
                <StyledTableCell>GithubLink</StyledTableCell>
                <StyledTableCell>Reward</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Solved</StyledTableCell>
                <StyledTableCell>Created at</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((item, index) => (
                <TableRow
                  key={`row${index}`}
                  sx={{
                    overflow: 'hidden',
                    backgroundColor: index % 2 ? '#292929 !important' : '#363636 !important',
                    border: 'none'
                  }}
                >
                  <StyledTableCell align='left'>{item.title}</StyledTableCell>
                  <StyledTableCell align='left'>{item.provider}</StyledTableCell>
                  <StyledTableCell align='left'>
                    <Link
                      href={item.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      color='inherit'
                      sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      {item.githubLink}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Box
                      component='span'
                      sx={{
                        color: colors.prime
                      }}
                    >
                      {item.reward}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Chip
                      color={item.status === 'success' ? 'success' : item.status === 'pending' ? 'warning' : 'error'}
                      label={item.status === 'success' ? 'success' : item.status === 'pending' ? 'pending' : 'issue'}
                      clickable={false}
                      onClick={() => {}}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link
                      href={`${BASE_MEDIA_URL}/${item.solveVideo}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      color='inherit'
                      sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      {item.solveVideo}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{item.createdAt && moment(item.createdAt).format('MMMM, DD, YYYY')}</StyledTableCell>
                  <StyledTableCell align='left'>
                    <IconButton
                      onClick={e => {
                        if (item._id) handleClick2(e)(item._id)
                      }}
                      size='small'
                      sx={{ ml: 2 }}
                      aria-controls={open2 ? 'account-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open2 ? 'true' : undefined}
                    >
                      <GridMoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl2}
                      id='account-menu'
                      open={open2}
                      onClose={handleClose2}
                      onClick={handleClose2}
                      slotProps={{
                        paper: {
                          sx: { boxShadow: 'none !important' }
                        }
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      <MenuItem onClick={handleSuccessTask}>
                        <AppIcon name='verify2' color='gray' />
                        <Box component={'span'} ml={1} fontSize={'12px'}>
                          Allow
                        </Box>
                      </MenuItem>
                      <MenuItem onClick={handleDeleteTask}>
                        <AppIcon name='delete' color='gray' />
                        <Box component={'span'} ml={1} fontSize={'12px'}>
                          Delete
                        </Box>
                      </MenuItem>
                    </Menu>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Stack>
  )
}

export default TaskManagement

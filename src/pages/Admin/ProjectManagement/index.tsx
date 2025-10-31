import AppIcon from '@/components/Core/AppIcon'
import MarketSearch from '@/components/Core/Input/MarketSearch'
import Loading from '@/components/Core/Loading/Loading'
import { BASE_MEDIA_URL } from '@/configs'
import { useSocket } from '@/hooks'
import { deleteProject, getProjects, setProjectVerify } from '@/services/projectServices'
import { colors } from '@/theme/themePrimitives'
import { IProject } from '@/types'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  Avatar,
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
  TableRow,
  Typography
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import moment from 'moment'
import { ChangeEvent, useEffect, useState } from 'react'
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

const ProjectManagement = () => {
  const [projects, setProjects] = useState<IProject[]>([])
  const [currentId, setCurrentId] = useState<string>('')
  const [tempList, setTempList] = useState<IProject[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)

  const socket = useSocket()

  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => (projectId: string) => {
    setAnchorEl2(event.currentTarget)
    setCurrentId(projectId)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const handleProjects = async () => {
    try {
      setLoading(true)
      const projects = await getProjects()
      setProjects(projects)
      setTempList(projects)
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleProjectVerify = async () => {
    try {
      const result = await setProjectVerify(currentId)
      if (result) handleProjects()
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleDeleteProject = async () => {
    try {
      const result = await deleteProject(currentId)
      toast.success(result.message)
      handleProjects()
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    handleProjects()
  }, [])

  useEffect(() => {
    setProjects(() => {
      const updatedFilteredItems = tempList.filter(item =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      return updatedFilteredItems
    })
  }, [search])

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('createProject', () => {
          handleProjects()
        })
      }
    }
    socketInit()
  }, [socket])

  return (
    <Stack
      direction='column'
      alignItems={'flex-start'}
      sx={{ gap: 3, width: '100%' }}
      position={'relative'}
      minHeight={'500px'}
    >
      <MarketSearch handleChange={handleSearchText} />
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} sx={{ position: 'relative' }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Project</StyledTableCell>
                <StyledTableCell>Provider</StyledTableCell>
                <StyledTableCell>GithubLink</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Created at</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((item, index) => (
                <TableRow
                  key={`row${index}`}
                  sx={{
                    overflow: 'hidden',
                    backgroundColor: '#363636 !important',
                    borderBottom: '1px solid #292929 !important'
                  }}
                >
                  <StyledTableCell align='left'>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                      <Avatar
                        src={`${BASE_MEDIA_URL}/${item.media}`}
                        sx={{ borderRadius: '16px', width: '64px', height: '64px' }}
                      />
                      <Stack direction={'column'}>
                        <Typography variant='subtitle1' color='white' fontSize={'14px'}>
                          {item.title}
                        </Typography>
                        <Typography variant='subtitle1' color='gray' fontSize={'14px'}>
                          {item.type}
                        </Typography>
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align='left'>{item.provider?.username}</StyledTableCell>
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
                      {item.price}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Chip
                      color={item.isVerified ? 'success' : 'warning'}
                      label={item.isVerified ? 'Allowed' : 'Pending'}
                      clickable={false}
                      onClick={() => {}}
                    />
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
                      <MoreVertIcon />
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
                      <MenuItem onClick={handleProjectVerify}>
                        <AppIcon name='verify2' color='gray' />
                        <Box component={'span'} ml={1} fontSize={'12px'}>
                          Verify
                        </Box>
                      </MenuItem>
                      <MenuItem onClick={handleDeleteProject}>
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

export default ProjectManagement

import { useSocket, useUserInfo } from '@/hooks'
import { getNotifications } from '@/services'
import { dispatch, logout, pushNotifications } from '@/store'
import { Box, CircularProgress, Stack } from '@mui/material'
import { FC, Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import Sidebar from './sidebar'
import SideHeader from './SideHeader'

const SidebarLayout: FC = () => {
  const userInfo = useUserInfo()
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [tabName, setTabName] = useState<string>('Project Management')
  const socket = useSocket()

  const handleDrawerClose = () => {
    setMobileOpen(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleTabName = (tabName: string) => {
    if (tabName == 'Logout') {
      dispatch(logout())
    }
    setTabName(tabName)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {}

  const handleNotification = async () => {
    try {
      const result = userInfo && (await getNotifications(userInfo?._id))
      if (result) {
        dispatch(pushNotifications(result))
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    handleNotification()
  }, [])

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('notification', () => {
          handleNotification()
          toast.info('Sidebar Notification')
        })
      }
    }
    socketInit()
  }, [socket])

  return (
    <Stack direction='row'>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleTabName={handleTabName}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          position: 'relative',

          // height: '100vh',
          overflow: 'auto'
        }}
      >
        <Box sx={{ padding: '24px 32px' }}>
          <Stack flexDirection='column' gap='50px'>
            <SideHeader title={tabName} handleDrawerToggle={handleDrawerToggle} />
            <Suspense fallback={<CircularProgress />}>
              <Outlet />
            </Suspense>
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}

export default SidebarLayout

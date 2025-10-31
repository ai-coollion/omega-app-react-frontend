import AppIcon, { IconType } from '@/components/Core/AppIcon'
import PageDescription from '@/components/Core/PageDescription'
import DashboardControlSelect from '@/components/Core/Select/DashboardControlSelect'
import { StyledTab, StyledTabs } from '@/components/Core/Styled'
import { routers } from '@/configs'
import { dashboardControlItems, headings } from '@/constants'
import { useSocket, useUserInfo } from '@/hooks'
import { dispatch, updateUser } from '@/store'
import { Box, SelectChangeEvent, Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from './Notification'
import Project from './Project'
import UserProfile from './UserProfile'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const settingTabs = [
  { icon: 'profile', title: 'Profile' },
  { icon: 'project', title: 'Project' },
  { icon: 'notification', title: 'Notification' }
]

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{ width: '100%' }}
    >
      {value === index && <>{children}</>}
    </Box>
  )
}

const Settings = () => {
  const userInfo = useUserInfo()
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const socket = useSocket()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleControlSelect = (event: SelectChangeEvent) => {
    setValue(parseInt(event.target.value))
  }

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('userRole', data => {
          dispatch(updateUser(data))
        })
      }
    }
    socketInit()
  }, [socket])

  useEffect(() => {
    if (userInfo && userInfo.role === 'admin') {
      navigate(routers.Admin.Home)
    }
  }, [])

  return (
    <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 20px' }} gap={{ md: 8, xs: 3 }}>
      <PageDescription title={headings.Settings.title} description={headings.Dashboard.description} />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          gap: '50px',
          flexDirection: { tablet: 'row', xs: 'column' }
        }}
      >
        <StyledTabs
          orientation='vertical'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs'
          slotProps={{
            indicator: 'none'
          }}
          sx={{
            display: { xs: 'none', tablet: 'block' }
          }}
        >
          {settingTabs.map(item => (
            <StyledTab
              key={item.icon}
              icon={<AppIcon name={item.icon as IconType} />}
              iconPosition='start'
              label={item.title}
            />
          ))}
        </StyledTabs>

        <Box sx={{ display: { tablet: 'none', xs: 'block' }, width: '100%' }}>
          <DashboardControlSelect
            items={dashboardControlItems}
            handleChange={handleControlSelect}
            value={value.toString()}
          />
        </Box>
        <TabPanel value={value} index={0}>
          <UserProfile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Project />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Notification />
        </TabPanel>
      </Box>
    </Stack>
  )
}

export default Settings

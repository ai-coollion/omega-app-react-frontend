import AppIcon from '@/components/Core/AppIcon'
import Logo from '@/components/Core/Logo'
import { mainSidebars } from '@/constants'
import { colors } from '@/theme'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Box, Drawer, IconButton, Stack, styled, Typography } from '@mui/material'
import { FC, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

const TabItem = styled(NavLink)({
  backgroundColor: 'none',
  border: 'none',
  padding: '12px',
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  fontSize: '12px',
  fontWeight: 400,
  textDecoration: 'none',
  color: '#fff',
  '&:hover': {
    color: '#fff !important'
  }
})

const activeTabState = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? colors.white : '#747474'
  }
}

interface Props {
  mobileOpen: boolean
  handleDrawerClose: () => void
  handleDrawerTransitionEnd: () => void
  handleTabName: (tabName: string) => void
}

const drawerWidth = 240

const Sidebar: FC<Props> = ({ mobileOpen, handleDrawerTransitionEnd, handleDrawerClose, handleTabName }) => {
  const container = window !== undefined ? () => document.body : undefined

  const handleClickTab = (e: MouseEvent<HTMLElement>, activeTab: string) => {
    handleTabName(activeTab)
  }

  const drawer = (
    <Stack flexDirection='column' gap='50px' padding='24px' sx={{ backgroundColor: '#292929', height: '100%' }}>
      <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Logo isInNavigation />
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color='inherit' size='small' onClick={handleDrawerClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
      </Stack>
      <Stack flexDirection='column' justifyContent='space-between' height='100%'>
        {mainSidebars.map(sidebar => (
          <Stack flexDirection='column' gap={1} key={sidebar.title}>
            {sidebar.children.map(item => (
              <TabItem
                key={item.title}
                to={item.path}
                style={activeTabState}
                onClick={e => handleClickTab(e, item.tabName)}
              >
                <AppIcon name={item.iconName} size='16' />
                <Typography variant='subtitle1' fontSize={'16px'}>
                  {item.title}
                </Typography>
              </TabItem>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )

  return (
    <Box component='nav' sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label='mailbox folders'>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          height: '100%',
          border: 'none !important',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none !important' }
        }}
        slotProps={{
          root: {
            keepMounted: true
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          height: '100%',
          border: 'none !important',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            border: 'none !important',
            width: drawerWidth,
            height: '100%'
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar

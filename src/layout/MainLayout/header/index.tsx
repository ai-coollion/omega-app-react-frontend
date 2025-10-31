import Auth from '@/components/Auth'
import AppIcon from '@/components/Core/AppIcon'
import Logo from '@/components/Core/Logo'
import ModalTemplate from '@/components/Core/Modal'
import { colors } from '@/theme'
import { AppBar, Box, Drawer, IconButton, Stack, useScrollTrigger } from '@mui/material'
import { FC, useState } from 'react'
import AuthBar from './AuthBar'
import NavBar from './NavBar'

const DrawerItem = ({ toggleDrawer }: { toggleDrawer: (newOpen: boolean) => void }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: colors.bgDark,
        gap: 1.5,
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          p: '16px 20px',
          position: 'relative'
        }}
      >
        <IconButton
          color='default'
          size='small'
          onClick={() => toggleDrawer(false)}
          sx={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <AppIcon name='close' />
        </IconButton>
        <Logo isInNavigation />
      </Box>
      <NavBar isInMobile drawerClose={() => toggleDrawer(false)} />
    </Box>
  )
}

interface Props {
  window?: () => Window
}

const Header: FC<Props> = ({ window }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [signInState, setSignInState] = useState<boolean>(true)
  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined
  })
  const [open, setOpen] = useState<boolean>(false)
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const handleAuthOpen = (currentState: boolean) => {
    setSignInState(currentState)
    handleModalOpen()
  }

  return (
    <AppBar
      position='fixed'
      component='header'
      sx={{
        backgroundColor: trigger ? 'rgba(25,25,25,0.2) !important' : 'transparent !important',
        boxShadow: 'none',
        backdropFilter: trigger ? 'blur(10px)' : 'none'
      }}
    >
      <Box sx={{ padding: { lg: '20px 100px', md: '20px 20px', xs: '16px 20px' } }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <IconButton
              color='default'
              sx={{ color: colors.white, display: { xs: 'block', md: 'none' } }}
              onClick={() => toggleDrawer(true)}
            >
              <AppIcon name='menu' color='white' size={'24px'} />
            </IconButton>
            <Logo isInNavigation={false} />
          </Stack>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}>
            <NavBar isInMobile={false} />
          </Box>
          <AuthBar handleAuthOpen={handleAuthOpen} />
        </Stack>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor='top'>
        <DrawerItem toggleDrawer={toggleDrawer} />
      </Drawer>
      <ModalTemplate open={modalOpen} onClose={handleModalOpen}>
        <Auth signInState={signInState} onClose={handleModalOpen} />
      </ModalTemplate>
    </AppBar>
  )
}

export default Header

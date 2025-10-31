import AppIcon from '@/components/Core/AppIcon'
import ModalTemplate from '@/components/Core/Modal'
import { StyledBadge } from '@/components/Core/Styled'
import { BASE_MEDIA_URL, routers } from '@/configs'
import { useIsLoggedIn, useNotificationInfo, useUserInfo, useWalletAddress } from '@/hooks'
import ConnectWallet from '@/pages/MarketPlace/ConnectWallet'
import { dispatch, logout } from '@/store'
import { colors } from '@/theme'
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Stack, Tooltip } from '@mui/material'
import { ConnectKitButton } from 'connectkit'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  handleAuthOpen: (current: boolean) => void
}

const AuthBar: FC<Props> = ({ handleAuthOpen }) => {
  const isloggedIn = useIsLoggedIn()
  const { account } = useWalletAddress()
  const userInfo = useUserInfo()
  const navigate = useNavigate()
  const { newsCount } = useNotificationInfo()

  const [modalOpen2, setModalOpen2] = useState(false)
  const handleModalOpen2 = () => {
    if (!account) setModalOpen2(!modalOpen2)
  }

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const auth = (
    <>
      <Tooltip title='SignIn'>
        <IconButton color='default' size='small' sx={{ color: '#ACB4C0' }} onClick={() => handleAuthOpen(true)}>
          <AppIcon name='signin' size={'24px'} />
        </IconButton>
      </Tooltip>
      <Tooltip title='SignUp'>
        <IconButton color='default' size='small' sx={{ color: '#ACB4C0' }} onClick={() => handleAuthOpen(false)}>
          <AppIcon name='signup' size={'24px'} />
        </IconButton>
      </Tooltip>
    </>
  )

  const loggedIn = (
    <>
      <Tooltip title='Setting'>
        <IconButton color='default' size='small' sx={{ color: '#ACB4C0' }}>
          <AppIcon name='setting' size={'24px'} />
        </IconButton>
      </Tooltip>
      <Tooltip title='Logout'>
        <IconButton color='default' size='small' sx={{ color: '#ACB4C0' }} onClick={handleLogout}>
          <AppIcon name='logout' size={'24px'} />
        </IconButton>
      </Tooltip>
      {/* <Tooltip title='Wallet'>
        <IconButton
          color='default'
          size='small'
          sx={{ color: '#ACB4C0' }}
          onClick={() => {
            dispatch(signOutWallet())
          }}
        >
          <WalletBadge
            overlap='circular'
            badgeContent={account ? '' : null}
            color='primary'
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <AppIcon name='wallet' size={'24px'} />
          </WalletBadge>
        </IconButton>
      </Tooltip> */}
      <ConnectKitButton />
      <IconButton
        onClick={handleClick2}
        size='small'
        sx={{ ml: 2 }}
        aria-controls={open2 ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open2 ? 'true' : undefined}
      >
        <StyledBadge
          overlap='circular'
          badgeContent={newsCount}
          color='primary'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <Avatar
            sx={{
              background: 'linear-gradient(180deg, #2383E2 0%, #972CB3 100%)',
              color: colors.white,
              border: `1px solid #fff`,
              width: '40px',
              height: '40px',
              fontFamily: 'Open Sans',
              cursor: 'pointer'
            }}
            alt={`${userInfo?.username}`}
            src={`${BASE_MEDIA_URL}/${userInfo?.avatar}`}
          />
        </StyledBadge>
      </IconButton>
      <Menu
        anchorEl={anchorEl2}
        id='account-menu'
        open={open2}
        onClose={handleClose2}
        onClick={handleClose2}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate(routers.Marketplace)} sx={{ fontSize: '14px' }}>
          MarketPlace
        </MenuItem>
        <MenuItem onClick={() => navigate(routers.FindTask)} sx={{ fontSize: '14px' }}>
          FindTask
        </MenuItem>
        <MenuItem onClick={() => navigate(routers.FindDev)} sx={{ fontSize: '14px' }}>
          FindDev
        </MenuItem>
        <MenuItem onClick={() => navigate(routers.Settings)} sx={{ fontSize: '14px' }}>
          Settings
        </MenuItem>
        <Box display={userInfo?.role === 'admin' ? 'block' : 'none'}>
          <MenuItem onClick={() => navigate(routers.Admin.Project)} sx={{ fontSize: '14px' }}>
            Admin Page
          </MenuItem>
        </Box>
        <MenuItem
          onClick={() => {
            dispatch(logout())
          }}
          sx={{ fontSize: '14px' }}
        >
          Logout
        </MenuItem>
      </Menu>
      <ModalTemplate open={modalOpen2} onClose={handleModalOpen2}>
        <ConnectWallet onCloseModal={handleModalOpen2} />
      </ModalTemplate>
    </>
  )

  return (
    <Stack direction='row' gap={2} alignItems={'center'}>
      <Button
        variant='outlined'
        color='secondary'
        startIcon={<AppIcon name='video' size='24px' />}
        sx={{ p: '4px 8px', height: '32px' }}
      >
        ON
      </Button>
      {isloggedIn ? loggedIn : auth}
    </Stack>
  )
}

export default AuthBar

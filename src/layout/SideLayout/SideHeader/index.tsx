import AppIcon from '@/components/Core/AppIcon'
import { StyledBadge } from '@/components/Core/Styled'
import { BASE_MEDIA_URL, routers } from '@/configs'
import { useNotificationInfo, useUserInfo } from '@/hooks'
import { dispatch, logout } from '@/store'
import { colors } from '@/theme'
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  handleDrawerToggle: () => void
}

const SideHeader: FC<Props> = ({ title, handleDrawerToggle }) => {
  const userInfo = useUserInfo()
  const { newsCount } = useNotificationInfo()
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
  const open2 = Boolean(anchorEl2)
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', () => {})
  }, [])

  return (
    <AppBar
      position='relative'
      sx={{
        width: '100%',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        gap: 4,
        backgroundColor: 'transparent !important',
        color: colors.white
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
        <Stack flexDirection='row' alignItems='center' gap='16px'>
          <Stack display={{ md: 'none', xs: 'block' }}>
            <IconButton color='default' onClick={() => handleDrawerToggle()}>
              <AppIcon name='menu' size='20px' />
            </IconButton>
            <IconButton onClick={() => navigate('/marketplace')}>
              <Box component='img' src='/assets/images/logo.png' />
            </IconButton>
          </Stack>
          <Typography variant='h2' sx={{ fontSize: '24px', fontFamily: 'Inter' }} display={{ md: 'block', xs: 'none' }}>
            {title}
          </Typography>
        </Stack>
        <Stack gap={2} flexDirection='row' justifyContent={'space-between'}>
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
                  bgcolor: colors.bgDark,
                  border: `1px solid ${colors.white}`
                }}
                alt={userInfo?.username}
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
        </Stack>
      </Stack>
      <Typography variant='h2' sx={{ fontSize: '24px', fontFamily: 'Inter' }} display={{ md: 'none', xs: 'block' }}>
        {title}
      </Typography>
    </AppBar>
  )
}

export default SideHeader

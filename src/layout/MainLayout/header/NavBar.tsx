import { navItems } from '@/constants'
import { colors } from '@/theme'
import { ListItem, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const TabItem = styled(NavLink)({
  backgroundColor: 'none',
  border: 'none',
  padding: '0px',
  gap: '12px',
  textDecoration: 'none',
  textAlign: 'center',
  color: '#82868B',
  width: '100%',
  '&:hover': {
    color: '#fff !important'
  }
})

const activeTabState = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? colors.white : '#82868B'
  }
}

interface Props {
  isInMobile: boolean
  drawerClose?: () => void
}

const NavBar: FC<Props> = ({ isInMobile, drawerClose }) => {
  return (
    <Stack
      component='ul'
      direction={isInMobile ? 'column' : { xs: 'column', md: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      gap={1.5}
      sx={{ pl: 0, m: 0 }}
    >
      {navItems.map(item => (
        <ListItem key={item.title} sx={{ padding: '12px 16px' }}>
          <TabItem to={item.link} style={activeTabState} onClick={drawerClose}>
            <Typography variant='h6' component='span'>
              {item.title}
            </Typography>
          </TabItem>
        </ListItem>
      ))}
    </Stack>
  )
}

export default NavBar

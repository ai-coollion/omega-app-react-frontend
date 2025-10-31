import { colors } from '@/theme'
import { Box, Link, styled, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
  isInNavigation: boolean
}

const LogoLink = styled(Link)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none',
  color: colors.white
})

const Logo: FC<Props> = ({ isInNavigation }) => {
  return (
    <LogoLink href='/marketplace'>
      <Box component='img' src='/assets/images/logo.png' />
      <Typography
        component='span'
        variant='h2'
        fontFamily='Open Sans'
        color='#fff'
        fontSize='32px'
        sx={{ display: isInNavigation ? 'block' : { xs: 'none', md: 'block' } }}
      >
        Focus
      </Typography>
    </LogoLink>
  )
}

export default Logo

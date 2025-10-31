import { routers } from '@/configs'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DashboardBanner = () => {
  const navigate = useNavigate()

  return (
    <Stack
      position={'relative'}
      sx={{ borderRadius: '16px', background: '#000', p: '50px' }}
      width={{ md: '50%', xs: '100%' }}
      height={'300px'}
      justifyContent={'center'}
    >
      <Stack direction={'column'} gap={2} zIndex={4} position={'relative'}>
        <Typography variant='h2'>Welcome to OMEGA</Typography>
        <Typography variant='body1'>Find the best Project you want.</Typography>
        <Box>
          <Button variant='contained' color='primary' onClick={() => navigate(routers.Marketplace)}>
            Go now
          </Button>
        </Box>
      </Stack>
      <Box
        component={'img'}
        src='/assets/images/omegaFocus.png'
        sx={{
          position: 'absolute',
          right: 0,
          objectFit: 'cover',
          height: '100%',
          top: 0,
          borderRadius: '16px',
          opacity: 0.2
        }}
      />
    </Stack>
  )
}

export default DashboardBanner

import { BASE_MEDIA_URL } from '@/configs'
import { Developer } from '@/types'
import { Avatar, Box, Button, Chip, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import AppIcon from '../AppIcon'

interface Props {
  developer: Developer
  goInDetailMode: (developer: Developer) => void
}

const DeveloperCard: FC<Props> = ({ developer, goInDetailMode }) => {
  return (
    <Stack gap={2} width={'100%'} position={'relative'} alignItems={'center'}>
      <Box
        sx={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#BD0BEA', zIndex: 4, borderRadius: 1 }}
        p={'4px 12px'}
        display={developer.isPopular ? 'block' : 'none'}
      >
        <Typography variant='subtitle2' color='white' fontFamily={'Open Sans'}>
          ⭐ Popular
        </Typography>
      </Box>
      <Box
        component='img'
        src={`${BASE_MEDIA_URL}/${developer.backImg}`}
        sx={{ mb: 3, position: 'relative', borderRadius: 1.5, objectFit: 'cover' }}
        width={'100%'}
        height={'129px'}
      />
      <Avatar
        alt={developer.username}
        src={`${BASE_MEDIA_URL}/${developer.avatar}`}
        sx={{
          width: 100,
          height: 100,
          border: `3px solid #1f1f1f`,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '60px'
        }}
      />
      <Stack gap={0.5} alignItems={'center'}>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
          <Typography variant='subtitle1' color='white' sx={{ height: '30px' }}>
            {developer.username}
          </Typography>
          {developer.isVerified ? <AppIcon name='verify' /> : null}
        </Stack>
        <Chip color='error' label={`${developer.projects.length} projects`} clickable={false} onClick={() => {}} />
        <Typography variant='body1' color='gray2' sx={{ textAlign: 'center' }}>
          {developer.description}
        </Typography>
      </Stack>
      <Button
        variant='outlined'
        color='secondary'
        size='small'
        sx={{ alignItems: 'stretch' }}
        onClick={() => goInDetailMode(developer)}
      >
        <Typography variant='subtitle2'>VIEW PROFILE</Typography>
      </Button>
    </Stack>
  )
}

export default DeveloperCard

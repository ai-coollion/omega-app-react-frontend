import AppIcon from '@/components/Core/AppIcon'
import { BASE_MEDIA_URL } from '@/configs'
import { IProject } from '@/types'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
  projects: IProject[]
}

const DeveloperProjects: FC<Props> = ({ projects }) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={4} justifyContent={'flex-start'}>
      {projects.map(item => (
        <Grid key={item.title} size={{ xs: 12, sm: 5, md: 4, lg: 3, xl: 2.4 }}>
          <Stack gap={2}>
            <Box
              component={'img'}
              src={`${BASE_MEDIA_URL}/${item.media as string}`}
              sx={{ borderRadius: 1.5, objectFit: 'cover' }}
              height={'160px'}
            />
            <Typography variant='subtitle1' color='white'>
              {item.title}
            </Typography>
            <Typography variant='body1' color='#82868B' sx={{ height: '74px' }}>
              {item.description}
            </Typography>
            <Box>
              <Button
                variant='outlined'
                color='secondary'
                endIcon={<AppIcon name='up' size={'16px'} />}
                disabled={item.isVerified ? false : true}
              >
                <Typography variant='subtitle2'>VIEW-PROJECT</Typography>
              </Button>
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}

export default DeveloperProjects

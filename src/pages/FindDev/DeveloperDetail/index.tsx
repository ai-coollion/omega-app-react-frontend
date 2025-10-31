import AppIcon from '@/components/Core/AppIcon'
import { BASE_MEDIA_URL } from '@/configs'
import { useIsLoggedIn, useUserInfo } from '@/hooks'
import { colors } from '@/theme'
import { Developer, IProject } from '@/types'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import DeveloperDetailPanel from './DeveloperDetailPanel'
import DeveloperProjects from './DeveloperProjects'

interface Props {
  developer: Developer
  goInOverview: () => void
  handleFollowUser: (userId: string) => void
  handleUnFollowUser: (userId: string) => void
}

const DeveloperDetail: FC<Props> = ({ developer, goInOverview, handleFollowUser, handleUnFollowUser }) => {
  const userInfo = useUserInfo()
  const isLoggedIn = useIsLoggedIn()
  const [projects, setProjects] = useState<IProject[]>(developer.projects.filter(item => item.type === 'Image Gen'))
  const [loading, setLoading] = useState<boolean>(false)
  const [isfollowed, setIsfollowed] = useState<boolean>(
    userInfo && userInfo.following.includes(developer._id) ? true : false
  )

  const handleProductsList = (type: string) => {
    setProjects(developer.projects.filter(item => item.type === type))
  }

  const handleFollowAction = async () => {
    if (isLoggedIn && userInfo) {
      try {
        if (userInfo._id !== developer._id) {
          setLoading(true)
          if (isfollowed) {
            await handleUnFollowUser(developer._id)
          } else await handleFollowUser(developer._id)
          setIsfollowed(!isfollowed)
        } else {
          toast.warning('You can not follow yourself')
        }
      } catch (err: any) {
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    } else {
      toast.warning('Please Login')
    }
  }

  return (
    <Stack gap={4} position={'relative'}>
      <Box>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<ArrowBackIosRoundedIcon sx={{ fontSize: '16px' }} />}
          onClick={goInOverview}
          sx={{ backgroundColor: '#363636', color: colors.white }}
        >
          Back
        </Button>
      </Box>
      <Box
        component='img'
        src={`${BASE_MEDIA_URL}/${developer.backImg}`}
        sx={{ borderRadius: 1.5, objectFit: 'cover' }}
        width={'100%'}
        height={{ md: '200px', xs: '125px ' }}
      />
      <Avatar
        alt={developer.username}
        src={`${BASE_MEDIA_URL}/${developer.avatar}`}
        sx={{
          width: { md: '150px', xs: '80px' },
          height: { md: '150px', xs: '80px' },
          border: `3px solid #1f1f1f`,
          position: 'absolute',
          left: 'clamp(1.25rem, 0.6432rem + 2.589vw, 3.75rem);',
          top: 'clamp(8.4375rem, 8.1493rem + 1.2298vw, 9.625rem);'
        }}
      />
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        alignItems={{ md: 'center', xs: 'flex-start' }}
        gap={2}
      >
        <Stack maxWidth={{ md: '640px', xs: '100%' }} gap={1}>
          <Stack gap={1} alignItems={'center'} direction={'row'}>
            <Typography variant='h4' color='white'>
              {developer.username}
            </Typography>
            {developer.isVerified ? <AppIcon name='verify' /> : null}
          </Stack>
          <Typography variant='body1' color='#82868B'>
            {developer.description}
          </Typography>
        </Stack>
        <Stack direction={'row'} gap={0}>
          <Stack width={'120px'} gap={1}>
            <Typography variant='h4' color='white'>
              {developer.followers.length}
            </Typography>
            <Typography variant='body1' color='#82868B'>
              Followers
            </Typography>
          </Stack>
          <Stack width={'120px'} gap={1}>
            <Typography variant='h4' color='white'>
              {developer.following.length}
            </Typography>
            <Typography variant='body1' color='#82868B'>
              Followings
            </Typography>
          </Stack>
          <Stack width={'120px'} gap={1}>
            <Typography variant='h4' color='white'>
              {developer.projects.length}
            </Typography>
            <Typography variant='body1' color='#82868B'>
              Projects
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} gap={2}>
          <Stack direction={'row'} gap={1}>
            <IconButton color='inherit'>
              <AppIcon name='twitter' size={'20px'} />
            </IconButton>
            <IconButton color='inherit'>
              <AppIcon name='github' size={'20px'} />
            </IconButton>
          </Stack>
          <Button variant='outlined' color='secondary' onClick={handleFollowAction} loading={loading}>
            <Typography variant='subtitle2'>{isfollowed ? 'UNFOLLOW' : 'FOLLOW'}</Typography>
          </Button>
          <IconButton color='inherit'>
            <AppIcon name='more' size={'20px'} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ backgroundColor: '#363636' }} />
      <DeveloperDetailPanel handleProjectList={handleProductsList} />
      <DeveloperProjects projects={projects} />
    </Stack>
  )
}

export default DeveloperDetail

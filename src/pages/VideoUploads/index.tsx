import { Stack, Typography } from '@mui/material'
import RecordVideo from './RecordVideo'
import UploadedVideoList from './UploadedVideoList'
import VideoTaskList from './VideoTaskList'

const VideoUploads = () => {
  return (
    <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 0px' }} gap={{ md: 4, xs: 3 }}>
      <Typography variant='h1' color='white' fontSize={'32px'} p={{ md: '0', xs: '20px' }}>
        Upload Focus Video
      </Typography>
      <Stack direction={{ md: 'row', xs: 'column' }} gap={{ md: '50px', xs: '24px' }}>
        <VideoTaskList />
        <RecordVideo />
      </Stack>
      <UploadedVideoList />
    </Stack>
  )
}

export default VideoUploads

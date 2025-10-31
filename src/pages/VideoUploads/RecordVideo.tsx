import AppIcon from '@/components/Core/AppIcon'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const RecordVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null) // Use useRef for the video element
  const [isPlaying, setIsPlaying] = useState(false) // State to control playback

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying) // Set state to true to indicate playback
  }

  useEffect(() => {
    if (videoRef.current) {
      // Check if the ref is available
      if (isPlaying) {
        videoRef.current.play() // Play the video
      } else {
        videoRef.current.pause() // Pause the video
      }
    }
  }, [isPlaying]) // Run the effect when isPlaying changes

  return (
    <Stack gap={3} flexGrow={0} width={{ md: '548px', xs: '100%' }} p={{ xs: '20px', md: '0' }}>
      <Typography variant='h4' color='h4' fontFamily={'Open Sans'}>
        Recording Video
      </Typography>
      <Box width={'100%'} sx={{ position: 'relative' }}>
        <Box
          component={'video'}
          ref={videoRef}
          src='/assets/videos/sample.mp4'
          sx={{ width: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
            backgroundColor: 'rgba(0,0,0,0.3)',
            right: 0,
            top: 0
          }}
        />
        <IconButton
          sx={{
            backgroundColor: isPlaying ? 'transparent' : '#191919 !important',
            position: 'absolute',
            left: '50%',
            borderRadius: '50%',
            top: '50%',
            zIndex: 3,
            width: '56px',
            height: '56px',
            color: isPlaying ? 'transparent' : '#Fff',
            transform: 'Translate(-50%, -50%)',
            '&:hover': {
              color: '#fff'
            }
          }}
          onClick={handlePlayButtonClick}
        >
          <AppIcon name={isPlaying ? 'pause' : 'play'} />
        </IconButton>
      </Box>
      <Button
        variant='outlined'
        color='secondary'
        fullWidth
        sx={{ padding: '16px 24px !important' }}
        endIcon={<AppIcon name='submit' size={'20px'} />}
      >
        UPLOAD
      </Button>
    </Stack>
  )
}

export default RecordVideo

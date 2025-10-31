import { settingControlItems } from '@/constants'
import { VideoType } from '@/types'
import { Box, Checkbox, Divider, SelectChangeEvent, Stack, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import AppIcon from '../AppIcon'
import { ControlSelect } from '../Select/ControlSelect'

interface Props {
  video: VideoType
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const VideoCard: FC<Props> = ({ video }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [value, setValue] = useState<string>(settingControlItems[0].value)
  const handleControlSelect = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  const handleCheckControl = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Stack
      gap={2}
      p={3}
      width={'100%'}
      sx={{
        border: isChecked ? '1px solid #BD0BEA !important' : '1px solid #1f1f1f',
        backgroundColor: '#1f1f1f',
        borderRadius: 1
      }}
    >
      <Stack gap={2} direction={'row'}>
        <Stack gap={0.5} sx={{ overflow: 'hidden' }}>
          <Stack gap={0.5} direction={'row'} alignItems={'center'}>
            <Typography variant='body1' color='gray2' fontFamily={'Open Sans'}>
              Video Id:
            </Typography>
            <Typography variant='body1' color='#BD0BEA' component={'span'} fontFamily={'Open Sans'}>
              {video.id}
            </Typography>
          </Stack>
          <Typography
            variant='body1'
            color='white'
            fontFamily={'Open Sans'}
            sx={{ maxWidth: '100%', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            {video.url}
          </Typography>
        </Stack>
        <Box
          flexShrink={0}
          sx={{
            backgroundColor: isChecked ? '#fff' : '#1f1f1f',
            height: '16px',
            width: '16px',
            position: 'relative',
            borderRadius: 1
          }}
        >
          <Checkbox
            {...label}
            onChange={handleCheckControl}
            color='primary'
            sx={{ position: 'absolute', width: '100%', height: '100%' }}
          />
        </Box>
      </Stack>
      <Stack>
        <ControlSelect items={settingControlItems} handleChange={handleControlSelect} value={value} />
      </Stack>
      <Divider sx={{ backgroundColor: '#424242' }} />
      <Typography variant='body1' color='white' fontFamily={'Open Sans'}>
        Estimated Reward
      </Typography>
      <Stack direction={'row'} alignItems={'center'}>
        <AppIcon name='tao2' />
        <Typography variant='body1' color='#45A1E4' fontFamily={'Open Sans'}>
          0.00412387 TAO
        </Typography>
        <Typography variant='body1' color='white' fontFamily={'Open Sans'}>
          /$11.973792870 USD
        </Typography>
      </Stack>
      <Stack direction='row' gap={0.5}>
        <AppIcon name='omegaCoin' />
        <Typography variant='body1' color='#FBE101'>
          2400
        </Typography>
        <AppIcon name='omega' color='white' size={'16px'} />
      </Stack>
    </Stack>
  )
}

export default VideoCard

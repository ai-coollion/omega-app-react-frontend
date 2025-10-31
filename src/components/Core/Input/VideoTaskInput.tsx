import { colors } from '@/theme'
import { Box, TextField, Typography } from '@mui/material'
import { ChangeEvent, FC } from 'react'

interface Props {
  task: {
    id: string
    description: string
    disabled: boolean
  }
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const VideoTaskInput: FC<Props> = ({ task, handleChange, value }) => {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '40px',
        background: '#1f1f1f',
        color: colors.white,
        flexGrow: 1
      }}
    >
      <Typography variant='body2' fontFamily={'Open Sans'} color='gray2'>
        {task.id}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '48px',
          flexGrow: 1
        }}
      >
        <TextField
          fullWidth
          variant='filled'
          placeholder='Task description'
          size='small'
          disabled={task.disabled}
          onChange={handleChange}
          value={task.disabled ? task.description : value}
          slotProps={{
            input: { disableUnderline: true }
          }}
          sx={{
            '&.MuiFilledInput-root.Mui-focused': {
              backgroundColor: 'transparent !important'
            },
            '&::placeholder': {
              color: '#82868B !important'
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default VideoTaskInput

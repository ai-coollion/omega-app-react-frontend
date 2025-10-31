import { colors } from '@/theme'
import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  label?: string
  placeHolder: string
  type: string
}

const PostInput: FC<Props> = ({ children, label, placeHolder, type }) => {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ color: '#ACB4C0', fontSize: '16px', fontFamily: 'Open Sans' }}>{label}</FormLabel>
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
        <TextField
          fullWidth
          variant='filled'
          placeholder={placeHolder}
          size='small'
          type={type}
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
        {children}
      </Box>
    </FormControl>
  )
}

export default PostInput

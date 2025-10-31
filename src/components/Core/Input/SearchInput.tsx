import { colors } from '@/theme'
import { Box, IconButton, TextField } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import AppIcon from '../AppIcon'

interface Props {
  isSticky?: boolean
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<Props> = ({ isSticky = true, handleChange }) => {
  return (
    <Box
      sx={theme => ({
        borderRadius: '8px',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '40px',
        background: '#1F1F1F',
        border: '1px solid #343434',
        color: 'text.primary',
        ...theme.applyStyles('dark', {
          background: '#1F1F1F',
          border: '1px solid #343434'
        }),
        width: { md: '275px' }
      })}
    >
      <IconButton
        size='medium'
        sx={theme => ({
          padding: '0px !important',
          color: colors.bgDark,
          ...theme.applyStyles('dark', {
            color: colors.white
          })
        })}
      >
        <AppIcon name='search' color='white' />
      </IconButton>
      <Box
        sx={{
          color: isSticky ? '#FFF' : 'text.primary',
          display: 'flex',
          alignItems: 'center',
          height: '48px'
        }}
      >
        <TextField
          fullWidth
          variant='filled'
          placeholder='Search Task'
          size='small'
          onChange={handleChange}
          slotProps={{
            input: { disableUnderline: true }
          }}
          sx={{
            '&.MuiFilledInput-root.Mui-focused': {
              backgroundColor: 'transparent !important'
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default SearchInput

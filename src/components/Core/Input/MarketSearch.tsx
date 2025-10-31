import { Box, IconButton, TextField } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import AppIcon from '../AppIcon'

interface Props {
  isSticky?: boolean
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const MarketSearch: FC<Props> = ({ isSticky = true, handleChange }) => {
  return (
    <Box
      sx={theme => ({
        borderRadius: '8px',
        padding: '6px 6px 6px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '48px',
        maxWidth: '700px',
        background: '#292929',
        border: '1px solid #424242',
        color: 'text.primary',
        ...theme.applyStyles('dark', {
          background: '#292929',
          border: '1px solid #424242'
        }),
        width: { md: '700px' }
      })}
    >
      <Box
        sx={{
          color: isSticky ? '#FFF' : 'text.primary',
          display: 'flex',
          alignItems: 'center',
          height: '48px',
          flexGrow: 1
        }}
      >
        <TextField
          fullWidth
          variant='filled'
          placeholder='Search'
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
      <IconButton
        size='medium'
        color='primary'
        sx={{
          boxShadow:
            '0px 2px 5px 0px rgba(20, 88, 201, 0.17), 0px -2px 0.3px 0px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.22) inset;'
        }}
      >
        <AppIcon name='search' color='white' />
      </IconButton>
    </Box>
  )
}

export default MarketSearch

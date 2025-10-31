import { colors } from '@/theme'
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material'
import { FC } from 'react'

interface Props {
  items: { title: string }[] | undefined
  value?: string
  handleChange: (e: SelectChangeEvent) => void
}

const StyledFromControl = styled(FormControl)({
  borderRadius: '8px',
  backgroundColor: '#363636 !important',
  '& .MuiSelect-root': {
    backgroundColor: '#363636 !important'
  },
  '& .MuiInputBase-root': {
    padding: '6px 16px !important'
  },
  '& .MuiSelect-select': {
    padding: '0px !important',
    color: colors.white
  }
})

export const OptionSelect: FC<Props> = ({ items, value, handleChange }) => {
  return (
    <StyledFromControl variant='outlined' sx={{ flexGrow: 0, flexShrink: 0 }}>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        size='small'
        onChange={(e: SelectChangeEvent) => handleChange(e)}
        sx={{
          '& .MuiInputBase-root': { height: 4 },
          padding: '0px !important'
        }}
      >
        {items &&
          items.map(item => (
            <MenuItem key={item.title} value={item.title} sx={{ fontSize: '14px' }}>
              <Box>{item.title}</Box>
            </MenuItem>
          ))}
      </Select>
    </StyledFromControl>
  )
}

import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

import { colors } from '@/theme'

export const TypeSelect = styled(Select)({
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#363636 !important',
  padding: '12px',
  height: 'auto',
  '& .MuiSelect-select': {
    paddingRight: '12px !important',
    minWidth: '70px',
    color: colors.white
  },
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'transparent'
  },
  '& .MuiSelect-root': {
    backgroundColor: '#363636 !important'
  },
  '& .MuiInputBase-root': {
    padding: '6px 16px !important'
  }
})

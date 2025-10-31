import { Box, FormControl, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material'
import { FC } from 'react'
import AppIcon, { IconType } from '../AppIcon'

interface Props {
  items: { title: string; iconName: IconType; value: string }[]
  value?: string
  handleChange: (e: SelectChangeEvent) => void
}

const StyledFromControl = styled(FormControl)({
  borderRadius: '8px',
  padding: '8px',
  backgroundColor: '#292929 !important',
  color: '#fff !important',
  border: `1px solid #343434`,
  width: '100%',
  '& .MuiInputBase-root': {
    padding: '12px 16px !important'
  },
  '& .MuiSelect-select': {
    padding: '0px !important',
    width: '100% !important',
    color: '#fff'
  }
})

const DashboardControlSelect: FC<Props> = ({ items, value, handleChange }) => {
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
            <MenuItem
              key={item.title}
              value={item.value}
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
            >
              <Box mr={1}>
                <AppIcon name={item.iconName} />
              </Box>
              <Box>{item.title}</Box>
            </MenuItem>
          ))}
      </Select>
    </StyledFromControl>
  )
}

export default DashboardControlSelect

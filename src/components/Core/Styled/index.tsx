import { colors } from '@/theme'
import { Badge, Box, styled, Tab, TableCell, tableCellClasses, Tabs } from '@mui/material'

export const StyledTab = styled(Tab)({
  color: '#363636',
  width: '100%',
  padding: '12px 12px 12px 20px !important',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  fontFamily: 'Exo',
  lineHeight: '24px',
  borderLeft: `2px solid none`,
  borderRadius: '0px !important',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  '&.Mui-selected': {
    background: '#363636 !important',
    border: 'none',
    borderRadius: '8px !important',
    color: colors.white,
    fontWeight: 600
  },
  '.MuiTab-wrapper': {
    flexDirection: 'row',
    padding: 1.5
  },
  '& .MuiTab-icon': {
    margin: '0px !important'
  },
  '&:focusVisible': {
    border: 'none !important',
    outline: 'none !important'
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#fff',
    outline: 'none !important',
    border: 'none !important'
  }
})

export const StyledTabs = styled(Tabs)({
  minWidth: '200px',
  '& .MuiTabs-list': {
    gap: '16px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'red'
  },
  '& .MuiTab-icon': {
    marginRight: '12px !important'
  },
  '& .MuiTabs-scroller': {
    width: '100% !important'
  }
})

export const DashboardBox = styled(Box)({
  padding: '24px',
  gap: 2,
  width: '100%',
  borderRadius: '16px',
  border: `1px solid #363636`,
  backgroundColor: '#292929',
  color: colors.white,
  position: 'relative'
})

export const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  border: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    backgroundColor: '#de0009',
    color: '#ffffff',
    height: '15px',
    minWidth: '10px',
    width: '15px',

    // boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: `1px solid #de0009`,
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
})

export const WalletBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    backgroundColor: '#ebc334',
    color: '#ffffff',
    height: '10px',
    minWidth: '10px',
    width: '10px',

    // boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: `1px solid #ebc334`,
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
})

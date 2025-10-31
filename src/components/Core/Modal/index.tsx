import { Box, Modal, styled } from '@mui/material'
import { FC, ReactNode } from 'react'

const ModalContainer = styled(Modal)(({ theme }) => ({
  ...theme.applyStyles('dark', {
    background: 'rgba(25, 25, 25, 0.85)',
    backdropFilter: 'blur(10px)'
  }),
  ...theme.applyStyles('light', {
    background: 'rgba(238, 214, 183, 0.95)'
  })
}))

const ModalBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  position: 'absolute',
  p: 3,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '480px',
    maxWidth: '480px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

interface Props {
  open: boolean
  onClose: () => void
  children?: ReactNode
}

const ModalTemplate: FC<Props> = ({ open, onClose, children }) => {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <ModalBox>{children}</ModalBox>
    </ModalContainer>
  )
}

export default ModalTemplate

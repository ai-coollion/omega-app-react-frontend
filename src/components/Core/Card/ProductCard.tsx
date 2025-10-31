import { BASE_MEDIA_URL } from '@/configs'
import { useConnectKitModal } from '@/context/ConnectKitModalProvider'
import { IProject } from '@/types'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { useAccount } from 'wagmi'
import AppIcon from '../AppIcon'

interface Props {
  project: IProject
}

const StyledStack = styled(Stack)({
  backgroundColor: 'none',
  borderRadius: '16px'
})

const ProductCard: FC<Props> = ({ project }) => {
  const { isConnected } = useAccount()
  const openConnectModal = useConnectKitModal()

  const handleButtonClick = () => {
    if (isConnected) {
      console.log('action')
    } else {
      openConnectModal()
    }
  }

  return (
    <StyledStack gap={2} width={'100%'} sx={{ position: 'relative' }}>
      <Box
        component='img'
        src={`${BASE_MEDIA_URL}/${project.media as string}`}
        sx={{ borderRadius: 1.5, objectFit: 'cover' }}
        width={'100%'}
        height={'168px'}
      />
      <Stack gap={1}>
        <Typography
          variant='subtitle1'
          color='white'
          sx={{ height: '30px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          {project.title}
        </Typography>
        <Typography
          variant='body1'
          color='#82868B'
          sx={{ height: '74px', textOverflow: 'ellipsis', overflow: 'hidden' }}
        >
          {project.description}
        </Typography>
      </Stack>
      <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
        <Stack direction={'row'} gap={0.5} alignItems={'center'}>
          <AppIcon name='omegaCoin' />
          <Typography variant='subtitle1' color='#F8C805'>
            {project.price}
          </Typography>
        </Stack>
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          disabled={!project.isVerified}
          endIcon={<AppIcon name='up' size={'16px'} />}
          sx={{ alignItems: 'stretch' }}
          onClick={handleButtonClick}
        >
          <Typography variant='subtitle2'>TRY IT OUT</Typography>
        </Button>
      </Stack>
    </StyledStack>
  )
}

export default ProductCard

import AppIcon from '@/components/Core/AppIcon'
import { useWalletAddress } from '@/hooks'
import { dispatch, signInWallet } from '@/store'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { ethers } from 'ethers'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
  onCloseModal: () => void
}

const ConnectWallet: FC<Props> = ({ onCloseModal }) => {
  const { account } = useWalletAddress()
  const [address, setAddress] = useState<string | null>(account)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async () => {
    try {
      if (!window?.ethereum) {
        setError('MetaMask is not installed.')
        console.log(error)
        return
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send('eth_requestAccounts', [])
      setAddress(accounts[0])
      dispatch(signInWallet({ account: accounts[0] }))

      const signer = await provider.getSigner(accounts[0])
      console.log(signer)
      window.ethereum.on('accountsChanged', async (newAccounts: string[]) => {
        setAddress(newAccounts[0] || null)

        if (newAccounts[0]) {
          dispatch(signInWallet({ account: newAccounts[0] }))
        }
      })
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
    } catch (err: any) {
      toast.error(err.message)

      setError(err.message)
    }
  }

  return (
    <Stack
      gap={5}
      sx={{
        backgroundColor: '#292929',
        borderRadius: 1,
        width: { md: '452px', xs: '100%' },
        position: 'relative',
        padding: '30px 50px'
      }}
      alignItems={'center'}
    >
      <Typography variant='h1' fontSize={'32px'} color='white' textAlign={'center'}>
        Connect to your Wallet
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {!address ? (
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            size='large'
            sx={{ height: 'auto' }}
            onClick={connectWallet}
          >
            <AppIcon name='metamask' />
            <Typography variant='subtitle1' ml={1}>
              Metamask
            </Typography>
          </Button>
        ) : (
          <Box>{`Connected Account : ${address}`}</Box>
        )}
        <Button fullWidth variant='contained' color='secondary' size='large' sx={{ height: 'auto' }}>
          <AppIcon name='phantom' />
          <Typography variant='subtitle1' ml={1}>
            Phantom
          </Typography>
        </Button>
        <Button fullWidth variant='contained' color='secondary' size='large' sx={{ height: 'auto' }}>
          <AppIcon name='solflare' />
          <Typography variant='subtitle1' ml={1}>
            Solflare
          </Typography>
        </Button>
      </Box>
      <IconButton color='default' sx={{ position: 'absolute', top: '12px', right: '12px' }} onClick={onCloseModal}>
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default ConnectWallet

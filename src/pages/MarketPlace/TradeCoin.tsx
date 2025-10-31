import AppIcon from '@/components/Core/AppIcon'
import { colors } from '@/theme'
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded'
import { Box, Button, IconButton, Stack, styled, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

const StyledBox = styled(Box)({
  backgroundColor: colors.bgDark,
  borderRadius: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  padding: '12px'
})

const TradeCoin = () => {
  const [order, setOrder] = useState<boolean>(false)
  const [omegaValue, setOmegaValue] = useState<number>()
  const [coinValue, setCoinValue] = useState<number>()

  const handleOmegaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoinValue(parseFloat(event.target.value) / 100)
    setOmegaValue(parseFloat(event.target.value))
  }

  const handleCoinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoinValue(parseInt(event.target.value))
    setOmegaValue(parseInt(event.target.value) * 100)
  }

  return (
    <Stack p={3} sx={{ backgroundColor: colors.dark2, borderRadius: 2 }} gap={3} alignItems={'center'} width={'100%'}>
      <Stack gap={1} justifyContent={'center'} alignItems={'center'} width={'100%'}>
        <Typography variant='h2' color='white'>
          Trade Coin
        </Typography>
        <Stack direction={'row'} gap={0.5} justifyContent={'center'} alignItems={'center'}>
          <Typography variant='body2' color='gray2'>
            Click
          </Typography>
          <SwapVertRoundedIcon sx={{ color: 'white', fontSize: '20px' }} />
          <Typography variant='body2' color='gray2'>
            to switch trade Omega Coin & TAO
          </Typography>
        </Stack>
        <Stack gap={2} sx={{ position: 'relative' }} width={'100%'} direction={order ? 'column-reverse' : 'column'}>
          <StyledBox width={'100%'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant='body2' fontFamily={'Open Sans'} color='gray2'>
                {order ? 'Received' : 'Trade Amount'}
              </Typography>
              <Typography variant='body2' fontFamily={'Open Sans'} color='gray2'>
                {order ? '1 TAO = 1000 $OC' : 'Balance : 100,000 $OC'}
              </Typography>
            </Stack>
            <Stack direction={'row'}>
              <TextField
                variant='filled'
                placeholder=''
                size='small'
                type='number'
                value={omegaValue}
                onChange={handleOmegaChange}
                slotProps={{
                  input: { disableUnderline: true }
                }}
                sx={{
                  '.MuiInputBase-input': { fontSize: '18px' },
                  flexGrow: 1,
                  '&.input': { background: 'transparent !important' },
                  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0
                  },
                  '& input[type=number]': {
                    MozAppearance: 'textfield'
                  }
                }}
              />
              <Stack direction={'row'} gap={0.5} alignItems={'center'} flexGrow={0} flexShrink={0}>
                <AppIcon name='omegaCoin' size={'20px'} />
                <Typography variant='body2' color='white'>
                  Omega Coin
                </Typography>
              </Stack>
            </Stack>
          </StyledBox>
          <StyledBox>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant='body2' fontFamily={'Open Sans'} color='gray2'>
                {order ? 'Amount' : 'TAO Received'}
              </Typography>
              <Typography variant='body2' fontFamily={'Open Sans'} color='gray2'>
                {order ? 'Balance: 25.39724215 TAO' : '1000 $OC = 1 TAO'}
              </Typography>
            </Stack>
            <Stack direction={'row'}>
              <TextField
                variant='filled'
                placeholder=''
                size='small'
                type='number'
                value={coinValue}
                onChange={handleCoinChange}
                slotProps={{
                  input: { disableUnderline: true }
                }}
                sx={{
                  '.MuiInputBase-input': { fontSize: '18px' },
                  flexGrow: 1,
                  '&.input': { background: 'transparent !important' },
                  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0
                  },
                  '& input[type=number]': {
                    MozAppearance: 'textfield'
                  }
                }}
              />
              <Stack direction={'row'} gap={0.5} alignItems={'center'} flexGrow={0} flexShrink={0}>
                <Box component={'img'} src='/assets/tao.svg' width={'20px'} height={'20px'} />
                <Typography variant='body2' color='white'>
                  TAO
                </Typography>
              </Stack>
            </Stack>
          </StyledBox>
          <Box position={'absolute'} sx={{ left: '50%', top: '50%', transform: 'Translate(-50%, -50%)' }}>
            <IconButton
              color='inherit'
              sx={{ backgroundColor: '#1F1F1F', border: `1px solid ${colors.dark3}`, borderRadius: '50%' }}
              onClick={() => setOrder(!order)}
            >
              <SwapVertRoundedIcon sx={{ color: 'white', fontSize: '24px' }} />
            </IconButton>
          </Box>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
          <Typography variant='body2' color='gray2'>
            Fee
          </Typography>
          <Typography variant='body2' color='gray2'>
            0.000001 TAO/~$0.3
          </Typography>
        </Stack>
        <Button variant='contained' color='primary' startIcon={<AppIcon name='clothes' size={'20px'} />} fullWidth>
          <Typography variant='subtitle2' component={'span'}>
            {order ? 'CONVERT TO $OC' : 'CONVERT TO TAO'}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}

export default TradeCoin

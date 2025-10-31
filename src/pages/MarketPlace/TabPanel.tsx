import AppIcon from '@/components/Core/AppIcon'
import { productCategories } from '@/constants'
import { colors } from '@/theme'
import { Button, Divider, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { FC, useState } from 'react'

interface Props {
  onModalOpen: () => void
  handleProductsList: (type: string) => void
}

const TabPanel: FC<Props> = ({ onModalOpen, handleProductsList }) => {
  const [alignment, setAlignment] = useState<string | null>(productCategories[0].value)

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment && newAlignment !== alignment) {
      setAlignment(newAlignment)
      handleProductsList(newAlignment)
    }
  }

  return (
    <Stack direction={'row'} gap={1.5}>
      <Stack
        direction={{ lg: 'row', sm: 'column' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', lg: 'center' }}
        gap={2}
        width={'100%'}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={{ xs: '100%', lg: 'auto' }}
        >
          <Typography variant='h3' color='white'>
            🔥 All Rewards
          </Typography>
          <Stack direction={'row'} gap={1} display={{ lg: 'none', xs: 'flex' }} alignItems={'center'}>
            <Button variant='contained' color='inherit' startIcon={<AppIcon name='omegaCoin' size={'24px'} />}>
              100,000
            </Button>
            <IconButton color='inherit' sx={{ borderRadius: 1 }}>
              <AppIcon name='sort' size={'16px'} />
            </IconButton>
            <IconButton color='primary' onClick={onModalOpen} sx={{ display: { tablet: 'none', xs: 'block' } }}>
              <AppIcon name='clothes' size={'16px'} />
            </IconButton>
          </Stack>
        </Stack>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label='text alignment'
          color='standard'
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'scroll',
            width: { lg: 'auto', xs: '100%' },
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {productCategories.map(item => (
            <ToggleButton
              key={item.title}
              value={item.value}
              aria-label={item.title}
              sx={{
                padding: {
                  md: '8px 12px',
                  color: '#82868B',
                  whiteSpace: 'nowrap'
                }
              }}
            >
              {item.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Stack direction={'row'} gap={1.5} alignItems={'center'} sx={{ display: { lg: 'flex', xs: 'none' } }}>
          <Button variant='contained' color='inherit' startIcon={<AppIcon name='omegaCoin' size={'24px'} />}>
            100,000
          </Button>
          <Divider orientation='vertical' flexItem />
          <Button
            variant='contained'
            color='inherit'
            sx={{ backgroundColor: colors.dark3, border: 'none' }}
            startIcon={<AppIcon name='sort' />}
            endIcon={<AppIcon name='down' />}
          >
            Newest
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TabPanel

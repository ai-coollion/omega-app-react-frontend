import PageDescription from '@/components/Core/PageDescription'
import { Stack } from '@mui/material'
import VeraCoinApprove from './VeraCoinApprove'
import VeraCoinDeposite from './VeraCoinDeposite'
import VeraCoinWithdraw from './VeraCoinWithdraw'

const VeraCoinMarket = () => {
  return (
    <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 20px' }} gap={{ md: 8, xs: 3 }}>
      <PageDescription title={'Welcome to use Vera Coin'} description={'Innovative Idea Vera Coin'} />
      <Stack width={'50%'}>
        <VeraCoinApprove />
      </Stack>
      <Stack direction={{ md: 'row', xs: 'column' }} alignItems={{ md: 'flex-start', xs: 'center' }} gap={3}>
        <VeraCoinDeposite />
        <VeraCoinWithdraw />
      </Stack>
    </Stack>
  )
}

export default VeraCoinMarket

import MarketSearch from '@/components/Core/Input/MarketSearch'
import Loading from '@/components/Core/Loading/Loading'
import ModalTemplate from '@/components/Core/Modal'
import PageDescription from '@/components/Core/PageDescription'
import { headings } from '@/constants'
import { getAllowedProjects } from '@/services/projectServices'
import { IProject } from '@/types'
import { Box, Stack } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import BestGood from './BestGood'
import Cards from './Cards'
import TabPanel from './TabPanel'
import TradeCoin from './TradeCoin'

const MarketPlace = () => {
  const [productsList, setProductsList] = useState<IProject[]>([])
  const [tempList, setTempList] = useState<IProject[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleAllowedProjects = async () => {
    try {
      setLoading(true)
      const projects = await getAllowedProjects()
      setProductsList(projects)
      setTempList(projects)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setProductsList(() => {
      const updatedFilteredItems = tempList.filter(item =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      return updatedFilteredItems
    })
  }, [search])

  useEffect(() => {
    handleAllowedProjects()
  }, [])

  const handleProductsList = (type: string) => {
    setProductsList(tempList.filter(item => item.type === type))
  }

  return (
    <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 20px' }} gap={{ md: 8, xs: 3 }}>
      <PageDescription title={headings.MarketPlace.title} description={headings.MarketPlace.description}>
        <MarketSearch handleChange={handleSearchText} />
      </PageDescription>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        gap={{ lg: '100px', md: '50px', xs: '16px' }}
        justifyContent={'space-between'}
      >
        <Stack direction={'column'} gap={4} width={{ md: '65%' }} flexGrow={1} sx={{ position: 'relative' }}>
          <TabPanel onModalOpen={handleModalOpen} handleProductsList={handleProductsList} />
          {loading ? <Loading /> : <Cards projects={productsList} />}
        </Stack>
        <Stack
          direction={{ md: 'column', xs: 'row' }}
          gap={4}
          justifyContent={{ md: 'flex-start', xs: 'center' }}
          width={{ lg: '35%', xl: '406px', md: '30%', xs: '100%' }}
        >
          <BestGood />
          <Box display={{ xs: 'none', tablet: 'block' }} flexShrink={0}>
            <TradeCoin />
          </Box>
        </Stack>
      </Stack>
      <ModalTemplate open={modalOpen} onClose={handleModalOpen}>
        <TradeCoin />
      </ModalTemplate>
    </Stack>
  )
}

export default MarketPlace

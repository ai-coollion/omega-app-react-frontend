import MarketSearch from '@/components/Core/Input/MarketSearch'
import Loading from '@/components/Core/Loading/Loading'
import PageDescription from '@/components/Core/PageDescription'
import { headings } from '@/constants'
import { followUser, getDevelopers, unFollowUser } from '@/services'
import { Developer } from '@/types'
import { Stack } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import DeveloperDetail from './DeveloperDetail'
import DeveloperList from './DeveloperLists'
import FindDevPanel from './FindDevPanel'

const FindDev = () => {
  const [currentDeveloper, setCurrentDeveloper] = useState<Developer>()
  const [developerList, setDeveloperList] = useState<Developer[]>([])
  const [tempList, setTempList] = useState<Developer[]>([])
  const [isDetailMode, setIsDetailMode] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleDevelopers = async () => {
    try {
      setLoading(true)
      const developers = await getDevelopers()
      setDeveloperList(developers)
      setTempList(developers)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleFollowUser = async (userId: string) => {
    try {
      const result = await followUser(userId)
      setCurrentDeveloper(result)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleUnFollowUser = async (userId: string) => {
    try {
      const result = await unFollowUser(userId)
      setCurrentDeveloper(result)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const goInToDetail = (developer: Developer) => {
    setCurrentDeveloper(developer)
    setIsDetailMode(true)
  }

  const handleDeveloperList = (type: string) => {
    setDeveloperList(tempList.filter(developer => developer.type === type))
  }

  const goInOverview = () => {
    setIsDetailMode(false)
    handleDevelopers()
  }

  useEffect(() => {
    setDeveloperList(() => {
      const updatedFilteredItems = tempList.filter(item =>
        item.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )

      return updatedFilteredItems
    })
  }, [search])

  useEffect(() => {
    handleDevelopers()
  }, [])

  return (
    <Stack padding={{ lg: '140px 100px', md: '140px 20px', xs: '100px 20px' }}>
      <Stack gap={{ md: 8, xs: 3 }} display={isDetailMode ? 'none' : 'flex'}>
        <PageDescription title={headings.FindDev.title} description={headings.FindDev.description}>
          <MarketSearch handleChange={handleSearchText} />
        </PageDescription>
        <Stack gap={4} position={'relative'}>
          <FindDevPanel handleDeveloperList={handleDeveloperList} />
          <Stack position={'relative'} minHeight={'250px'}>
            {loading ? <Loading /> : <DeveloperList developers={developerList} goInDetailMode={goInToDetail} />}
          </Stack>
        </Stack>
      </Stack>
      <Stack display={isDetailMode ? 'block' : 'none'}>
        {currentDeveloper && (
          <DeveloperDetail
            developer={currentDeveloper}
            goInOverview={goInOverview}
            handleFollowUser={handleFollowUser}
            handleUnFollowUser={handleUnFollowUser}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default FindDev

import Loading from '@/components/Core/Loading/Loading'
import ModalTemplate from '@/components/Core/Modal'
import PageDescription from '@/components/Core/PageDescription'
import { headings } from '@/constants'
import { useIsLoggedIn, useSocket } from '@/hooks'
import { getTasks } from '@/services'
import { colors } from '@/theme'
import { status, TaskResType } from '@/types'
import { Box, Divider, Stack } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import FindTaskPanel from './FindTaskPanel'
import LiveSolved from './LiveSolved'
import Poplular from './Poplular'
import PostTask from './PostTask'
import SubmitTask from './SubmitTask'
import TaskList from './TaskList'

const FindTask = () => {
  const isLoggedIn = useIsLoggedIn()
  const socket = useSocket()
  const [taskList, setTaskList] = useState<TaskResType[]>([])
  const [tempList, setTempList] = useState<TaskResType[]>([])
  const [currentId, setCurrentId] = useState<string>('')
  const [currentTask, setCurrentTask] = useState<TaskResType>()
  const [loading, setLoading] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalOpen2, setModalOpen2] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const handleTaskList = (status: string) => {
    if (status !== 'all') setTaskList(tempList.filter(task => task.status === (status as status)))
    else setTaskList(tempList)
  }

  const handleCurrentId = (taskId: string) => {
    setCurrentId(taskId)
    setCurrentTask(tempList.find(item => item._id === taskId))
  }

  const handleTask = async () => {
    try {
      setLoading(true)
      const tasks = await getTasks()
      setTaskList(tasks)
      setTempList(tasks)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const handleModalOpen2 = () => {
    if (isLoggedIn) setModalOpen2(!modalOpen2)
    else toast.warning('Please LogIn')
  }

  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    handleTask()
  }, [])

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('successTask', () => {
          handleTask()
        })
      }
    }
    socketInit()
  }, [socket])

  useEffect(() => {
    setTaskList(() => {
      const updatedFilteredItems = tempList.filter(item =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )

      return updatedFilteredItems
    })
  }, [search])

  return (
    <Stack padding={{ lg: '140px 100px', sm: '140px 20px', xs: '100px 0px' }} gap={{ md: 8, xs: 3 }}>
      <Box p={{ sm: '0px', xs: '0px 20px' }}>
        <PageDescription title={headings.FindTask.title} description={headings.FindTask.description} />
      </Box>
      <Stack direction={{ md: 'row', xs: 'column' }} gap='50px'>
        <Stack gap={4} flexGrow={1} position={'relative'}>
          <FindTaskPanel onModalOpen={handleModalOpen} handleTaskList={handleTaskList} />
          {loading ? (
            <Loading />
          ) : (
            <TaskList
              taskList={taskList}
              handleChange={handleSearchText}
              handleModalOpen={handleModalOpen2}
              handleCurrentId={handleCurrentId}
            />
          )}
        </Stack>

        <Stack gap={4} flexGrow={0} flexShrink={1} sx={{ maxWidth: { md: '350px', xs: '100%' }, overflow: 'hidden' }}>
          <Poplular />
          <Divider sx={{ backgroundColor: colors.dark2 }} />
          <LiveSolved solvedItems={tempList.filter(item => item.status === 'success')} />
        </Stack>
      </Stack>
      <ModalTemplate open={modalOpen} onClose={handleModalOpen}>
        <PostTask onCloseModal={handleModalOpen} handleTask={handleTask} />
      </ModalTemplate>

      <ModalTemplate open={modalOpen2} onClose={handleModalOpen2}>
        <SubmitTask
          onCloseModal={handleModalOpen2}
          handleTask={handleTask}
          currentId={currentId}
          currentTask={currentTask as TaskResType}
        />
      </ModalTemplate>
    </Stack>
  )
}

export default FindTask

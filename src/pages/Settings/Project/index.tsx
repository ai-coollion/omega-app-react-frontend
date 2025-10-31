import Loading from '@/components/Core/Loading/Loading'
import { BASE_MEDIA_URL } from '@/configs'
import { useSocket } from '@/hooks'
import { getMyProjects } from '@/services/projectServices'
import { IProject } from '@/types'
import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CreateProject from './CreateProject'
import MyProject from './MyProject'

const Project = () => {
  const [myProjects, setMyProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const socket = useSocket()

  const handleMyProjects = async () => {
    try {
      setLoading(true)
      const projects = await getMyProjects()
      setMyProjects(
        projects.map(project => {
          return { ...project, media: `${BASE_MEDIA_URL}/${project.media}` }
        })
      )
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleMyProjects()
  }, [])

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('verifyProject', () => {
          handleMyProjects()
        })
        socket.on('deleteProject', () => {
          handleMyProjects()
        })
      }
    }
    socketInit()
  }, [socket])

  return (
    <Stack direction={'column'} gap={3} width={'100%'} position={'relative'}>
      <CreateProject handleMyProjects={handleMyProjects} />
      <Box>{loading ? <Loading /> : <MyProject projects={myProjects} />}</Box>
    </Stack>
  )
}

export default Project

import Loading from '@/components/Core/Loading/Loading'
import { useSocket, useUserInfo } from '@/hooks'
import { getNotifications } from '@/services'
import { dispatch, pushNotifications } from '@/store'
import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../MainLayout/header'

const MainLayout = () => {
  const socket = useSocket()
  const userInfo = useUserInfo()

  const handleNotification = async () => {
    try {
      const result = userInfo && (await getNotifications(userInfo?._id))
      if (result) {
        dispatch(pushNotifications(result))
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    const socketInit = () => {
      if (socket) {
        socket.on('notification', () => {
          toast.info('New Notification')
          handleNotification()
        })
      }
    }
    socketInit()
  }, [socket])

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout

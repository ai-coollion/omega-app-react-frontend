import { routers } from '@/configs'
import { useIsLoggedIn } from '@/hooks'
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(routers.Dashboard)
      toast.warning('Please Login')
    }
  }, [isLoggedIn, navigate])

  return children
}

export default PrivateRoute

import MainLayout from '@/layout/MainLayout'
import SidebarLayout from '@/layout/SideLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRouter'

const MarketPlace = lazy(() => import('@/pages/MarketPlace'))
const VideoUploads = lazy(() => import('@/pages/VideoUploads'))
const FindTask = lazy(() => import('@/pages/FindTask'))
const FindDev = lazy(() => import('@/pages/FindDev'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Settings = lazy(() => import('@/pages/Settings'))
const VeraCoinMarket = lazy(() => import('@/pages/VeraCoinMarket'))
const Admin = lazy(() => import('@/pages/Admin'))
const ProjectManagement = lazy(() => import('@/pages/Admin/ProjectManagement'))
const UserManagement = lazy(() => import('@/pages/Admin/UserManagement'))
const TaskManagement = lazy(() => import('@/pages/Admin/TaskManagement'))
const VideoManagement = lazy(() => import('@/pages/Admin/VideoManagement'))
const Notification = lazy(() => import('@/pages/Settings/Notification'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/veracoin',
        element: <VeraCoinMarket />
      },
      {
        path: '/marketplace',
        element: <MarketPlace />
      },
      {
        path: '/uploads',
        element: <VideoUploads />
      },
      {
        path: '/findtask',
        element: <FindTask />
      },
      {
        path: '/finddev',
        element: <FindDev />
      }
    ]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  },
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <SidebarLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/admin/user',
        element: <UserManagement />
      },
      {
        path: '/admin/project',
        element: <ProjectManagement />
      },
      {
        path: '/admin/task',
        element: <TaskManagement />
      },
      {
        path: '/admin/video',
        element: <VideoManagement />
      },
      {
        path: '/admin/notification',
        element: <Notification />
      }
    ]
  }
])

export default routes

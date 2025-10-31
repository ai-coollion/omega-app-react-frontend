import { SOCKET_URL } from '@/configs'
import { useToken } from '@/hooks'
import React, { ReactNode, createContext } from 'react'
import { Socket, io } from 'socket.io-client'

interface SocketProviderProps {
  children: ReactNode
}

export type SocketContextType = Socket | null

export const SocketContext = createContext<SocketContextType>(null)

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const token = useToken()
  const socket: Socket = io(SOCKET_URL, { auth: { token } })

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

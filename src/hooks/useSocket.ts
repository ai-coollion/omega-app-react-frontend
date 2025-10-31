import { useContext } from 'react';
import { SocketContext, SocketContextType } from '@/context/SocketProvider';

export const useSocket = (): SocketContextType => useContext(SocketContext);

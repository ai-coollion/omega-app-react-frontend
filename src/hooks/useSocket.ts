import { useContext } from 'react';
import { SocketContext, SocketContextType } from '@/context/SocketProvider';

// Hook to use the Socket context
export const useSocket = (): SocketContextType => useContext(SocketContext);

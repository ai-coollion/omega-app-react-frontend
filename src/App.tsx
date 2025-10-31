import { RouterProvider } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import { SocketProvider } from './context/SocketProvider'
import Web3Provider from './context/WagmiWrapper'
import routes from './routes'

const App = () => {
  return (
    <Web3Provider>
      <SocketProvider>
        <RouterProvider router={routes} />
        <ToastContainer
          style={{ zIndex: 10000, fontSize: '16px' }}
          theme='colored'
          autoClose={2000}
          transition={Flip}
        />
      </SocketProvider>
    </Web3Provider>
  )
}

export default App

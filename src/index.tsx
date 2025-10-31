import { StyledEngineProvider } from '@mui/material'
import * as ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { persister, store } from './store'
import { AppTheme } from './theme'

export const rootElement = document.getElementById('root')

const root = ReactDom.createRoot(rootElement!)

root.render(
  <StyledEngineProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppTheme>
          <App />
        </AppTheme>
      </PersistGate>
    </Provider>
  </StyledEngineProvider>
)

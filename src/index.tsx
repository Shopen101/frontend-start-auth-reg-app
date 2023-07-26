import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@mui/styles'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from './theme'
import App from './App'
import './index.css'
import Store from './store/store'

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <StylesProvider injectFirst>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ store }}>
          <App />
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StylesProvider>,
  // </React.StrictMode>,
)

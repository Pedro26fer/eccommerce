import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme.js';
import Providers from './Providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Providers>
        <App />
      </Providers>
    </ThemeProvider>
  </React.StrictMode>,
)

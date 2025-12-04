import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LanguageContextProvider } from './context/LanguageContext.jsx'
import { DarkModeContextProvider } from './context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </LanguageContextProvider>
    </BrowserRouter>

  </StrictMode>
)

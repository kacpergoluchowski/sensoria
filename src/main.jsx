import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import './styles/fonts.css'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

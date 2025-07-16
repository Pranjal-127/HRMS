import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'                                   // Importing a main css file for styling
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// importing the features

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

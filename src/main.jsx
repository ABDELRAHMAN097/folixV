import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wraper from './Wraper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wraper>
      <App />
    </Wraper>
  </StrictMode>,
)

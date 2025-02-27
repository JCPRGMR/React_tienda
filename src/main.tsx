import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import {Buttons} from './components/atoms/Buttons.tsx'
import { Dashboard } from './pages/Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard/>
  </StrictMode>,
)
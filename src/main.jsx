import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navs from './Navs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navs />
  </StrictMode>,
)

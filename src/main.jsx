import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navs from './Navs'
import ErrorBoundary from './articlepages/ErrorBoundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Navs />
    </ErrorBoundary>
  </StrictMode>
)
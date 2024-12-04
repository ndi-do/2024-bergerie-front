import { ReactNode, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'


const container = document.getElementById('root') || document.createElement('div') as HTMLElement
const root = createRoot(container)

const render: ReactNode = (
  <StrictMode>
    <App />
  </StrictMode>
)

root.render(render)
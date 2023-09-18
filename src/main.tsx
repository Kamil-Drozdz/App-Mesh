import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import SideNavbar from './components/SideNavbar'

const rootElement = document.getElementById('root')

if (rootElement) {
  const Root: FC = () => {
    return (
      <div className="w-screen h-screen">
        <SideNavbar />
      </div>
    )
  }

  createRoot(rootElement).render(<Root />)
} else {
  console.error(
    "Element with id 'root' not found. Make sure such an element exists in your HTML.",
  )
}

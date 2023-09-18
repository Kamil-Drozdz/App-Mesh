import React from 'react'

const SideNavbarItem = ({ icon, name, href }) => {
  const pathname = window.location.pathname
  const isActive = pathname === href
  console.log(pathname, href)
  return (
    <a
      href={href}
      className={`${
        isActive && 'bg-[#161d31]'
      } flex items-center space-x-2 my-1 px-4 py-2.5 hover:bg-[#161d31]  mx-3 rounded-lg transition-colors duration-150 ease-in-out`}
    >
      {icon} <span>{name}</span>
    </a>
  )
}

export default SideNavbarItem

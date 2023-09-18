import React from 'react'
import {
  AiFillCheckCircle,
  AiOutlineCalendar,
  AiOutlineCreditCard,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineLayout,
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai'
import { BiBox, BiCopy, BiDroplet } from 'react-icons/bi'
import {
  BsArrowRepeat,
  BsBox,
  BsChatLeft,
  BsCheck2Square,
  BsMap,
} from 'react-icons/bs'
import { FaRegDotCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineEnvelope, HiOutlineServerStack } from 'react-icons/hi2'
import { IoDocumentTextOutline } from 'react-icons/io5'
import {
  PiCodesandboxLogoLight,
  PiSquaresFour,
  PiTextTThin,
} from 'react-icons/pi'
import { TbCircleTriangle } from 'react-icons/tb'

import logo from '../assets/logo.webp'
import SideNavbarItem from './SideNavbarItem'

const navItems = [
  {
    title: '',
    items: [{ icon: <AiOutlineHome />, name: 'Dashboard', href: '/dashboard' }],
  },
  {
    title: 'APPS & PAGES',
    items: [
      { icon: <HiOutlineEnvelope />, name: 'Home', href: '/home' },
      { icon: <BsChatLeft />, name: 'Chat', href: '/chat' },
      { icon: <BsCheck2Square />, name: 'Todo', href: '/todo/all' },
      { icon: <AiOutlineCalendar />, name: 'Calendar', href: '/calendar' },
      { icon: <IoDocumentTextOutline />, name: 'Pages', href: '/pages' },
      { icon: <IoDocumentTextOutline />, name: 'Invoice', href: '/invoice' },
      {
        icon: <AiOutlineShoppingCart />,
        name: 'eCommerce',
        href: '/ecommerce',
      },
      { icon: <AiOutlineUser />, name: 'User', href: '/profile' },
    ],
  },
  {
    title: 'USER INTERFACE',
    items: [
      { icon: <PiTextTThin />, name: 'Typography', href: '/typography' },
      { icon: <BiDroplet />, name: 'Colors', href: '/colors' },
      { icon: <AiOutlineEye />, name: 'Feather', href: '/feather' },
      { icon: <AiOutlineCreditCard />, name: 'Cards', href: '/cards' },
      { icon: <BiBox />, name: 'Components', href: '/components' },
      { icon: <AiOutlinePlusCircle />, name: 'Extension', href: '/extension' },
      { icon: <AiOutlineLayout />, name: 'Page Layouts', href: '/layouts' },
    ],
  },
  {
    title: 'FORMS & TABLES',
    items: [
      { icon: <BiCopy />, name: 'Form Elements', href: '/form/elements' },
      { icon: <BsBox />, name: 'Form Layout', href: '/form/layout' },
      {
        icon: <PiCodesandboxLogoLight />,
        name: 'Form Wizard',
        href: '/form/wizard',
      },
      {
        icon: <AiFillCheckCircle />,
        name: 'Form Validations',
        href: '/form/validation',
      },
      {
        icon: <BsArrowRepeat />,
        name: 'Form Repeater',
        href: '/form/repeater',
      },
      { icon: <HiOutlineServerStack />, name: 'Table', href: '/form/table' },
      { icon: <PiSquaresFour />, name: 'DataTables', href: '/form/data' },
    ],
  },
  {
    title: 'CHARTS & MAPS',
    items: [
      { icon: <AiOutlinePieChart />, name: 'Charts', href: '/charts' },
      { icon: <BsMap />, name: 'Google Maps', href: '/maps' },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      { icon: <GiHamburgerMenu />, name: 'Menu Levels', href: '/menu/levels' },
      { icon: <AiOutlineEyeInvisible />, name: 'Disabled Menu', href: '' },
      {
        icon: <IoDocumentTextOutline />,
        name: 'Documentation',
        href: '/menu/documentation',
      },
      {
        icon: <TbCircleTriangle />,
        name: 'Raise Support',
        href: '/menu/support',
      },
    ],
  },
]

const SideNavbar = () => {
  return (
    <nav className="w-72 fixed top-0 left-0 bg-[#283046] text-[#babbbe] overflow-y-auto h-screen">
      <ul className="my-2">
        <li className="flex items-center justify-between space-x-4 px-6">
          <a href="/" className="flex items-center ">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-4" />
            <span className="text-3xl font-semibold">Admin</span>
          </a>
          <FaRegDotCircle />
        </li>
      </ul>
      {navItems.map((group, index) => (
        <div key={index} className="p-2">
          <span className="text-[#5a6071] mt-6 mb-4 mx-6 text-xs font-semibold">
            {group.title}
          </span>
          <ul>
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <SideNavbarItem
                  icon={item.icon}
                  name={item.name}
                  href={item.href}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default SideNavbar

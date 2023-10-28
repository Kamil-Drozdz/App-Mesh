import SideNavbarItem from '../../common/SideNavbarItem';
import logo from '@/assets/logo.webp';
import { NavItems } from '@/data/navigation/navItems';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import useFullScreen from '@/store/FullScreen';
import useMenu from '@/store/Menu';
import { useState } from 'react';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const { isFullScreen } = useFullScreen();
  const { isMenuOpen, toggleMenu } = useMenu();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navItems = NavItems();

  const handleActiveDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <div
        className={`dark:bg-darkBlue bg-lightWhite w-72 ${isMenuOpen ? 'left-0' : '-left-72 lg:left-0'} ${
          isFullScreen ? '!-left-72' : 'left-0 '
        } top-0 z-[11] right-0 transition-all duration-300 ease-out fixed h-screen`}
      >
        <nav
          onMouseEnter={() => {
            if (isCollapsed) {
              setMenuCollapsed(false);
            }
          }}
          onMouseLeave={() => {
            if (!menuCollapsed && isCollapsed) {
              setMenuCollapsed(true);
            }
          }}
          className={`${
            menuCollapsed ? 'w-20' : 'w-72'
          } dark:bg-mediumBlue bg-white transition-all duration-300 ease-out fixed text-gray-500 dark:text-lightGray overflow-y-auto h-full`}
        >
          <ul className='my-2'>
            <li className='flex items-center justify-between space-x-4 px-6'>
              {!menuCollapsed ? (
                <>
                  <Link to={`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`} className='flex items-center '>
                    <img src={logo} alt='Logo' width={32} height={32} className='w-8 h-8 mr-4' />
                    <span className='text-2xl font-semibold'>Admin</span>
                  </Link>

                  <button onClick={() => setIsCollapsed((prev) => !prev)}>
                    {isCollapsed ? <FaRegCircle /> : <FaRegDotCircle />}
                  </button>
                </>
              ) : (
                <img src={logo} alt='Logo' className='w-8 h-8' />
              )}
            </li>
          </ul>
          {navItems.map((group, index) => (
            <div key={index} className='p-2'>
              <p className='text-[#5a6071] mt-6 mb-4 mx-6 text-xs font-semibold truncate'>{group.title}</p>
              <ul>
                {group.items.map((item, indexItem) => (
                  <li key={indexItem}>
                    <SideNavbarItem
                      handleActiveDropdown={handleActiveDropdown}
                      activeDropdown={activeDropdown}
                      icon={item.icon}
                      name={item.name}
                      href={item.href || ''}
                      dropdown={item.dropdown}
                      menuCollapsed={menuCollapsed}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {isMenuOpen && <div className='bg-black opacity-50 fixed inset-0 z-10' onClick={toggleMenu}></div>}
    </>
  );
};

export default SideNavbar;

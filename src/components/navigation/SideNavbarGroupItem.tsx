import useMenu from '@/store/Menu';
import { AiOutlineRight } from 'react-icons/ai';
import { LiaDotCircle } from 'react-icons/lia';
import { Link, useLocation } from 'react-router-dom';

interface DropdownItem {
  name: string;
  href: string;
}

interface SideNavbarGroupItemProps {
  icon: JSX.Element;
  handleActiveDropdown: (name: string) => void;
  activeDropdown: string | null;
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  menuCollapsed: boolean;
}
const SideNavbarGroupItem = ({
  icon,
  handleActiveDropdown,
  activeDropdown,
  name,
  href,
  dropdown,
  menuCollapsed,
}: SideNavbarGroupItemProps) => {
  const open = name === activeDropdown;
  const { toggleMenu } = useMenu();
  const { pathname } = useLocation();
  const isActiveItem = pathname === href;
  const isActiveDropdownItem = dropdown?.some((item) => pathname.startsWith(item.href));

  return (
    <li>
      {dropdown?.length ? (
        <div
          onClick={() => handleActiveDropdown(name)}
          className={`${open && 'bg-lightWhite bg-opacity-70 dark:bg-darkBlue '} ${
            isActiveDropdownItem && 'bg-lightWhite dark:bg-darkBlue'
          } ${
            menuCollapsed ? 'justify-center' : 'justify-between'
          } my-1 mx-3 flex cursor-pointer items-center rounded-lg px-4 py-2.5 transition-colors duration-150 ease-in-out hover:dark:bg-darkBlue focus:dark:bg-darkBlue`}
        >
          <div className='flex items-center justify-center space-x-2'>
            {icon} <p className={`${menuCollapsed ? 'hidden' : ''} `}>{name}</p>
          </div>
          {!!dropdown?.length && (
            <AiOutlineRight
              className={` ${open ? 'rotate-90' : 'rotate-0'} ${
                menuCollapsed ? 'hidden' : 'block'
              } transition-transform duration-300 ease-in-out`}
            />
          )}
        </div>
      ) : (
        <Link
          to={href}
          onClick={toggleMenu}
          className={`${isActiveItem && 'bg-lightWhite dark:bg-darkBlue'} flex items-center ${
            menuCollapsed ? 'justify-center' : 'justify-between'
          } my-1 mx-3 rounded-lg px-4 py-2.5 transition-colors duration-150 ease-in-out hover:bg-gray-200 hover:dark:bg-darkBlue focus:dark:bg-darkBlue`}
        >
          <div className='flex items-center space-x-2 '>
            {icon} <p className={`${menuCollapsed ? 'hidden' : ''}`}>{name}</p>
          </div>
        </Link>
      )}
      <div className={`ease overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        {open
          ? dropdown?.map((item, index) => (
              <Link
                to={item.href}
                onClick={toggleMenu}
                key={index}
                className={`${pathname.startsWith(item.href) ? 'bg-lightWhite dark:bg-darkBlue dark:text-white' : ''} ${
                  menuCollapsed ? 'hidden' : 'flex'
                } m-1 mx-5 items-center justify-between rounded-lg px-4 py-2.5 transition-colors duration-150 ease-in-out hover:bg-gray-200 hover:dark:bg-darkBlue focus:dark:bg-darkBlue`}
              >
                <div className='flex items-center space-x-2'>
                  <LiaDotCircle /> <span>{item.name}</span>
                </div>
              </Link>
            ))
          : null}
      </div>
    </li>
  );
};

export default SideNavbarGroupItem;

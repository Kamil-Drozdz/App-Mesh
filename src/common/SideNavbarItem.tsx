import { AiOutlineRight } from 'react-icons/ai';
import { LiaDotCircle } from 'react-icons/lia';
import { Link } from 'react-router-dom';

interface DropdownItem {
  name: string;
  href: string;
}

interface SideNavbarItemProps {
  icon: JSX.Element;
  handleActiveDropdown: (name: string) => void;
  activeDropdown: string | null;
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  menuCollapsed: boolean;
}
const SideNavbarItem = ({
  icon,
  handleActiveDropdown,
  activeDropdown,
  name,
  href,
  dropdown,
  menuCollapsed,
}: SideNavbarItemProps) => {
  const open = name === activeDropdown;
  const pathname = window.location.pathname;
  const isActiveItem = pathname === href;
  const isActiveDropdownItem = dropdown?.some((item) => pathname.startsWith(item.href));

  return (
    <>
      {dropdown?.length ? (
        <div
          onClick={() => handleActiveDropdown(name)}
          className={`${open && 'dark:bg-darkBlue bg-lightWhite bg-opacity-70'} ${
            isActiveDropdownItem && 'dark:bg-darkBlue bg-lightWhite'
          } ${
            menuCollapsed ? 'justify-center' : 'justify-between'
          } flex items-center my-1 px-4 py-2.5 hover:dark:bg-darkBlue focus:dark:bg-darkBlue mx-3 rounded-lg transition-colors duration-150 ease-in-out cursor-pointer`}
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
          className={`${isActiveItem && 'dark:bg-darkBlue'} flex items-center ${
            menuCollapsed ? 'justify-center' : 'justify-between'
          } my-1 px-4 py-2.5 hover:dark:bg-darkBlue focus:dark:bg-darkBlue mx-3 rounded-lg transition-colors duration-150 ease-in-out`}
        >
          <div className='flex items-center space-x-2 '>
            {icon} <p className={`${menuCollapsed ? 'hidden' : ''}`}>{name}</p>
          </div>
        </Link>
      )}
      <div className={` overflow-hidden transition-all duration-300 ease ${open ? 'max-h-96' : 'max-h-0'}`}>
        {open
          ? dropdown?.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className={`${pathname.startsWith(item.href) ? 'dark:bg-darkBlue bg-lightWhite dark:text-white' : ''} ${
                  menuCollapsed ? 'hidden' : 'flex'
                } items-center justify-between m-1 px-4 py-2.5 hover:dark:bg-darkBlue focus:dark:bg-darkBlue mx-5 rounded-lg transition-colors duration-150 ease-in-out`}
              >
                <div className='flex items-center space-x-2'>
                  <LiaDotCircle /> <span>{item.name}</span>
                </div>
              </Link>
              /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
            ))
          : null}
      </div>
    </>
  );
};

export default SideNavbarItem;

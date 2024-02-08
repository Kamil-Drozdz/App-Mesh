import { Button } from '@/UI/Button';

interface TopNavbarItemProps {
  index: number;
  icon: { icon: JSX.Element; href?: string };
  toggleMenu: (boolean) => void;
}
function TopNavbarItem({ index, icon, toggleMenu }: TopNavbarItemProps) {
  return (
    <li className={`${index === 0 ? 'block lg:hidden' : 'hidden md:block'}`} key={index}>
      {index === 0 ? (
        <Button className='!bg-transparent' onClick={toggleMenu}>
          {icon.icon}
        </Button>
      ) : (
        <a href={icon.href}>{icon.icon}</a>
      )}
    </li>
  );
}

export default TopNavbarItem;

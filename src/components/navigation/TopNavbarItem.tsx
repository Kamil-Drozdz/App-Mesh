import { Button } from '@/UI/Button';

const TopNavbarItem = ({ index, icon, toggleMenu }) => {
  return (
    <li className={`${index === 0 ? 'block lg:hidden' : 'hidden md:block'}`} key={index}>
      {index === 0 ? <Button onClick={toggleMenu}>{icon.icon}</Button> : <a href={icon.href}>{icon.icon}</a>}
    </li>
  );
};

export default TopNavbarItem;

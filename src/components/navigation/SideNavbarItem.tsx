import { useState } from 'react';
import SideNavbarGroupItem from './SideNavbarGroupItem';

const SideNavbarItem = ({ menuCollapsed, group }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleActiveDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <div className='p-2'>
      <p className='mx-6 mt-6 mb-4 truncate text-xs font-semibold text-muted-foreground'>{group.title}</p>
      <ul>
        {group.items.map((item, indexItem) => (
          <SideNavbarGroupItem
            key={indexItem}
            handleActiveDropdown={handleActiveDropdown}
            activeDropdown={activeDropdown}
            icon={item.icon}
            name={item.name}
            href={item.href || ''}
            dropdown={item.dropdown}
            menuCollapsed={menuCollapsed}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideNavbarItem;

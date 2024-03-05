import { useState } from 'react';

function useSideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const onMouseEnter = () => {
    if (isCollapsed) {
      setMenuCollapsed(false);
    }
  };
  const onMouseLeave = () => {
    if (!menuCollapsed && isCollapsed) {
      setMenuCollapsed(true);
    }
  };
  return {
    isCollapsed,
    setIsCollapsed,
    menuCollapsed,
    onMouseEnter,
    onMouseLeave,
  };
}

export default useSideNavbar;

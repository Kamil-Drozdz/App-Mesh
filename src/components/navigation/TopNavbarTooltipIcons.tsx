import CartPopover from '../pages/eCommerce/CartPopover';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import BorderedBadge from '@/common/BorderedBadge';
import { topNavbarIcons } from '@/data/navigation/topNavbarItems';
import { IconSize } from '@/lib/enums/iconSize';
import useProductsStore from '@/store/ProductsStore';
import { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const TopNavbarTooltipIcons = () => {
  const htmlElement = document.documentElement;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cart, removeFromCart } = useProductsStore();

  const handleToggleTheme = () => {
    htmlElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <TooltipProvider>
      {topNavbarIcons.userToolbar.map((item, index) => (
        <div className='cursor-pointer flex items-center' key={index}>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                {index === 2 ? (
                  <PopoverTrigger>
                    <>
                      <li>{item.icon}</li>
                      <div className='relative'>
                        <BorderedBadge count={cart.length} />
                      </div>
                    </>
                  </PopoverTrigger>
                ) : (
                  <li onClick={index === 0 ? handleToggleTheme : undefined}>
                    <a>
                      {isDarkMode ? item.icon.type === BsSun ? <BsMoon size={IconSize.basic} /> : item.icon : item.icon}
                    </a>
                  </li>
                )}
              </TooltipTrigger>
              <TooltipContent className='p-2 bg-black text-white !text-base' sideOffset={12} side='bottom'>
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
            <PopoverContent className='w-auto p-0 z-[52] dark:bg-mediumBlue' sideOffset={22} align='center'>
              {cart.length ? (
                <CartPopover removeFromCart={removeFromCart} cart={cart} />
              ) : (
                <div className='min-w-[200px] h-24 text-center'>Your cart is empty</div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </TooltipProvider>
  );
};

export default TopNavbarTooltipIcons;

import { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import CartPopover from '../pages/eCommerce/CartPopover';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import BorderedBadge from '@/common/BorderedBadge';
import { topNavbarIcons } from '@/data/navigation/topNavbarItems';
import { IconSize } from '@/lib/enums/iconSize';
import useProductsStore from '@/store/ProductsStore';

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
        <div className='flex cursor-pointer items-center' key={index}>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                {index === 2 ? (
                  <PopoverTrigger>
                    <>
                      <li data-testid='cart-icon'>{item.icon}</li>
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
              <TooltipContent
                className='bg-primary p-2 !text-base text-primary-foreground'
                sideOffset={12}
                side='bottom'
              >
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
            <PopoverContent className='z-[52] w-auto bg-secondary p-0' sideOffset={22} align='center'>
              {cart.length ? (
                <CartPopover removeFromCart={removeFromCart} cart={cart} />
              ) : (
                <div className='h-24 min-w-[200px] text-center'>Your cart is empty</div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </TooltipProvider>
  );
};

export default TopNavbarTooltipIcons;

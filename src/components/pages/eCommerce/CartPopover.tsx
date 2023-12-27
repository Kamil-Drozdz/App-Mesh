import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { totalValue } from '@/lib/totalValue';

import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function CartPopover({ cart, removeFromCart }) {
  const totalAmount = totalValue(cart.map((product) => product.price * product.userQuantity));
  return (
    <div className='w-[300px]'>
      <div className='my-2 flex w-full items-center justify-between p-2'>
        <h2 className='font-semibold'>My Cart</h2>
        <p className='rounded-full bg-buttonPrimary bg-opacity-20 py-1 px-2.5 text-primary'>{cart.length} New</p>
      </div>
      <Separator />
      <div data-testid='my-cart' className='max-h-40 overflow-y-auto'>
        {cart.map((item, index) => (
          <div data-testid={`cart-item-${index}`} className='group relative flex flex-col' key={item.id}>
            <div className='flex items-center justify-between space-x-4 p-4 '>
              <img height={48} width={48} className='h-12 w-12' src={item.image} />
              <p className='w-1/2 truncate'>{item.title}</p>
              <p className='text-black dark:text-white'>{item.price * item.userQuantity}$</p>
            </div>
            <Separator />
            <AiOutlineClose
              data-testid={`delete-item-${index}-from-cart`}
              className='absolute right-2 top-2  hidden cursor-pointer hover:text-buttonPrimary group-hover:block'
              onClick={() => removeFromCart(item.id)}
              size={IconSize.basic}
            />
          </div>
        ))}
      </div>
      <Separator />
      <div className='flex w-full justify-between p-4'>
        <p className='font-semibold '>Total :</p>{' '}
        <p className='text-black dark:text-white'>{totalAmount.toFixed(2)}$</p>
      </div>
      <div className='px-4 pb-2'>
        <Button className='w-full !bg-buttonPrimary !text-white'>
          <Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.CHECKOUT}`}>Checkout</Link>
        </Button>
      </div>
    </div>
  );
}

export default CartPopover;

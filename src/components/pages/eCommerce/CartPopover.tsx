import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
import { totalValue } from '@/lib/totalValue';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function CartPopover({ cart, removeFromCart }) {
  const totalAmount = totalValue(cart.map((product) => product.price));
  return (
    <div className='w-[300px]'>
      <div className='p-2 w-full flex justify-between items-center my-2'>
        <h2 className='font-semibold'>My Cart</h2>
        <p className='py-1 px-2.5 bg-violet-500 bg-opacity-20 text-violet-500 rounded-full'>{cart.length} New</p>
      </div>
      <Separator />
      <div className='max-h-40 overflow-y-auto'>
        {cart.map((item) => (
          <div className='flex flex-col relative group' key={item.id}>
            <div className='flex space-x-4 p-4 items-center justify-between '>
              <img height={48} width={48} className='w-12 h-12' src={item.image} />
              <p className='truncate w-1/2'>{item.title}</p>
              <p className='dark:text-white text-black'>{item.price}$</p>
            </div>
            <Separator />
            <AiOutlineClose
              className='absolute hidden group-hover:block  hover:text-violet-500 right-2 top-2 cursor-pointer'
              onClick={() => removeFromCart(item.id)}
              size={IconSize.basic}
            />
          </div>
        ))}
      </div>
      <Separator />
      <div className='w-full flex justify-between p-4'>
        <p className='font-semibold '>Total :</p>{' '}
        <p className='dark:text-white text-black'>{totalAmount.toFixed(2)}$</p>
      </div>
      <div className='px-4 pb-2'>
        <Button className='w-full !text-white !bg-violet-500'>
          <Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.CHECKOUT}`}>Checkout</Link>
        </Button>
      </div>
    </div>
  );
}

export default CartPopover;

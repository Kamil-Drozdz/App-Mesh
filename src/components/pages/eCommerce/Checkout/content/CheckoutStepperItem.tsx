import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { BiHeart, BiSolidMinusSquare, BiSolidPlusSquare } from 'react-icons/bi';

import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { Input } from '@/UI/Input';
import useCheckoutStepperItem from '@/hooks/useCheckoutSteppetItem';
import { ProductProps } from '@/store/ProductsStore';

function CheckoutStepperItem({ product }: { product: ProductProps }) {
  const {
    userQuantity,
    setUserQuantity,
    stars,
    isProductInWishlist,
    handleQuantityChange,
    handleRemoveProductFromCart,
    toggleWishlist,
  } = useCheckoutStepperItem({ product });

  return (
    <div key={product.id}>
      <div className='relative mb-8 grid grid-cols-1 items-center justify-center space-y-3 rounded bg-secondary p-4 md:grid-cols-auto-fit-100'>
        <div className=' flex items-center justify-center rounded-lg bg-white p-2 md:max-w-[90%]'>
          <img
            height={400}
            width={400}
            className='aspect-square max-h-[400px] object-contain'
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className=' h-full space-y-2 md:col-span-2'>
          <p className='w-full text-left font-semibold hover:text-buttonPrimary '>{product?.title}</p>
          <div className='flex text-amber-500'>{stars}</div>
          <div className='flex space-x-2'>
            <p>Available -</p>
            <span className='font-semibold text-green-500'>{product?.quantity}</span>
          </div>
          <p className='w-full truncate break-all'>{product?.description}</p>

          <p className='text-sm text-gray-500'>Delivery by, Wed Apr 25</p>
          <div className='relative w-min '>
            <Button
              variant='empty'
              disabled={userQuantity === 1}
              className=' absolute top-1 left-2 !m-0 h-fit !p-0 disabled:opacity-40'
              onClick={() => setUserQuantity(product.id, userQuantity - 1)}
            >
              <BiSolidMinusSquare className='text-violet-500' size={IconSize.basic} />
            </Button>
            <Input
              type='number'
              className='w-24 text-center'
              min={1}
              max={product?.quantity}
              value={userQuantity}
              onChange={handleQuantityChange}
            />
            <Button
              variant='empty'
              className='absolute top-1 right-2 !m-0  h-fit !p-0 disabled:opacity-40'
              disabled={userQuantity === product?.quantity}
              onClick={() => setUserQuantity(product.id, userQuantity + 1)}
            >
              <BiSolidPlusSquare className='text-violet-500' size={IconSize.basic} />
            </Button>
          </div>
          <p className='text-sm text-green-500'>17% off 4 offers Available</p>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-center justify-center space-y-2'>
          <p className=' font-semibold text-buttonPrimary'>${product?.price * userQuantity}</p>
          <p className='w-fit rounded-lg bg-green-600 bg-opacity-30 px-2 text-green-400'>Free Shipping</p>
          <Button
            onClick={() => toggleWishlist(product)}
            className='w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110'
          >
            {isProductInWishlist(product) ? (
              <AiFillHeart size={IconSize.basic} className='text-red-500' />
            ) : (
              <BiHeart size={IconSize.basic} />
            )}
            <p> Add to Wishlist</p>
          </Button>
          <Button variant='ghost' className='w-full space-x-2' onClick={handleRemoveProductFromCart}>
            <AiOutlineClose size={IconSize.basic} />
            <p> Remove from Cart </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutStepperItem;

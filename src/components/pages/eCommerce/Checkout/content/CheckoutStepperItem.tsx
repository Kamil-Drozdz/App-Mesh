import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { IconSize } from '@/lib/enums/iconSize';
import { starRating } from '@/lib/starRating';
import useProductsStore from '@/store/ProductsStore';
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';

const CheckoutStepperItem = ({ product }) => {
  const { cart, wishlist, addToWishlist, removeFromWishlist, removeFromCart } = useProductsStore();
  const stars = starRating(product.rating.rate);
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);
  const isProductInCart = cart.some((item) => item.id === product.id);

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
            <span className='font-semibold text-green-500'>{product?.rating?.count}</span>
          </div>
          <p className='w-full truncate break-all'>{product?.description}</p>
          <p className='text-sm text-gray-500'>Delivery by, Wed Apr 25</p>
          <p className='text-sm text-green-500'>17% off 4 offers Available</p>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-center justify-center space-y-2'>
          <p className=' font-semibold text-buttonPrimary'>${product?.price}</p>
          <p className='w-fit rounded-lg bg-green-600 bg-opacity-30 px-2 text-green-400'>Free Shipping</p>
          <Button
            onClick={() => {
              if (isProductInWishlist) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
            className='w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110'
          >
            {isProductInWishlist ? (
              <AiFillHeart size={IconSize.basic} className='text-red-500' />
            ) : (
              <BiHeart size={IconSize.basic} />
            )}
            <p> Add to Wishlist</p>
          </Button>
          <Button
            variant='ghost'
            className='w-full space-x-2'
            onClick={() => {
              if (isProductInCart) {
                removeFromCart(product.id);
              }
            }}
          >
            <AiOutlineClose size={IconSize.basic} />
            <p> Remove from Cart </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepperItem;

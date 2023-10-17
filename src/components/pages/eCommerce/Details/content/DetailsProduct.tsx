import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import Skeleton from '@/UI/skeleton/Skeleton';
import useFetch from '@/hooks/useFetch';
import { IconSize } from '@/lib/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
import { starRating } from '@/lib/starRating';
import useProductsStore, { ProductProps } from '@/store/ProductsStore';
import { AiFillHeart } from 'react-icons/ai';
import { BiHeart, BiTimeFive } from 'react-icons/bi';
import { BsShield } from 'react-icons/bs';
import { FiDollarSign, FiShare2, FiShoppingCart } from 'react-icons/fi';
import { PiMedalBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

interface FetchProps {
  data: ProductProps | null;
  loading: boolean;
  error: { message: string | null };
}
const DetailsProduct = ({ productID }) => {
  if (typeof productID === 'undefined') {
    productID = 2;
  }

  // Aded the type annotation
  const {
    data: product,
    loading,
    error,
  }: FetchProps = useFetch(`${import.meta.env.VITE_BASE_FAKESTOREAPI_URL}/products/${productID}`) as FetchProps;
  const stars = product ? starRating(product?.rating?.rate) : null;
  const { addToWishlist, cart, addToCart, removeFromWishlist, wishlist } = useProductsStore();
  const isProductInWishlist = wishlist.some((item) => item.id === product?.id);
  const isProductInCart = cart.some((item) => item.id === product?.id);

  if (loading) {
    return <Skeleton className='flex' SkeletonLength={1} />;
  }

  if (error.message) {
    return <div>Error: {error.message}</div>;
  }

  if (product === null) {
    return <div>No product data available</div>;
  }

  return (
    <>
      <div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg m-4 shadow-md dark:shadow-black shadow-lightGray flex md:flex-row flex-col items-start'>
        <div className='md:w-1/2 h-full flex justify-center items-center'>
          <div className='h-full text-center p-2 bg-white rounded-lg justify-center flex items-center'>
            <img className=' object-contain aspect-video' src={product?.image} alt={product?.title} />
          </div>
        </div>
        <div className='space-y-3 md:ml-4 md:w-1/2 py-6'>
          <p className='w-full text-left font-semibold hover:text-violet-500 '>{product?.title}</p>
          <div className='flex items-center space-x-2'>
            <p className=' font-semibold text-violet-500'>${product?.price}</p>
            <Separator orientation='vertical' className=' h-full min-h-[1rem]' />
            <div className='flex text-amber-500'>{stars}</div>
          </div>
          <div className='flex space-x-2'>
            <p>Available -</p>
            <span className='text-green-500 font-semibold'>{product?.rating?.count}</span>
          </div>
          <p className=' w-full break-all'>{product?.description}</p>
          <div className='font-semibold flex items-center space-x-2'>
            <FiShoppingCart size={IconSize.basic} />
            <p>Free Shipping</p>
          </div>
          <div className='font-semibold flex items-center space-x-2'>
            <FiDollarSign size={IconSize.basic} />
            <p>EMI options available</p>
          </div>
          <Separator className='!my-6' />
          <div className='space-x-2 flex items-center'>
            <Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.CHECKOUT}`}>
              <Button
                onClick={() => {
                  if (!isProductInCart) {
                    addToCart(product);
                  }
                }}
                className='!bg-violet-500 hover:!bg-violet-400 !text-white space-x-2'
              >
                <FiShoppingCart />
                <p> View in Cart</p>
              </Button>
            </Link>
            <Button
              onClick={() => {
                if (isProductInWishlist) {
                  removeFromWishlist(product?.id);
                } else {
                  addToWishlist(product);
                }
              }}
              variant='ghost'
              className='space-x-2'
            >
              {isProductInWishlist ? (
                <AiFillHeart size={IconSize.basic} className='text-red-500' />
              ) : (
                <BiHeart size={IconSize.basic} />
              )}
              <p> Add to Wishlist</p>
            </Button>
            <Button variant='ghost'>
              <FiShare2 />
            </Button>
          </div>
        </div>
      </div>
      <div className='flex py-16'>
        <div className='flex flex-col w-full text-center space-y-3'>
          <PiMedalBold size={IconSize.medium} className='w-full text-violet-500 ' />
          <p className='text-2xl font-semibold'>100% Orginal</p>
          <span className='text-sm text-gray-400'>
            Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.
          </span>
        </div>
        <div className='flex flex-col w-full text-center space-y-3'>
          <BiTimeFive size={IconSize.medium} className='w-full text-violet-500' />
          <p className='text-2xl font-semibold'>10 Day Replacement</p>
          <span className='text-sm text-gray-400'>
            Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.
          </span>
        </div>
        <div className='flex flex-col w-full text-center space-y-3'>
          <BsShield size={IconSize.medium} className='w-full text-violet-500' />
          <p className='text-2xl font-semibold'>1 Year Warranty</p>
          <span className='text-sm text-gray-400'>
            Cotton candy gingerbread cake I love sugar plum I love sweet croissant.
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;

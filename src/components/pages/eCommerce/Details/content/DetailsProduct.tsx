import { AiFillHeart } from 'react-icons/ai';
import { BiHeart, BiTimeFive } from 'react-icons/bi';
import { BsShield } from 'react-icons/bs';
import { FiCheck, FiShare2, FiShoppingCart } from 'react-icons/fi';
import { PiMedalBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import Skeleton from '@/UI/skeleton/Skeleton';
import { IconSize } from '@/lib/enums/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { ErrorComponent } from '@/common/ErrrorComponent';
import useDetailsProduct from '@/hooks/useDetailsProduct';

function DetailsProduct({ productID }) {
  const {
    product,
    loading,
    error,
    stars,
    isCopiedToClipboard,
    handleShare,
    handleAddToCart,
    isProductInWishlist,
    toggleWishlist,
  } = useDetailsProduct({ productID });

  if (loading) {
    return <Skeleton className='flex' SkeletonLength={1} />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (product === null) {
    return <div>No product data available</div>;
  }

  return (
    <>
      <div className='relative m-4 flex flex-col items-start rounded-lg bg-secondary p-4 shadow-md dark:shadow-black md:flex-row'>
        <div className='flex  items-center justify-center py-2 md:w-1/2'>
          <div className='flex items-center justify-center rounded-lg bg-white p-2 text-center'>
            <img
              height={600}
              width={600}
              className=' aspect-video object-contain'
              src={product?.image}
              alt={product?.title}
            />
          </div>
        </div>
        <div className='space-y-2 py-6 md:ml-4 md:w-1/2'>
          <p className='w-full text-left font-semibold hover:text-buttonPrimary '>{product?.title}</p>
          <div className='flex items-center space-x-2'>
            <p className=' font-semibold text-buttonPrimary'>${product?.price}</p>
            <Separator orientation='vertical' className=' h-full min-h-[1rem]' />
            <div className='flex text-amber-500'>{stars}</div>
          </div>
          <div className='flex space-x-2'>
            <p>Available -</p>
            <span className='font-semibold text-green-500'>{product?.quantity}</span>
          </div>
          <p className=' w-full break-all'>{product?.description}</p>
          <div className='flex items-center space-x-2 font-semibold text-muted-foreground'>
            <FiShoppingCart className='text-primary' size={IconSize.basic} />
            <p>Free Shipping</p>
          </div>
          <Separator className='!my-6' />
          <div className='flex items-center space-x-2'>
            <Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.CHECKOUT}`}>
              <Button
                onClick={() => handleAddToCart(product)}
                className='space-x-2 !bg-buttonPrimary px-2 !text-white hover:brightness-110 md:px-4'
              >
                <FiShoppingCart size={IconSize.basic} />
                <p> View in Cart</p>
              </Button>
            </Link>
            <Button onClick={() => toggleWishlist(product)} variant='ghost' className='space-x-2 px-2 md:px-4'>
              {isProductInWishlist(product) ? (
                <AiFillHeart size={IconSize.basic} className='text-red-500' />
              ) : (
                <BiHeart size={IconSize.basic} />
              )}
              <p> Add to Wishlist</p>
            </Button>
            <Button className={`${isCopiedToClipboard && 'bg-green-500'}`} onClick={handleShare} variant='ghost'>
              {isCopiedToClipboard ? <FiCheck /> : <FiShare2 />}
            </Button>
          </div>
        </div>
      </div>
      <div className='flex py-16'>
        <div className='flex w-full flex-col space-y-3 text-center'>
          <PiMedalBold size={IconSize.medium} className='w-full text-buttonPrimary ' />
          <p className='text-2xl font-semibold'>100% Orginal</p>
          <span className='text-sm text-muted-foreground'>Products are from authorized suppliers only.</span>
        </div>
        <div className='flex w-full flex-col space-y-3 text-center'>
          <BiTimeFive size={IconSize.medium} className='w-full text-buttonPrimary' />
          <p className='text-2xl font-semibold'>10 Day Replacement</p>
          <span className='text-sm text-muted-foreground'>
            You can return the item within 10 days without giving any reasons!
          </span>
        </div>
        <div className='flex w-full flex-col space-y-3 text-center'>
          <BsShield size={IconSize.medium} className='w-full text-buttonPrimary' />
          <p className='text-2xl font-semibold'>1 Year Warranty</p>
          <span className='text-sm text-muted-foreground'>You have a one-year warranty on items purchased from us</span>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;

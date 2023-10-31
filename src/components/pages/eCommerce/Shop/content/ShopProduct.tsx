import { Button } from '@/UI/Button';
import { IconSize } from '@/lib/enums/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { starRating } from '@/lib/starRating';
import useProductsStore, { ProductProps } from '@/store/ProductsStore';
import { AiFillHeart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface ShopProductProps {
  product: ProductProps;
}
const ShopProduct = ({ product }: ShopProductProps) => {
  const stars = starRating(product.rating.rate);
  const { addToWishlist, cart, addToCart, removeFromCart, removeFromWishlist, wishlist } = useProductsStore();
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);
  const isProductInCart = cart.some((item) => item.id === product.id);
  return (
    <div className='m-4'>
      <div className='relative flex flex-col items-center justify-center space-y-3 rounded-t-lg bg-white p-4 dark:bg-mediumBlue'>
        <Link
          to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`}
          className='h-32 w-32 rounded-lg bg-white p-2'
        >
          <img className='aspect-square object-contain' src={product?.image} alt={product?.title} />
        </Link>
        <div className='flex w-full justify-between'>
          <div className='flex text-amber-500'>{stars}</div>
          <p className=' font-semibold text-gray-400'>${product.price}</p>
        </div>
        <Link className='w-full' to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`}>
          <p className='min-h-[100px] w-full text-left font-semibold hover:text-violet-500 '>{product?.title}</p>
        </Link>
        <p className='w-full truncate break-all'>{product?.description}</p>
      </div>
      <div className=' flex w-full'>
        <Button
          onClick={() => {
            if (isProductInWishlist) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          }}
          variant='ghost'
          className='w-full space-x-2 rounded-none !rounded-bl-lg border border-t-0 border-gray-600'
        >
          {isProductInWishlist ? (
            <AiFillHeart size={IconSize.basic} className='text-red-500' />
          ) : (
            <BiHeart size={IconSize.basic} />
          )}
          <p> Add to Wishlist</p>
        </Button>
        <Button
          onClick={() => {
            if (isProductInCart) {
              removeFromCart(product.id);
            } else {
              addToCart(product);
            }
          }}
          className='w-full space-x-2 rounded-none !rounded-br-lg !bg-violet-500 !text-white hover:!bg-violet-400'
        >
          <FiShoppingCart size={IconSize.basic} />
          <p> {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}</p>
        </Button>
      </div>
    </div>
  );
};

export default ShopProduct;

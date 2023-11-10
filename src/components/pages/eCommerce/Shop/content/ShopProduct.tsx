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
      <div className='relative flex flex-col items-center justify-center space-y-3 rounded-t-lg bg-secondary p-4'>
        <Link
          to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`}
          className=' flex items-center justify-center rounded-lg !bg-white p-2 md:max-w-[90%]'
        >
          <img
            height={400}
            width={400}
            className='aspect-square max-h-[400px] object-contain'
            src={product?.image}
            alt={product?.title}
          />
        </Link>
        <div className='flex w-full justify-between'>
          <div className='flex text-amber-500'>{stars}</div>
          <p className='font-semibold text-muted-foreground'>${product.price}</p>
        </div>
        <Link className='w-full' to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`}>
          <p className='hover:text-buttonPrimary min-h-[100px] w-full text-left font-semibold '>{product?.title}</p>
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
          variant='empty'
          className='w-full space-x-2 rounded-none rounded-bl-md bg-secondary hover:bg-secondary/30 '
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
          className='!bg-buttonPrimary w-full space-x-2 rounded-none !rounded-br-lg !text-white hover:brightness-110'
        >
          <FiShoppingCart size={IconSize.basic} />
          <p> {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}</p>
        </Button>
      </div>
    </div>
  );
};

export default ShopProduct;

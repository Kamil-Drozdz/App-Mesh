import { Button } from '@/UI/Button';
import { IconSize } from '@/lib/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
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
	const isProductInWishlist = wishlist.some(item => item.id === product.id);
	const isProductInCart = cart.some(item => item.id === product.id);
	return (
		<div className='m-4'>
			<div className='relative dark:bg-mediumBlue bg-white p-4 rounded-t-lg space-y-3 flex flex-col items-center justify-center'>
				<Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`} className='w-34 h-34 p-2 bg-white rounded-lg'>
					<img className=' object-contain aspect-video' src={product?.image} alt={product?.title} />
				</Link>
				<div className='flex justify-between w-full'>
					<div className='flex text-amber-500'>{stars}</div>
					<p className=' font-semibold text-gray-400'>${product.price}</p>
				</div>
				<Link className='w-full' to={`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/${product.id}`}>
					<p className='w-full min-h-[100px] text-left font-semibold hover:text-violet-500 '>{product?.title}</p>
				</Link>
				<p className='truncate w-full break-all'>{product?.description}</p>
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
					className='space-x-2 w-full border border-t-0 border-gray-600 rounded-none !rounded-bl-lg'>
					{isProductInWishlist ? <AiFillHeart size={IconSize.basic} className='text-red-500' /> : <BiHeart size={IconSize.basic} />}
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
					className='!bg-violet-500 w-full hover:!bg-violet-400 rounded-none !rounded-br-lg !text-white space-x-2'>
					<FiShoppingCart size={IconSize.basic} />
					<p> {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}</p>
				</Button>
			</div>
		</div>
	);
};

export default ShopProduct;

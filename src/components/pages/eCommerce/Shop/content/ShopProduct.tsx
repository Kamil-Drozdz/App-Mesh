import { ProductProps } from './ShopProducts';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface ShopProductProps {
	product: ProductProps;
}
const ShopProduct = ({ product }: ShopProductProps) => {
	const stars: JSX.Element[] = [];
	for (let i = 0; i < 5; i++) {
		if (i < Math.round(product.rating.rate)) {
			stars.push(<AiFillStar key={i} />);
		} else {
			stars.push(<AiOutlineStar key={i} />);
		}
	}
	return (
		<div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3 m-4 shadow-md dark:shadow-black shadow-lightGray flex flex-col items-center justify-center'>
			<Link to={`/ecommerce/details/${product.id}`} className='w-34 h-34 p-2 bg-white rounded-lg'>
				<img className='w-32 h-32 object-contain ' src={product?.image} alt={product?.title} />
			</Link>
			<div className='flex justify-between w-full'>
				<div className='flex text-amber-500'>{stars}</div>
				<p className=' font-semibold text-gray-400'>${product.price}</p>
			</div>
			<Link className='w-full' to={`/ecommerce/details/${product.id}`}>
				<p className='w-full text-left font-semibold hover:text-violet-500 '>{product?.title}</p>
			</Link>
			<p className='truncate hover:overflow-visible w-full hover:whitespace-pre-wrap  break-all'>{product?.description}</p>
		</div>
	);
};

export default ShopProduct;

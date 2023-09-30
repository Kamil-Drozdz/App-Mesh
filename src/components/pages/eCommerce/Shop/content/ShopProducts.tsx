import ShopProduct from './ShopProduct';
import { useEffect, useState } from 'react';

export interface ProductProps {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	rating: {
		rate: number;
	};
	stars: JSX.Element[];
}
const ShopProducts = () => {
	const [products, setProducts] = useState<ProductProps[]>([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProducts(json));
	}, []);

	return (
		<div className='grid grid-cols-3 '>
			{products.map(product => (
				<ShopProduct key={product.id} product={product} />
			))}
		</div>
	);
};

export default ShopProducts;

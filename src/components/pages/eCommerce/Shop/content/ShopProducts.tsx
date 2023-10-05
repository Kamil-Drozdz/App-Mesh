import ShopProduct from './ShopProduct';
import { Input } from '@/UI/Input';
import Skeleton from '@/UI/skeleton/Skeleton';
import noData from '@/assets/no-data.svg';
import useFetch from '@/hooks/useFetch';
import { IconSize } from '@/lib/entities/iconSize';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const ShopProducts = () => {
	const [search, setSearch] = useState('');
	const { data: products, loading, error }: any = useFetch('https://fakestoreapi.com/products');
	const filteredProducts = products?.filter(product => product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()));

	if (loading) {
		return <Skeleton className='grid grid-cols-auto-fill-100 md:grid-cols-3 xl:grid-cols-4' SkeletonLength={12} />;
	}

	if (error) {
		return <div>Error: {error?.message}</div>;
	}
	return (
		<>
			<div className='relative m-4'>
				<BiSearch size={IconSize.basic} className='absolute -translate-y-1/2 top-1/2 left-2' /> <Input value={search} onChange={e => setSearch(e.target.value)} className='pl-8 w-full h-9' placeholder='Search' />
			</div>
			<div>
				{filteredProducts?.length ? (
					<div className='grid grid-cols-auto-fit-100 md:grid-cols-3 xl:grid-cols-4 '>
						{filteredProducts?.map(product => (
							<ShopProduct key={product.id} product={product} />
						))}
					</div>
				) : (
					<div className='w-full h-full min-h-[70vh] flex justify-center items-center flex-col space-y-4'>
						<img className='max-w-[300px]' src={noData} alt='no data image' />
						<div>Ups we dont have what you looking for check other item names </div>
					</div>
				)}
			</div>
		</>
	);
};

export default ShopProducts;

import { useState } from 'react';

import ShopProduct from './ShopProduct';
import Skeleton from '@/UI/skeleton/Skeleton';
import noData from '@/assets/no-data.svg';
import { SearchInput } from '@/common/SearchInput';
import { ProductProps } from '@/store/ProductsStore';
import { ErrorComponent } from '@/common/ErrrorComponent';
import useFirebaseCachedData from '@/hooks/reusable/useFirebaseCachedData';
import { Collections } from '@/lib/enums/collections';

function ShopProducts() {
  const [search, setSearch] = useState('');

  const { data: products, loading, error } = useFirebaseCachedData<ProductProps[]>(Collections.products);

  const filteredProducts = products
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (loading) {
    return <Skeleton className='grid grid-cols-auto-fill-100 p-4 md:grid-cols-3 xl:grid-cols-4' SkeletonLength={12} />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <>
      <SearchInput search={search} setSearch={setSearch} />
      {filteredProducts?.length ? (
        <div data-testid='shop-items' className='grid grid-cols-auto-fit-100 md:grid-cols-3 xl:grid-cols-4 '>
          {filteredProducts?.map((product) => <ShopProduct key={product.id} product={product} />)}
        </div>
      ) : (
        <div className='flex h-full min-h-[70vh] w-full flex-col items-center justify-center space-y-4'>
          <img height={300} width={300} className='max-w-[300px]' src={noData} alt='no data image' />
          <div>Ups we dont have what you looking for check other item names </div>
        </div>
      )}
    </>
  );
}

export default ShopProducts;

import ShopProduct from './ShopProduct';
import Skeleton from '@/UI/skeleton/Skeleton';
import noData from '@/assets/no-data.svg';
import useFetch from '@/hooks/useFetch';
import useSearch from '@/hooks/useSearch';
import { ProductProps } from '@/store/ProductsStore';

interface FetchProps {
  data: ProductProps[] | null;
  loading: boolean;
  error: { message: string | null };
}
const ShopProducts = () => {
  const { search, SearchInput } = useSearch();
  const {
    data: products,
    loading,
    error,
  }: FetchProps = useFetch(`${import.meta.env.VITE_BASE_FAKESTOREAPI_URL}/products`);
  const filteredProducts = products
    ? (products as ProductProps[]).filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (loading) {
    return <Skeleton className='grid grid-cols-auto-fill-100 p-4 md:grid-cols-3 xl:grid-cols-4' SkeletonLength={12} />;
  }

  if (error.message) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <SearchInput />
      {filteredProducts?.length ? (
        <div className='grid grid-cols-auto-fit-100 md:grid-cols-3 xl:grid-cols-4 '>
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
};

export default ShopProducts;

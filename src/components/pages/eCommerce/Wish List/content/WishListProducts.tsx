import ShopProduct from '../../Shop/content/ShopProduct';
import noData from '@/assets/no-data.svg';
import useProductsStore from '@/store/ProductsStore';

const WishListProducts = () => {
  const { wishlist } = useProductsStore();

  return (
    <>
      {wishlist.length ? (
        <div className='grid grid-cols-auto-fit-100 md:grid-cols-3 xl:grid-cols-4 '>
          {wishlist?.map((wishlistProduct) => <ShopProduct product={wishlistProduct} />)}
        </div>
      ) : (
        <div className='flex h-full min-h-[70vh] w-full flex-col items-center justify-center space-y-4'>
          <img height={300} width={300} className='max-w-[300px]' src={noData} alt='no data image' />
          <div>ups you dont have any items on wishlist maybe its good time to change it? </div>
        </div>
      )}
    </>
  );
};

export default WishListProducts;

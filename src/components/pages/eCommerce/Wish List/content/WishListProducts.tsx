import ShopProduct from '../../Shop/content/ShopProduct';
import noData from '@/assets/no-data.svg';
import useProductsStore from '@/store/ProductsStore';

const WishListProducts = () => {
  const { wishlist } = useProductsStore();

  return (
    <>
      {wishlist.length ? (
        <div className='grid grid-cols-auto-fit-100 md:grid-cols-3 xl:grid-cols-4 '>
          {wishlist?.map((wishlistProduct) => (
            <ShopProduct product={wishlistProduct} />
          ))}
        </div>
      ) : (
        <div className='w-full h-full min-h-[70vh] flex justify-center items-center flex-col space-y-4'>
          <img className='max-w-[300px]' src={noData} alt='no data image' />
          <div>ups you dont have any items on wishlist maybe its good time to change it? </div>
        </div>
      )}
    </>
  );
};

export default WishListProducts;

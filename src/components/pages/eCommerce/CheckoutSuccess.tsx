import { useNavigate } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Button } from '@/UI/Button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { totalValue } from '@/lib/totalValue';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const { getItem, removeItem } = useLocalStorage('cart');
  const purchasedItems = getItem();

  const handleReturnToShop = () => {
    navigate('/ecommerce/shop');
    removeItem();
  };
  return (
    <div className=' flex min-h-screen w-full flex-col items-center justify-center space-y-2 bg-background text-foreground p-6 md:pt-0'>
      <BsFillCheckCircleFill className='h-10 w-10 text-green-500' />
      <h2>Thanks for your order</h2>
      <p>You have just completed your payment. Below you can see what you have purchased:</p>
      <ul className='!mt-6 md:w-1/2'>
        {purchasedItems &&
          purchasedItems.map((product) => (
            <div key={product?.id}>
              <div className='relative mb-8 grid grid-cols-1 items-center justify-center space-y-3 rounded bg-secondary p-4 md:grid-cols-auto-fit-100'>
                <div className=' flex items-center justify-center rounded-lg bg-white p-2 md:max-w-[90%]'>
                  <img
                    height={400}
                    width={400}
                    className='aspect-square max-h-[400px] object-contain'
                    src={product?.image}
                    alt={product?.title}
                  />
                </div>
                <div className='flex h-full flex-col items-center justify-start space-y-2 md:col-span-2'>
                  <p className='w-full text-left font-semibold hover:text-buttonPrimary '>{product?.title}</p>
                  <p className='w-full break-all'>{product?.description}</p>
                </div>
              </div>
            </div>
          ))}
        <div className='flex w-full items-center justify-center'>
          Total amount:
          <strong className='ml-2'>{totalValue(purchasedItems.map((product) => product?.price)).toFixed(2)}$</strong>
        </div>
      </ul>
      <Button variant='secondary' onClick={handleReturnToShop}>
        Return to shop
      </Button>
    </div>
  );
};

export default CheckoutSuccess;

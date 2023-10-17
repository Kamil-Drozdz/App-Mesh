import { Button } from '@/UI/Button';

const CheckoutAdressOption = ({ formData, setActiveStep, errors }) => {
  return (
    <div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3 h-fit'>
      <div>
        <h2 className='text-lg font-semibold'>{formData.fullName}</h2>
        <div className='text-gray-400 space-y-2'>
          <p>{formData.address}</p>
          <p>{formData.city}</p>
          <p>{formData.state}</p>
          <p>{formData.zipCode}</p>
          <p>{formData.phone}</p>
        </div>
      </div>
      <Button
        onClick={() => setActiveStep('Payment')}
        disabled={!Object.keys(errors).length}
        className='!bg-violet-500 disabled:opacity-20 hover:!bg-violet-400 !text-white space-x-2 w-full'
      >
        Deliver to this Adress
      </Button>
    </div>
  );
};

export default CheckoutAdressOption;

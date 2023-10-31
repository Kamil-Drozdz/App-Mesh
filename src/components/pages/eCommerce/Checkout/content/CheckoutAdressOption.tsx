import { Button } from '@/UI/Button';

const CheckoutAdressOption = ({ formData, setActiveStep, errors }) => {
  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-white p-4 dark:bg-mediumBlue'>
      <div>
        <h2 className='text-lg font-semibold'>{formData.fullName}</h2>
        <div className='space-y-2 text-gray-400'>
          <p>{formData.address}</p>
          <p>{formData.city}</p>
          <p>{formData.state}</p>
          <p>{formData.zipCode}</p>
          <p>{formData.phone}</p>
        </div>
      </div>
      <Button
        disabled={!!Object.keys(errors).length}
        onClick={() => setActiveStep('Payment')}
        className='w-full space-x-2 !bg-violet-500 !text-white hover:!bg-violet-400 disabled:opacity-20'
      >
        Deliver to this Adress
      </Button>
    </div>
  );
};

export default CheckoutAdressOption;

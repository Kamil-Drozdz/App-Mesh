import { Button } from '@/UI/Button';

function CheckoutAdressOption({ formData, setActiveStep, errors }) {
  return (
    <div className='relative h-fit space-y-3 rounded-lg bg-secondary p-4'>
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
        onClick={() => setActiveStep(3)}
        className='w-full space-x-2 !bg-buttonPrimary !text-white hover:brightness-110 disabled:opacity-20'
      >
        Deliver to this Adress
      </Button>
    </div>
  );
}

export default CheckoutAdressOption;

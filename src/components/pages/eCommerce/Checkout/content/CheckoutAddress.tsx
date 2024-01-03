import { Button } from '@/UI/Button';
import InputWithLabel from '@/common/InputWithLabel';
import { formFields } from '@/data/pages/ecommerce/formFields';
import { handleEnterDown } from '@/lib/handleEnterDown';
import { validateField } from '@/lib/validateField';
import { addressSchema } from '@/schema/addressSchema';

const CheckoutAddress = ({ formData, setFormData, errors, setErrors }) => {
  const handleCheckoutAdress = () => {
    const isCheckoutAdressValid = validateField(addressSchema, formData, setErrors);
    if (isCheckoutAdressValid) {
      console.log('Checked');
      // TODO
    }
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  return (
    <div className='relative space-y-3 rounded-lg bg-secondary  p-4 '>
      <h2 className='text-xl font-semibold'>Add New Address</h2>
      <p className='text-gray-500'>Be sure to check "Deliver to this address" when you have finished</p>
      <div className='flex w-full flex-wrap gap-4'>
        {formFields.map((fieldData) => (
          <div className='max-w-[45%] basis-1/2' key={fieldData.field}>
            <InputWithLabel
              id={fieldData.field}
              value={formData[fieldData.field]}
              onChange={(e) => handleChange(e, fieldData.field)}
              label={fieldData.label}
              onKeyDown={(e) => handleEnterDown(e, handleCheckoutAdress)}
              type={fieldData.type}
            />
            {errors[fieldData.field] && <p className='text-sm text-red-500'>{errors[fieldData.field]}</p>}
          </div>
        ))}
      </div>
      <Button className='!bg-buttonPrimary !text-white hover:brightness-110' onClick={handleCheckoutAdress}>
        Save and Deliver here
      </Button>
    </div>
  );
};

export default CheckoutAddress;

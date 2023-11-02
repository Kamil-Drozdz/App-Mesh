import { Button } from '@/UI/Button';
import InputWithLabel from '@/common/InputWithLabel';
import { formFields } from '@/data/pages/ecommerce/formFields';
import { handleEnterDown } from '@/lib/handleEnterDown';
import { validateField } from '@/lib/validateField';
import { z } from 'zod';

const CheckoutAddress = ({ formData, setFormData, errors, setErrors }) => {
  const addressSchema = z.object({
    fullName: z.string().nonempty({ message: "Full Name can't be empty" }),
    address: z.string().nonempty({ message: "Address can't be empty" }),
    city: z.string().nonempty({ message: "City can't be empty" }),
    state: z.string().nonempty({ message: "State can't be empty" }),
    zipCode: z.string().refine((value) => /^\d{5}$/.test(value), {
      message: 'Zip Code must be a 5-digit number',
    }),
    phone: z.string().refine((value) => /^\d{9}$/.test(value), {
      message: 'Phone number must be a 9-digit number',
    }),
  });
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
    <div className='relative space-y-3 rounded-lg bg-white p-4 dark:bg-mediumBlue'>
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
      <Button className='!bg-violet-500 !text-white hover:!bg-violet-400' onClick={handleCheckoutAdress}>
        Save and Deliver here
      </Button>
    </div>
  );
};

export default CheckoutAddress;

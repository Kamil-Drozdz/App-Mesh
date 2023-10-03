import { Button } from '@/UI/Button';
import InputWithLabel from '@/common/InputWithLabel';
import { formFields } from '@/data/pages/ecommerce/formFields';
import { useState } from 'react';

const CheckoutAddress = ({ formData, setFormData }) => {
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (formData.fullName.trim() === '') {
			newErrors.fullName = 'Full Name is required';
		}

		if (formData.address.trim() === '') {
			newErrors.address = 'Address is required';
		}

		if (formData.city.trim() === '') {
			newErrors.city = 'City is required';
		}

		if (formData.state.trim() === '') {
			newErrors.state = 'State is required';
		}

		if (!/^\d{5}$/.test(formData.zipCode.trim())) {
			newErrors.zipCode = 'Zip Code must be a 5-digit number';
		}

		if (!/^\d{9}$/.test(formData.phone.trim())) {
			newErrors.phone = 'Phone number must be a 9-digit number';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
		setFormData({ ...formData, [field]: e.target.value });
	};

	return (
		<div className='relative dark:bg-mediumBlue bg-white p-4 rounded-lg space-y-3'>
			<h2 className='text-xl font-semibold'>Add New Address</h2>
			<p className='text-gray-500'>Be sure to check "Deliver to this address" when you have finished</p>
			<div className='flex w-full flex-wrap gap-4'>
				{formFields.map(fieldData => (
					<div className='basis-1/2 max-w-[45%]' key={fieldData.field}>
						<InputWithLabel id={fieldData.field} value={formData[fieldData.field]} onChange={e => handleChange(e, fieldData.field)} label={fieldData.label} type={fieldData.type} />
						{errors[fieldData.field] && <p className='text-red-500 text-sm'>{errors[fieldData.field]}</p>}
					</div>
				))}
			</div>
			<Button
				className='!bg-violet-500 hover:!bg-violet-400 !text-white'
				onClick={() => {
					if (validateForm()) {
						// TODO
					}
				}}>
				Save and Deliver here
			</Button>
		</div>
	);
};

export default CheckoutAddress;

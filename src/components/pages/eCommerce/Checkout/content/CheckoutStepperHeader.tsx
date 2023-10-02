import { stepperHeader } from '@/data/pages/ecommerce/dataCheckout';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CheckoutStepperHeader = ({ setActiveStep, activeStep }) => {
	return (
		<div className='flex space-x-2'>
			{stepperHeader.map((item, index) => (
				<div onClick={() => setActiveStep(item.name)} key={index} className='flex items-center space-x-4'>
					<div className='flex items-center space-x-4'>
						<div className={`${activeStep === item.name ? 'bg-violet-500 ' : 'bg-gray-800'} p-2 rounded`}>{item.icon}</div>
						<div className='flex flex-col  justify-center leading-none'>
							<p className={`${activeStep === item.name ? 'text-violet-500' : 'text-white'} `}>{item.name}</p>
							<span className='text-sm text-gray-500'>{item.description}</span>
						</div>
					</div>
					{index !== stepperHeader.length - 1 && <MdOutlineKeyboardArrowRight />}
				</div>
			))}
		</div>
	);
};

export default CheckoutStepperHeader;

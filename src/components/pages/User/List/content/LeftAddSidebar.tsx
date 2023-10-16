import { plans, roles } from './UserFilter';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/UI/Select';
import InputWithLabel from '@/common/InputWithLabel';
import { createUser } from '@/lib/createUser';
import { generateRandomPassword } from '@/lib/generateRandomPassowrd';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface FormDataProps {
	password: string | number;
	displayName: string;
	email: string;
	role: string;
	plan: string;
	emailVerified: string;
}

const initialState = { password: generateRandomPassword(12), displayName: '', email: '', role: '', plan: '', emailVerified: 'inactive' };
const LeftAddSidebar = ({ isOpen, setIsOpen }) => {
	const [formData, setFormData] = useState<FormDataProps>(initialState);
	const handleAddEvent = async () => {
		const result = await createUser(formData);
		if (result.success) {
			toast.success('Great! account for user is ready...');
			setFormData(initialState);
		} else {
			toast.error('Oops! Something went wrong...');
		}
	};
	return (
		<>
			<div className={`fixed z-[51] ${isOpen ? 'translate-x-0' : 'translate-x-full'} text-gray-900 dark:text-white transition-transform duration-300 space-y-8 ease-in-out p-6 top-0 right-0 max-w-[24rem] h-full w-3/4 dark:bg-mediumBlue bg-white`}>
				New User
				<InputWithLabel label='Display Name' className='mt-4' type='text' id='displayName' value={formData.displayName} onChange={e => setFormData({ ...formData, displayName: e.target.value })} />
				<InputWithLabel label='Email' type='email' id='email' value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
				<Select value={formData.role} onValueChange={e => setFormData({ ...formData, role: e })}>
					<SelectTrigger className='w-full !border-gray-300 !border-opacity-25 whitespace-nowrap'>{formData.role ? formData.role : 'choose role'}</SelectTrigger>
					<SelectContent className='border-gray-300 z-[52]'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{roles.slice(1).map((role, index) => (
								<SelectItem value={role} key={index}>
									<div className='flex items-center '>
										<div> {role}</div>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select value={formData.plan} onValueChange={e => setFormData({ ...formData, plan: e })}>
					<SelectTrigger className='w-full !border-gray-300 !border-opacity-25 whitespace-nowrap'>{formData.plan ? formData.plan : 'choose plan'}</SelectTrigger>
					<SelectContent className='border-gray-300 z-[52]'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{plans.slice(1).map((plan, index) => (
								<SelectItem value={plan} key={index}>
									<div className='flex items-center '>
										<div> {plan}</div>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className='flex space-x-4'>
					<Button onClick={handleAddEvent} className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white'>
						Create
					</Button>
					<Button variant='destructive'>Cancel</Button>
				</div>
			</div>
			{isOpen && <div className='bg-black opacity-50 !mt-0 fixed inset-0 z-50' onClick={() => setIsOpen(false)}></div>}
		</>
	);
};

export default LeftAddSidebar;

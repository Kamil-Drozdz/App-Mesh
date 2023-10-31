import { plans, roles } from './UserFilter';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/UI/Select';
import InputWithLabel from '@/common/InputWithLabel';
import { createUser } from '@/lib/createUser';
import { generateRandomPassword } from '@/lib/generateRandomPassowrd';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface FormDataProps {
  password: string;
  displayName: string;
  email: string;
  role: string;
  plan: string;
  emailVerified: string;
}

const initialState = {
  password: generateRandomPassword(12),
  displayName: '',
  email: '',
  role: '',
  plan: '',
  emailVerified: 'inactive',
};
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
      <div
        className={`fixed z-[51] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } top-0 right-0 h-full w-3/4 max-w-[24rem] space-y-8 bg-white p-6 text-gray-900 transition-transform duration-300 ease-in-out dark:bg-mediumBlue dark:text-white`}
      >
        New User
        <InputWithLabel
          label='Display Name'
          className='mt-4'
          type='text'
          id='displayName'
          value={formData.displayName}
          onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
        />
        <InputWithLabel
          label='Email'
          type='email'
          id='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Select value={formData.role} onValueChange={(e) => setFormData({ ...formData, role: e as string })}>
          <SelectTrigger className='w-full whitespace-nowrap !border-gray-300 !border-opacity-25'>
            {formData.role ? formData.role : 'choose role'}
          </SelectTrigger>
          <SelectContent className='z-[52] border-gray-300'>
            <SelectGroup className='bg-lightWhite dark:bg-mediumBlue dark:text-gray-200'>
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
        <Select value={formData.plan} onValueChange={(e) => setFormData({ ...formData, plan: e as string })}>
          <SelectTrigger className='w-full whitespace-nowrap !border-gray-300 !border-opacity-25'>
            {formData.plan ? formData.plan : 'choose plan'}
          </SelectTrigger>
          <SelectContent className='z-[52] border-gray-300'>
            <SelectGroup className='bg-lightWhite dark:bg-mediumBlue dark:text-gray-200'>
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
          <Button onClick={handleAddEvent} className='mb-4 !bg-violet-500 !text-white hover:bg-violet-400'>
            Create
          </Button>
          <Button variant='destructive'>Cancel</Button>
        </div>
      </div>
      {isOpen && <div className='fixed inset-0 z-50 !mt-0 bg-black opacity-50' onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default LeftAddSidebar;

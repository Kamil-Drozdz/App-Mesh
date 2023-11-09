import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import registerPage from '@/assets/register-page.svg';
import InputWithLabel from '@/common/InputWithLabel';
import SocialLoginButtons from '@/components/pages/Pages/SocialLoginButtons';
import { createUser } from '@/lib/createUser';
import { BasicRoutes } from '@/lib/enums/routes';
import { validateField } from '@/lib/validateField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

interface FormDataProps {
  displayName: string;
  email: string;
  password: string;
  role: string;
  terms: boolean;
}

const registerSchema = z.object({
  displayName: z.string().nonempty({ message: "Display Name can't be empty" }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  terms: z.boolean().refine((value) => value === true, { message: 'You must agree to the terms' }),
});

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    displayName: '',
    email: '',
    role: 'User',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const handleLogin = async () => {
    const isRegisterValid = validateField(registerSchema, formData, setErrors);
    if (!isRegisterValid) {
      return;
    }
    const result = await createUser(formData);
    if (result.success) {
      toast.success('Great! Your new account is ready and waiting for you. Log in now and start your adventure');
      navigate(`${BasicRoutes.LOGIN}`);
      setFormData({ email: '', password: '', role: 'User', terms: false, displayName: '' });
    } else {
      toast.error('Oops! Something went wrong during registration. Please try again later.');
    }
  };

  return (
    <div className='flex h-full min-h-screen w-full flex-col bg-darkBlue md:flex-row '>
      <div className='flex basis-2/3 items-center justify-center px-10 py-5'>
        <img height={800} width={800} loading='eager' alt='Registration Screen Illustration' src={registerPage} />
      </div>
      <div className='flex basis-1/3 flex-col items-center justify-center bg-mediumBlue p-10'>
        <div className='w-full space-y-4 px-4'>
          <h1 className='text-2xl'>Adventure starts here 🚀 👋</h1>
          <h2 className='text-xl font-thin text-gray-400'>Make your app management easy and fun!</h2>
          <div>
            <InputWithLabel
              label='Username'
              id='displayName'
              type='text'
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            />
            {errors.displayName && <p className='text-sm text-red-500'>{errors.displayName}</p>}
          </div>
          <div>
            <InputWithLabel
              label='Email'
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}
          </div>
          <div>
            <InputWithLabel
              label='Password'
              id='password'
              type='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className='text-sm text-red-500'>{errors.password}</p>}
          </div>
          <div className='flex w-full items-center justify-between'>
            <div className='flex flex-col  items-center'>
              <div className='flex items-center space-x-2'>
                <Input
                  id='terms'
                  className={`h-4 w-4 `}
                  defaultChecked={false}
                  type='checkbox'
                  checked={formData.terms}
                  onChange={() => setFormData({ ...formData, terms: !formData.terms })}
                />
                <label htmlFor='terms'>
                  I agree to
                  <Link to={'/terms'} className='ml-1 text-violet-500'>
                    privacy policy & terms
                  </Link>
                </label>
              </div>
              {errors.terms && <p className='w-full text-sm text-red-500'>{errors.terms}</p>}
            </div>
          </div>
          <div className='text-center'>
            <span> Already have an account? </span>
            <Link to={BasicRoutes.LOGIN} className='inline text-violet-500'>
              Sign in instead
            </Link>
          </div>
          <Button className='mb-4 w-full !bg-violet-500 !text-white hover:bg-violet-400' onClick={handleLogin}>
            Register
          </Button>
          <SocialLoginButtons setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

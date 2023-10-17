import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import loginPage from '@/assets/login-page.svg';
import InputWithLabel from '@/common/InputWithLabel';
import SocialLoginButtons from '@/common/SocialLoginButtons';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
import { validateField } from '@/lib/validateField';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

interface FormDataProps {
  email: string;
  password: string;
  persist: boolean;
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const LoginPage = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    email: 'test@test.com',
    password: 'testtest',
    persist: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isLoginValid = validateField(loginSchema, formData, setErrors);
    if (!isLoginValid) {
      return;
    }
    try {
      if (formData.persist) {
        setPersistence(auth, browserLocalPersistence);
      } else {
        setPersistence(auth, browserSessionPersistence);
      }
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setTimeout(() => {
        toast.success("Welcome back! You've successfully logged in to your account.");
      }, 500);
      navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
      setFormData({ email: '', password: '', persist: false });
    } catch (error) {
      toast.error('Oops, login failed. Please check your credentials and try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg-darkBlue min-h-screen h-full w-full flex flex-col md:flex-row '>
      <div className='basis-2/3 px-10 py-5 flex items-center justify-center'>
        <img className='' src={loginPage} />
      </div>
      <div className='basis-1/3 bg-mediumBlue flex flex-col justify-center items-center p-10'>
        <div className='px-4 space-y-4 w-full'>
          <h1 className='text-2xl'>Welcome to Dashboard! 👋</h1>
          <h2 className='text-xl text-gray-400 font-thin'>Please sign-in to your account and start the adventure👋</h2>
          <div>
            <InputWithLabel
              label='Email'
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div>
            <InputWithLabel
              label='Password'
              id='password'
              type='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div className='w-full flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
              <Input
                id='persist'
                className={`w-4 h-4 `}
                defaultChecked={false}
                type='checkbox'
                checked={formData.persist}
                onChange={() => setFormData({ ...formData, persist: !formData.persist })}
              />
              <label htmlFor='persist'>Remember me</label>
            </div>
            <Link to={BasicRoutes.FORGOT} className=' text-violet-500'>
              Forgot Password?
            </Link>
          </div>
          <Button className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white w-full' onClick={handleLogin}>
            Log In
          </Button>
          <div className='text-center'>
            <span> New on our platform? </span>
            <Link to={BasicRoutes.REGISTER} className='inline text-violet-500'>
              Create an account
            </Link>
          </div>
          <SocialLoginButtons setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import forgotPasswordPage from '@/assets/forgot-password-page.svg';
import InputWithLabel from '@/common/InputWithLabel';
import { BasicRoutes } from '@/lib/enums/routes';
import { validateField } from '@/lib/validateField';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '' });

  const handleResetPassword = async () => {
    const isEmailValid = validateField(forgotPasswordSchema, { email }, setErrors);
    if (!isEmailValid) {
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setEmail('');
      toast.success('Check your mailbox!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error try one more time or contact with support');
    }
  };

  return (
    <div className='flex h-full min-h-screen w-full flex-col bg-darkBlue md:flex-row '>
      <div className='flex basis-2/3 items-center justify-center px-10 py-5'>
        <img
          height={800}
          width={800}
          loading='eager'
          alt='Forgot password Screen Illustration'
          src={forgotPasswordPage}
        />
      </div>
      <div className='flex basis-1/3 flex-col items-center justify-center bg-mediumBlue p-10'>
        <div className='w-full space-y-4 px-4'>
          <h1 className='text-2xl'>Forgot Password? 🔒</h1>
          <h2 className='text-xl font-thin text-gray-400'>
            Enter your email and we'll send you instructions to reset your password
          </h2>
          <div>
            <InputWithLabel
              label='Email'
              id='forgotPassword'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='text-sm text-red-500'>{errors.email}</p>}
          </div>
          <Button className='mb-4 w-full !bg-violet-500 !text-white hover:bg-violet-400' onClick={handleResetPassword}>
            Send reset link
          </Button>
          <div className='w-full text-center'>
            <Link to={BasicRoutes.LOGIN} className='  text-violet-500 '>
              &lt; Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import forgotPasswordPage from '@/assets/forgot-password-page.svg';
import InputWithLabel from '@/common/InputWithLabel';
import { BasicRoutes } from '@/lib/routes';
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
    <div className='bg-darkBlue min-h-screen h-full w-full flex flex-col md:flex-row '>
      <div className='basis-2/3 px-10 py-5 flex items-center justify-center'>
        <img src={forgotPasswordPage} />
      </div>
      <div className='basis-1/3 bg-mediumBlue flex flex-col justify-center items-center p-10'>
        <div className='px-4 space-y-4 w-full'>
          <h1 className='text-2xl'>Forgot Password? 🔒</h1>
          <h2 className='text-xl text-gray-400 font-thin'>
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
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <Button className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white w-full' onClick={handleResetPassword}>
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

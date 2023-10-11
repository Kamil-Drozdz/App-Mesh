import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import loginPage from '@/assets/login-page.svg';
import InputWithLabel from '@/common/InputWithLabel';
import { BasicRoutes, SubRoutes } from '@/lib/routes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FormDataProps {
	email: string;
	password: string;
	persist: boolean;
}
const Login = () => {
	const [formData, setFormData] = useState<FormDataProps>({ email: 'test@test.com', password: 'testtest', persist: false });
	const navigate = useNavigate();
	const handleLogin = async () => {
		try {
			await signInWithEmailAndPassword(auth, formData.email, formData.password);

			navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
			setFormData({ email: '', password: '', persist: false });
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<div className='bg-darkBlue min-h-screen h-full w-full flex'>
			<div className='basis-2/3 px-10 py-5 flex items-center justify-center'>
				<img className='' src={loginPage} />
			</div>
			<div className='basis-1/3 bg-mediumBlue flex flex-col justify-center items-center p-5'>
				<div className='px-4 space-y-4'>
					<h1 className='text-2xl'>Welcome to Dashboard! 👋</h1>
					<h2 className='text-xl text-gray-400 font-thin'>Please sign-in to your account and start the adventure👋</h2>
					<InputWithLabel label='Email' id='email' type='email' value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
					<InputWithLabel label='Password' id='password' type='password' value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
					<div className='w-full flex justify-between items-center'>
						<div className='flex space-x-2 items-center'>
							<Input id='persist' className={`w-4 h-4 `} defaultChecked={false} type='checkbox' checked={formData.persist} onChange={() => setFormData({ ...formData, persist: !formData.persist })} />
							<label htmlFor='persist'>Remember me</label>
						</div>
						<Link to={BasicRoutes.FORGOT} className=' text-violet-500'>
							Forgot Password?
						</Link>
					</div>
					<div className='text-center'>
						<span> New on our platform? </span>
						<Link to={BasicRoutes.REGISTER} className='inline text-violet-500'>
							Create an account
						</Link>
					</div>
					<Button className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white w-full' onClick={handleLogin}>
						Log In
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Login;

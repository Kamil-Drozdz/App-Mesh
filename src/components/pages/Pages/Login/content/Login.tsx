import { Button } from '@/UI/Button';
import { auth } from 'firebase';
import { useState } from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error('Błąd logowania:', error);
		}
	};

	return (
		<div>
			<h1>Sign in</h1>
			<input type='email' placeholder='Adres e-mail' value={email} onChange={e => setEmail(e.target.value)} />
			<input type='password' placeholder='Hasło' value={password} onChange={e => setPassword(e.target.value)} />
			<Button onClick={handleLogin}>Log In</Button>
		</div>
	);
}

export default Login;

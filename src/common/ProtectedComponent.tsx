import Loader from './Loader';
import { auth } from '@/../firebaseConfig';
import { BasicRoutes } from '@/lib/routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

export const ProtectedComponent = ({ component: Component }) => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <Loader />;
	}

	return user ? <Component /> : <Navigate to={BasicRoutes.UNAUTHORIZED} />;
};

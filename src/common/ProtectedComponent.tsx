import { auth } from '@/../firebaseConfig';
import { BasicRoutes } from '@/lib/routes';
import { Navigate } from 'react-router-dom';

export const ProtectedComponent = ({ component: Component }) => {
	if (!auth.currentUser || !auth.currentUser.email) {
		return <Navigate to={BasicRoutes.UNAUTHORIZED} />;
	}

	return <Component />;
};

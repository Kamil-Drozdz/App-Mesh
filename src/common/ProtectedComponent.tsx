import { BasicRoutes } from '@/lib/routes';
import { auth } from 'firebase';
import { Navigate } from 'react-router-dom';

export const ProtectedComponent = ({ component: Component }) => {
	console.log(auth);
	if (auth) {
		return <Navigate to={BasicRoutes.UNUAUTHORIZED} />;
	}

	return <Component />;
};

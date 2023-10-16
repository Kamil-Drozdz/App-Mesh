import { ProtectedComponent } from './common/ProtectedComponent';
import { FULL_PATHS } from './lib/routeMapping';
import { BasicRoutes, SubRoutes } from './lib/routes';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentUser from './store/CurrentUser';

const App = () => {
	const navigate = useNavigate();
	const { currentUser } = useCurrentUser();
	const pathname = window.location.pathname;
	useEffect(() => {
		if (pathname === '/') {
			if (currentUser) {
				navigate(`${BasicRoutes.LOGIN}`);
			} else {
				navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
			}
		}
	}, []);

	return (
		<>
			<ToastContainer />
			<Routes>
				{FULL_PATHS.map(({ path, component, isSecured }, index) => (
					<Route key={index} path={path} element={isSecured ? <ProtectedComponent component={component} /> : React.createElement(component)} />
				))}
			</Routes>
		</>
	);
};

export default App;

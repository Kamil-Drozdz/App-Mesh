import { ProtectedComponent } from './common/ProtectedComponent';
import { FULL_PATHS } from './lib/routeMapping';
import { BasicRoutes } from './lib/routes';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const pathname = window.location.pathname;
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/') {
			navigate(`${BasicRoutes.LOGIN}`);
		}
	}, [navigate, pathname]);

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

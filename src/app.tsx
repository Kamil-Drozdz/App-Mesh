import SideNavbar from './components/navigation/SideNavbar';
import { FULL_PATHS } from './lib/routeMapping';
import { BasicRoutes, SubRoutes } from './lib/routes';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
	const pathname = window.location.pathname;
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/') {
			navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
		}
	}, [navigate, pathname]);

	return (
		<>
			<SideNavbar />
			<Routes>
				{FULL_PATHS.map(({ path, component }, index) => {
					return <Route key={index} path={path} element={React.createElement(component)} />;
				})}
			</Routes>
		</>
	);
};

export default App;

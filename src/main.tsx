import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './data/translations/i18n';
import SideNavbar from './components/SideNavbar';
import DashboardContent from './components/pages/Dashboard/DashboardContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
	const Root: FC = () => {
		return (
			<Router>
				<SideNavbar />
				<div className='h-screen lg:ml-72'>
					<Routes>
						<Route path='/' element={<DashboardContent />} />
						<Route path='/dashboard/analitics' element={<DashboardContent />} />
						<Route path='/dashboard/ecommerce' element={<DashboardContent />} />
						<Route path='/email' element={<DashboardContent />} />
						<Route path='/chat' element={<DashboardContent />} />
						<Route path='/todo/all' element={<DashboardContent />} />
						<Route path='/calendar' element={<DashboardContent />} />
						<Route path='/pages' element={<DashboardContent />} />
						<Route path='/invoice' element={<DashboardContent />} />
						<Route path='/ecommerce' element={<DashboardContent />} />
						<Route path='/profile' element={<DashboardContent />} />
						<Route path='/typography' element={<DashboardContent />} />
						<Route path='/colors' element={<DashboardContent />} />
						<Route path='/feather' element={<DashboardContent />} />
						<Route path='/cards' element={<DashboardContent />} />
						<Route path='/components' element={<DashboardContent />} />
						<Route path='/extension' element={<DashboardContent />} />
						<Route path='/layouts' element={<DashboardContent />} />
						<Route path='/form/elements' element={<DashboardContent />} />
						<Route path='/form/layout' element={<DashboardContent />} />
						<Route path='/form/wizard' element={<DashboardContent />} />
						<Route path='/form/validation' element={<DashboardContent />} />
						<Route path='/form/repeater' element={<DashboardContent />} />
						<Route path='/form/table' element={<DashboardContent />} />
						<Route path='/form/data' element={<DashboardContent />} />
						<Route path='/charts' element={<DashboardContent />} />
						<Route path='/maps' element={<DashboardContent />} />
						<Route path='/menu/levels' element={<DashboardContent />} />
						<Route path='/menu/documentation' element={<DashboardContent />} />
						<Route path='/menu/support' element={<DashboardContent />} />
					</Routes>
				</div>
			</Router>
		);
	};

	createRoot(rootElement).render(<Root />);
} else {
	console.error("Element with id 'root' not found. Make sure such an element exists in your HTML.");
}

import logo from '../assets/logo.webp';
import SideNavbarItem from '../common/SideNavbarItem';
import { navItems } from '@/data/navigation/navItems';
import { IconSize } from '@/lib/entities/iconSize';
import React, { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

const SideNavbar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const toggleMenu = () => {
		setIsCollapsed(prev => !prev);
		setMenuCollapsed(prev => !prev);
	};
	return (
		<div className=' bg-darkBlue w-72 top-0 left-0 fixed -z-1  h-screen'>
			<button onClick={toggleMenu} className='p-2 bg-mediumBlue text-lightGray hover:bg-darkBlueHover focus:bg-darkBlueHover absolute top-0 right-0 rounded-full  z-10'>
				Test
			</button>
			<nav
				onMouseEnter={() => {
					if (isCollapsed) {
						setMenuCollapsed(false);
					}
				}}
				onMouseLeave={() => {
					if (!menuCollapsed && isCollapsed) {
						setMenuCollapsed(true);
					}
				}}
				className={`${menuCollapsed ? 'w-20' : 'w-72'} bg-mediumBlue transition-all duration-300 ease-out fixed top-0 left-0 text-lightGray overflow-y-auto h-screen`}>
				<ul className='my-2'>
					<li className='flex items-center justify-between space-x-4 px-6'>
						{!menuCollapsed ? (
							<>
								<a href='/' className='flex items-center '>
									<img src={logo} alt='Logo' className='w-8 h-8 mr-4' />
									<span className='text-3xl font-semibold'>Admin</span>
								</a>
								<FaRegDotCircle />
							</>
						) : (
							<img src={logo} alt='Logo' className='w-8 h-8' />
						)}
					</li>
				</ul>
				{navItems.map((group, index) => (
					<div key={index} className='p-2'>
						<span className='text-[#5a6071] mt-6 mb-4 mx-6 text-xs font-semibold'>{menuCollapsed && group.title ? <div className=' text-center h-4'>...</div> : group.title}</span>
						<ul>
							{group.items.map((item, itemIndex) => (
								<li key={itemIndex}>
									<SideNavbarItem icon={item.icon} name={item.name} href={item.href} dropdown={item.dropdown} menuCollapsed={menuCollapsed} />
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</div>
	);
};

export default SideNavbar;

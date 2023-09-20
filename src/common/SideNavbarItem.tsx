import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { LiaDotCircle } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const SideNavbarItem = ({ icon, name, href, dropdown, menuCollapsed }) => {
	const [open, setOpen] = useState(false);
	const pathname = window.location.pathname;
	const isActive = pathname === href;

	const handleItemClick = () => {
		if (dropdown?.length) {
			setOpen(prev => !prev);
		}
	};

	return (
		<>
			{dropdown?.length ? (
				<div onClick={handleItemClick} className={`${open && 'bg-darkBlue bg-opacity-70'} flex items-center  ${menuCollapsed ? 'justify-center' : 'justify-between'}  my-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue  mx-3 rounded-lg transition-colors duration-150 ease-in-out`} style={{ cursor: 'pointer' }}>
					<div className='flex items-center justify-center space-x-2 w-fit '>
						{icon} <span className={`${menuCollapsed ? 'hidden' : 'block'}`}>{name}</span>
					</div>
					{!!dropdown?.length && <AiOutlineRight className={` ${open ? 'rotate-90' : 'rotate-0'} ${menuCollapsed ? 'hidden' : 'block'} transition-transform duration-300 ease-in-out`} />}
				</div>
			) : (
				<Link to={href} className={`${isActive && 'bg-darkBlue'} flex items-center  ${menuCollapsed ? 'justify-center' : 'justify-between'} my-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue  mx-3 rounded-lg transition-colors duration-150 ease-in-out`}>
					<div className='flex items-center space-x-2 '>
						{icon} <span className={`${menuCollapsed ? 'hidden' : 'block'}`}>{name}</span>
					</div>
				</Link>
			)}
			{open
				? dropdown?.map(item => (
						<Link to={item.href} key={item.href} className={`${isActive && 'bg-darkBlue'} ${menuCollapsed ? 'hidden' : 'flex'}   items-center justify-between m-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue mx-5 rounded-lg transition-colors duration-150 ease-in-out`}>
							<div className='flex items-center space-x-2'>
								<LiaDotCircle /> <span>{item.name}</span>
							</div>
						</Link>
				  ))
				: null}
		</>
	);
};

export default SideNavbarItem;

import { AiOutlineRight } from 'react-icons/ai';
import { LiaDotCircle } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const SideNavbarItem = ({ icon, handleActiveDropdown, activeDropdown, name, href, dropdown, menuCollapsed }) => {
	const open = name === activeDropdown;
	const pathname = window.location.pathname;
	const isActiveItem = pathname === href;

	return (
		<>
			{dropdown?.length ? (
				<div onClick={() => handleActiveDropdown(name)} className={`${open && 'bg-darkBlue bg-opacity-70'} flex items-center  ${menuCollapsed ? 'justify-center' : 'justify-between'}  my-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue  mx-3 rounded-lg transition-colors duration-150 ease-in-out cursor-pointer`}>
					<div className='flex items-center justify-center space-x-2 w-fit '>
						{icon} <span className={`${menuCollapsed ? 'hidden' : 'block'}`}>{name}</span>
					</div>
					{!!dropdown?.length && <AiOutlineRight className={` ${open ? 'rotate-90' : 'rotate-0'} ${menuCollapsed ? 'hidden' : 'block'} transition-transform duration-300 ease-in-out`} />}
				</div>
			) : (
				<Link to={href} className={`${isActiveItem && 'bg-darkBlue'} flex items-center  ${menuCollapsed ? 'justify-center' : 'justify-between'} my-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue  mx-3 rounded-lg transition-colors duration-150 ease-in-out`}>
					<div className='flex items-center space-x-2 '>
						{icon} <span className={`${menuCollapsed ? 'hidden' : 'block'}`}>{name}</span>
					</div>
				</Link>
			)}
			<div className={` overflow-hidden transition-all duration-300 ease ${open ? 'max-h-96' : 'max-h-0'}`}>
				{open
					? dropdown?.map((item, index) => (
							<Link to={item.href} key={index} className={`${item.href === pathname ? 'bg-darkBlue text-white' : ''} ${menuCollapsed ? 'hidden' : 'flex'}   items-center justify-between m-1 px-4 py-2.5 hover:bg-darkBlue focus:bg-darkBlue mx-5 rounded-lg transition-colors duration-150 ease-in-out`}>
								<div className='flex items-center space-x-2'>
									<LiaDotCircle /> <span>{item.name}</span>
								</div>
							</Link>
					  ))
					: null}
			</div>
		</>
	);
};

export default SideNavbarItem;

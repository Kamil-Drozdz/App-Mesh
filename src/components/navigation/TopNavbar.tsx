import StatusBadge from '../../common/StatusBadge';
import { UserStatuses } from '../../lib/user';
import CartPopover from '../pages/eCommerce/CartPopover';
import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import GermanyIcon from '@/assets/germany-flag-icon.svg';
import PolandIcon from '@/assets/poland-flag-icon.svg';
import selfPhoto from '@/assets/selfPhoto.jpeg';
import EnglandIcon from '@/assets/united-kingdom-flag-icon.svg';
import BorderedBadge from '@/common/BorderedBadge';
import { profileOptions, topNavbarIcons } from '@/data/navigation/topNavbarItems';
import { IconSize } from '@/lib/iconSize';
import { BasicRoutes } from '@/lib/routes';
import useCurrentUser from '@/store/CurrentUser';
import useMenu from '@/store/Menu';
import useProductsStore from '@/store/ProductsStore';
import { signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopNavbar = () => {
	const htmlElement = document.documentElement;
	const { t, i18n } = useTranslation();
	const { currentUser } = useCurrentUser();
	const { toggleMenu } = useMenu();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);
	const { cart, removeFromCart } = useProductsStore();
	const navigate = useNavigate();

	const handleToggleTheme = () => {
		htmlElement.classList.toggle('dark');
		setIsDarkMode(prev => !prev);
	};

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate(`${BasicRoutes.LOGIN}`);
			toast.success("You're now safely logged out. See you next time!");
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
			setPrevScrollPos(currentScrollPos);
		};
		window.addEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	return (
		<>
			{currentUser ? (
				<div className={`flex ${visible ? 'top-0' : '-top-16'} print:hidden justify-between sticky top-8 z-[9] dark:bg-mediumBlue dark:text-gray-300 bg-white transition-all duration-300 ease text-gray-800 bg rounded-lg px-4 py-2 shadow-md dark:shadow-black shadow-lightGray`}>
					<ul className='flex items-center space-x-2'>
						{topNavbarIcons.icons.map((icon, index) => (
							<li className={`${index === 0 ? 'lg:hidden block' : 'md:block hidden'}`} key={index}>
								{index === 0 ? (
									<Button className='!bg-transparent text-gray-800 dark:!text-gray-300' onClick={toggleMenu}>
										{icon.icon}
									</Button>
								) : (
									<a href={icon.href}>{icon.icon}</a>
								)}
							</li>
						))}
					</ul>
					<div className='flex items-center space-x-6'>
						<ul className='flex items-center space-x-2'>
							<>
								<Select onValueChange={e => i18n.changeLanguage(String(e))}>
									<SelectTrigger className='md:w-[140px] border-darkBlue whitespace-nowrap'>
										<SelectValue
											placeholder={
												<div className='flex justify-center items-center space-x-2'>
													<img className='w-4 h-4' src={EnglandIcon} /> <p>{t('English')}</p>
												</div>
											}
										/>
									</SelectTrigger>
									<SelectContent className='border-darkBlue'>
										<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
											<SelectLabel>{t('Choose Language')}</SelectLabel>
											<SelectItem value='en'>
												<div className='flex justify-center items-center space-x-2'>
													<img className='w-4 h-4' src={EnglandIcon} /> <p>{t('English')}</p>
												</div>
											</SelectItem>
											<SelectItem value='de'>
												<div className='flex justify-center items-center space-x-2'>
													<img className='w-4 h-4' src={GermanyIcon} /> <p>{t('German')}</p>
												</div>
											</SelectItem>
											<SelectItem value='pl'>
												<div className='flex justify-center items-center space-x-2'>
													<img className='w-4 h-4' src={PolandIcon} /> <p>{t('Polish')}</p>
												</div>
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<TooltipProvider>
									{topNavbarIcons.userToolbar.map((item, index) => (
										<div className='cursor-pointer flex items-center' key={index}>
											<Popover>
												<Tooltip>
													<TooltipTrigger asChild>
														{index === 2 ? (
															<PopoverTrigger>
																<>
																	<li>{item.icon}</li>
																	<div className='relative'>
																		<BorderedBadge count={cart.length} />
																	</div>
																</>
															</PopoverTrigger>
														) : (
															<li onClick={index === 0 ? handleToggleTheme : undefined}>
																<a>{isDarkMode ? item.icon.type === BsSun ? <BsMoon size={IconSize.basic} /> : item.icon : item.icon}</a>
															</li>
														)}
													</TooltipTrigger>
													<TooltipContent className='p-2 bg-black text-white !text-base' sideOffset={12} side='bottom'>
														<p>{item.tooltip}</p>
													</TooltipContent>
												</Tooltip>
												<PopoverContent className='w-auto p-0 z-[52] dark:bg-mediumBlue' sideOffset={22} align='center'>
													{cart.length ? <CartPopover removeFromCart={removeFromCart} cart={cart} /> : <div className='min-w-[200px] h-24 text-center'>Your cart is empty</div>}
												</PopoverContent>
											</Popover>
										</div>
									))}
								</TooltipProvider>
							</>
						</ul>
						<Popover>
							<PopoverTrigger className='flex items-center md:space-x-2'>
								<div className=' justify-center items-end flex-col md:flex hidden'>
									{currentUser?.displayName ? <p>{currentUser?.displayName}</p> : <p> User</p>}
									{currentUser?.role ? <span className='text-xs dark:text-gray-400'>{currentUser?.role}</span> : <span className='text-xs dark:text-gray-400'>User</span>}
								</div>
								<div className='relative flex h-10 w-10 items-center justify-center rounded-full dark:text-white'>
									<img className='rounded-full' src={currentUser?.photoURL || selfPhoto} />
									<StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
								</div>
								<PopoverContent className='w-auto p-0 z-[52] dark:bg-mediumBlue' sideOffset={18} align='center'>
									<div className='min-w-[140px]'>
										{profileOptions.map((item, index) => (
											<div key={index}>
												{item.href ? (
													<Link className='flex items-center space-x-3 p-2 my-1 hover:text-violet-500 hover:bg-violet-500 hover:bg-opacity-20' to={item.href || ''}>
														{item.icon}
														<p className='text-lg'>{item.label}</p>
													</Link>
												) : (
													<Button onClick={handleLogout} className='w-full' variant='destructive'>
														{item.icon}
														<p className='text-lg ml-2'>{item.label}</p>
													</Button>
												)}
											</div>
										))}
									</div>
								</PopoverContent>
							</PopoverTrigger>
						</Popover>
					</div>
				</div>
			) : null}
		</>
	);
};

export default TopNavbar;

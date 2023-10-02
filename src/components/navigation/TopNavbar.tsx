import StatusBadge from '../../common/StatusBadge';
import { UserStatuses } from '../../lib/entities/user';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import GermanyIcon from '@/assets/germany-flag-icon.svg';
import PolandIcon from '@/assets/poland-flag-icon.svg';
import selfPhoto from '@/assets/selfPhoto.jpeg';
import EnglandIcon from '@/assets/united-kingdom-flag-icon.svg';
import BorderedBadge from '@/common/BorderedBadge';
import { topNavbarIcons } from '@/data/navigation/topNavbarItems';
import { IconSize } from '@/lib/entities/iconSize';
import useMenu from '@/store/useMenu';
import useProductsStore from '@/store/useProductsStore';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoon, BsSun } from 'react-icons/bs';

const TopNavbar = () => {
	const htmlElement = document.documentElement;
	const { t, i18n } = useTranslation();
	const { toggleMenu } = useMenu();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);
	const { cart } = useProductsStore();

	const handleToggleTheme = () => {
		htmlElement.classList.toggle('dark');
		setIsDarkMode(prev => !prev);
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
		<div className={`flex  ${visible ? 'top-0' : '-top-16'} print:hidden justify-between sticky top-8 z-[9] dark:bg-mediumBlue dark:text-gray-300 bg-white transition-all duration-300 ease text-gray-800 bg rounded-lg px-4 py-2 shadow-md dark:shadow-black shadow-lightGray`}>
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
						<Select onValueChange={e => i18n.changeLanguage(e)}>
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
						{topNavbarIcons.userToolbar.map((icon, index) => (
							<>
								<li onClick={index === 0 ? handleToggleTheme : undefined} key={index}>
									<a>{isDarkMode ? icon.type === BsSun ? <BsMoon size={IconSize.basic} /> : icon : icon}</a>
								</li>
								{index === 3 && (
									<div className='relative'>
										<BorderedBadge count={cart.length} />
									</div>
								)}
							</>
						))}
					</>
				</ul>
				<div className='flex items-center md:space-x-2'>
					<div className=' justify-center items-end flex-col md:flex hidden'>
						<p> Kamil Dróżdż</p>
						<span className='text-xs dark:text-gray-400'>Admin</span>
					</div>
					<div className='relative flex h-10 w-10 items-center justify-center rounded-full dark:text-white'>
						<img className='rounded-full' src={selfPhoto} />
						<StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;

import GermanyIcon from '../assets/germany-flag-icon.svg';
import PolandIcon from '../assets/poland-flag-icon.svg';
import selfPhoto from '../assets/selfPhoto.jpeg';
import EnglandIcon from '../assets/united-kingdom-flag-icon.svg';
import StatusBadge from '../common/StatusBadge';
import { UserStatuses } from '../lib/entities/user';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import { topNavbarIcons } from '@/data/navigation/topNavbarItems';
import useMenu from '@/store/useMenu';
import { useTranslation } from 'react-i18next';

const TopNavbar = () => {
	const { t, i18n } = useTranslation();
	const { toggleMenu } = useMenu();

	return (
		<div className='flex justify-between sticky top-8 z-50 bg-mediumBlue rounded-lg px-4 py-2 shadow-lg shadow-black'>
			<ul className='flex items-center space-x-2'>
				{topNavbarIcons.icons.map((icon, index) => (
					<li className={`${index === 0 ? 'lg:hidden block' : 'md:block hidden'}`} key={index}>
						{index === 0 ? <Button onClick={toggleMenu}>{icon.icon}</Button> : <a href={icon.href}>{icon.icon}</a>}
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
								<SelectGroup className='bg-mediumBlue text-gray-200'>
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
							<li key={index}>
								<a>{icon}</a>
							</li>
						))}
					</>
				</ul>
				<div className='flex items-center md:space-x-2'>
					<div className=' justify-center items-end flex-col md:flex hidden'>
						<p> Kamil Dróżdż</p>
						<span className='text-xs text-gray-400'>Admin</span>
					</div>
					<div className='relative flex h-10 w-10 items-center justify-center rounded-full text-white'>
						<img className='rounded-full' src={selfPhoto} />
						<StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavbar;

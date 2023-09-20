import selfPhoto from '../assets/selfPhoto.jpeg';
import StatusBadge from '../common/StatusBadge';
import { UserStatuses } from '../lib/entities/user';
import { topNavbarIcons } from '@/data/navigation/topNavbarItems';

const TopNavbar = () => {
	return (
		<div className='flex justify-between bg-mediumBlue rounded-lg px-4 py-2 shadow-lg shadow-black'>
			<ul className='flex items-center space-x-2'>
				{topNavbarIcons.icons.map((icon, index) => (
					<li key={index}>
						<a href={icon.href} className='icon'>
							{icon.icon}
						</a>
					</li>
				))}
			</ul>
			<div className='flex items-center space-x-6'>
				<ul className='flex items-center space-x-2'>
					{topNavbarIcons.userToolbar.map((icon, index) => (
						<li key={index}>
							<a>{icon}</a>
						</li>
					))}
				</ul>
				<div className='flex items-center space-x-2'>
					<div className='flex justify-center items-end flex-col'>
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

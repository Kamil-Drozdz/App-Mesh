import { generateData } from '../ecommerce/dataCompany';
import { generateMeetupData } from '../ecommerce/dataMeetup';
import { IconSize } from '@/lib/iconSize';
import { HiOutlineDocument } from 'react-icons/hi2';

export const data = [
	{
		title: '12 Invoices have been paid',
		timestamp: '12 min ago',
		content: 'Invoices have been paid to the company.',
		icon: <HiOutlineDocument className='text-yellow-500' size={IconSize.basic} />,
		color: 'bg-[#7367f0] before:bg-[#7367f0]',
	},
	{
		title: 'Project meeting with john @10:15am',
		timestamp: '45 min ago',
		content: 'Client Meeting',
		images: generateData(1, generateMeetupData),
		color: 'bg-[#ff9f43] before:bg-[#ff9f43]',
	},
	{
		title: 'Create a new project for client',
		timestamp: '2 day ago',
		content: 'Add files to new design folder',
		images: generateData(6, generateMeetupData),
		color: 'bg-[#00cfe8] before:bg-[#00cfe8]',
	},
	{
		title: 'Create a new project for client',
		timestamp: '5 day ago',
		content: 'Add files to new design folder.',
		color: 'bg-[#ea5455] before:bg-[#ea5455]',
	},
];

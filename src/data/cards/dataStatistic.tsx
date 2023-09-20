import { IconSize } from '@/lib/entities/iconSize';
import { BiDollar, BiTrendingUp } from 'react-icons/bi';
import { BsBox } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi2';

export const statisticItem = [
	{
		icon: <BiTrendingUp size={IconSize.medium} />,
		amount: '230k',
		resources: 'Sales',
		color: 'bg-[#625bcb] text-[#625bcb',
	},
	{
		icon: <HiUser size={IconSize.medium} />,
		amount: '8.549k',
		resources: 'Customers',
		color: 'bg-[#00cfe8] text-[#00cfe8]',
	},
	{
		icon: <BsBox size={IconSize.medium} />,
		amount: '1.432k',
		resources: 'Products',
		color: 'bg-[#ea5455] text-[#ea5455]',
	},
	{
		icon: <BiDollar size={IconSize.medium} />,
		amount: '$9745',
		resources: 'Revenue',
		color: 'bg-[#28c76f] text-[#28c76f]',
	},
];

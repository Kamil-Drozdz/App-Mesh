import { IconSize } from '@/lib/iconSize';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import { BsCheck2Square, BsSun } from 'react-icons/bs';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineChatBubbleLeft, HiOutlineEnvelope } from 'react-icons/hi2';

export const topNavbarIcons = {
	icons: [{ icon: <GiHamburgerMenu size={IconSize.basic} /> }, { icon: <HiOutlineEnvelope size={IconSize.basic} />, href: '/email' }, { icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, href: '/chat' }, { icon: <BsCheck2Square size={IconSize.basic} />, href: '/todo/all' }, { icon: <AiOutlineCalendar size={IconSize.basic} />, href: '/calendar' }, { icon: <FiStar size={IconSize.basic} /> }],
	userToolbar: [
		{ icon: <BsSun size={IconSize.basic} />, tooltip: 'Theme' },
		{ icon: <BiBell size={IconSize.basic} />, tooltip: 'Notification' },
		{ icon: <FiShoppingCart size={IconSize.basic} />, tooltip: 'Shopping Cart' },
	],
};

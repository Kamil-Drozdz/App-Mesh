import { IconSize } from '@/lib/entities/iconSize';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiBell, BiSearch } from 'react-icons/bi';
import { BsCheck2Square, BsSun } from 'react-icons/bs';
import { FiStar } from 'react-icons/fi';
import { HiOutlineChatBubbleLeft, HiOutlineEnvelope } from 'react-icons/hi2';

export const topNavbarIcons = {
	icons: [{ icon: <HiOutlineEnvelope size={IconSize.basic} />, href: '/email' }, { icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, href: '/chat' }, { icon: <BsCheck2Square size={IconSize.basic} />, href: '/todo/all' }, { icon: <AiOutlineCalendar size={IconSize.basic} />, href: '/calendar' }, { icon: <FiStar size={IconSize.basic} /> }],
	userToolbar: ['Polish', <BsSun size={IconSize.basic} />, <BiSearch size={IconSize.basic} />, <BiBell size={IconSize.basic} />],
};

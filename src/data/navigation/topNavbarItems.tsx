import GermanyIcon from '@/assets/germany-flag-icon.svg';
import PolandIcon from '@/assets/poland-flag-icon.svg';
import EnglandIcon from '@/assets/united-kingdom-flag-icon.svg';
import { IconSize } from '@/lib/enums/iconSize';
import { AiOutlineCalendar, AiOutlinePoweroff, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiBell, BiSolidUser } from 'react-icons/bi';
import { BsCheck2Square, BsFillCreditCard2FrontFill, BsSun } from 'react-icons/bs';
import { FiSettings, FiShoppingCart, FiStar } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineChatBubbleLeft, HiOutlineEnvelope } from 'react-icons/hi2';

export const topNavbarIcons = {
  icons: [
    { icon: <GiHamburgerMenu className='text-primary' size={IconSize.basic} /> },
    { icon: <HiOutlineEnvelope size={IconSize.basic} />, href: '/email' },
    { icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, href: '/chat' },
    { icon: <BsCheck2Square size={IconSize.basic} />, href: '/todo/all' },
    { icon: <AiOutlineCalendar size={IconSize.basic} />, href: '/calendar' },
    { icon: <FiStar size={IconSize.basic} /> },
  ],
  userToolbar: [
    { icon: <BsSun size={IconSize.basic} />, tooltip: 'Theme' },
    { icon: <BiBell size={IconSize.basic} />, tooltip: 'Notification' },
    { icon: <FiShoppingCart size={IconSize.basic} />, tooltip: 'Shopping Cart' },
  ],
};

export const profileOptions = [
  { label: 'Profile', href: '/profile', icon: <BiSolidUser size={IconSize.basic} /> },
  { label: 'Inbox', href: '/inbox', icon: <HiOutlineEnvelope size={IconSize.basic} /> },
  { label: 'Task', href: '/todo/all', icon: <BsCheck2Square size={IconSize.basic} /> },
  { label: 'Chats', href: '/chat', icon: <HiOutlineChatBubbleLeft size={IconSize.basic} /> },
  { label: 'Settings', href: '/settings', icon: <FiSettings size={IconSize.basic} /> },
  { label: 'Pricing', href: '/pricing', icon: <BsFillCreditCard2FrontFill size={IconSize.basic} /> },
  { label: 'FAQ', href: '/faq', icon: <AiOutlineQuestionCircle size={IconSize.basic} /> },
  { label: 'Logout', icon: <AiOutlinePoweroff size={IconSize.basic} /> },
];

export const languageOptions = [
  { value: 'en', icon: EnglandIcon, label: 'English' },
  { value: 'de', icon: GermanyIcon, label: 'German' },
  { value: 'pl', icon: PolandIcon, label: 'Polish' },
];

import { IconSize } from '@/lib/entities/iconSize';
import { useTranslation } from 'react-i18next';
import { AiFillCheckCircle, AiOutlineCalendar, AiOutlineCreditCard, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineHome, AiOutlineLayout, AiOutlinePieChart, AiOutlinePlusCircle, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BiBox, BiCopy, BiDroplet } from 'react-icons/bi';
import { BsArrowRepeat, BsBox, BsCheck2Square, BsMap } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineChatBubbleLeft, HiOutlineEnvelope, HiOutlineServerStack } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiCodesandboxLogoLight, PiSquaresFour, PiTextTThin } from 'react-icons/pi';
import { TbCircleTriangle } from 'react-icons/tb';

export const NavItems = () => {
	const { t } = useTranslation();

	const navItems = [
		{
			title: '',
			items: [
				{
					icon: <AiOutlineHome size={IconSize.basic} />,
					name: t('Dashboard'),
					dropdown: [
						{
							name: t('Analytics'),
							href: '/dashboard/analitics',
						},
						{
							name: t('eCommerce'),
							href: '/dashboard/ecommerce',
						},
					],
				},
			],
		},
		{
			title: t('APPS & PAGES'),
			items: [
				{ icon: <HiOutlineEnvelope size={IconSize.basic} />, name: t('Email'), href: '/email' },
				{ icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, name: t('Chat'), href: '/chat' },
				{ icon: <BsCheck2Square size={IconSize.basic} />, name: t('Todo'), href: '/todo/all' },
				{
					icon: <AiOutlineCalendar size={IconSize.basic} />,
					name: t('Calendar'),
					href: '/calendar',
				},
				{
					icon: <IoDocumentTextOutline size={IconSize.basic} />,
					name: t('Pages'),
					dropdown: [
						{
							name: t('Authentication'),
							href: '/pages/authentication',
						},
						{
							name: t('Account Settings'),
							href: '/pages/settings',
						},
						{
							name: t('Profile'),
							href: '/pages/profile',
						},
						{
							name: t('FAQ'),
							href: '/pages/faq',
						},
						{
							name: t('Knowledge Base'),
							href: '/pages/knowledge',
						},
						{
							name: t('Pricing'),
							href: '/pages/pricing',
						},
						{
							name: t('Blog'),
							href: '/pages/blog',
						},
						{
							name: t('Mail Template'),
							href: '/pages/mail',
						},
						{
							name: t('Miscellaneous'),
							href: '/pages/miscellaneous',
						},
					],
				},
				{
					icon: <IoDocumentTextOutline size={IconSize.basic} />,
					name: t('Invoice'),
					dropdown: [
						{
							name: t('list'),
							href: '/invoice/list',
						},
						{
							name: t('Preview'),
							href: '/invoice/preview',
						},
						{
							name: t('Edit'),
							href: '/invoice/edit',
						},
						{
							name: t('Add'),
							href: '/invoice/add',
						},
					],
				},
				{
					icon: <AiOutlineShoppingCart size={IconSize.basic} />,
					name: t('eCommerce'),
					dropdown: [
						{
							name: t('Shop'),
							href: '/ecommerce/shop',
						},
						{
							name: t('Details'),
							href: '/ecommerce/details',
						},
						{
							name: t('Wish list'),
							href: '/ecommerce/wish-list',
						},
						{
							name: t('Checkout'),
							href: '/ecommerce/Checkout',
						},
					],
				},
				{
					icon: <AiOutlineUser size={IconSize.basic} />,
					name: t('User'),
					dropdown: [
						{
							name: t('List'),
							href: 'profile/list',
						},
						{
							name: t('View'),
							href: 'profile/view',
						},
						{
							name: t('Edit'),
							href: 'profile/Edit',
						},
					],
				},
			],
		},
		{
			title: t('USER INTERFACE'),
			items: [
				{
					icon: <PiTextTThin size={IconSize.basic} />,
					name: t('Typography'),
					href: '/typography',
				},
				{ icon: <BiDroplet size={IconSize.basic} />, name: t('Colors'), href: '/colors' },
				{ icon: <AiOutlineEye size={IconSize.basic} />, name: t('Feather'), href: '/feather' },
				{
					icon: <AiOutlineCreditCard size={IconSize.basic} />,
					name: t('Cards'),
					dropdown: [
						{
							name: t('Basic'),
							href: 'cards/basic',
						},
						{
							name: t('Advance'),
							href: 'cards/advance',
						},
						{
							name: t('Statistics'),
							href: 'cards/statistics',
						},
						{
							name: t('Analytics'),
							href: 'cards/analytics',
						},
						{
							name: t('Actions'),
							href: 'cards/actions',
						},
					],
				},
				{
					icon: <BiBox size={IconSize.basic} />,
					name: t('Components'),
					dropdown: [
						{
							name: t('Alerts'),
							href: 'components/alerts',
						},

						{
							name: t('Avatar'),
							href: 'components/avatar',
						},

						{
							name: t('Badges'),
							href: 'components/badges',
						},

						{
							name: t('Breadcrumbs'),
							href: 'components/breadcrumbs',
						},

						{
							name: t('Buttons'),
							href: 'components/buttons',
						},

						{
							name: t('Carousel'),
							href: 'components/carousel',
						},

						{
							name: t('Collapse'),
							href: 'components/collapse',
						},

						{
							name: t('Divider'),
							href: 'components/divider',
						},
						{
							name: t('Dropdowns'),
							href: 'components/dropdowns',
						},

						{
							name: t('List Group'),
							href: 'components/list-group',
						},

						{
							name: t('Media Objects'),
							href: 'components/media-objects',
						},

						{
							name: t('Modals'),
							href: 'components/modals',
						},
						{
							name: t('Navs'),
							href: 'components/navs',
						},
						{
							name: t('Pagination'),
							href: 'components/pagination',
						},
						{
							name: t('Pill Badges'),
							href: 'components/pill-badges',
						},
						{
							name: t('Pills'),
							href: 'components/pills',
						},
						{
							name: t('Popovers'),
							href: 'components/popovers',
						},
						{
							name: t('Progress'),
							href: 'components/progress',
						},
						{
							name: t('Ratings'),
							href: 'components/ratings',
						},
						{
							name: t('Spinner'),
							href: 'components/spinner',
						},
						{
							name: t('Tabs'),
							href: 'components/tabs',
						},
						{
							name: t('Timeline'),
							href: 'components/timeline',
						},
						{
							name: t('Toasts'),
							href: 'components/toasts',
						},
						{
							name: t('Tooltips'),
							href: 'components/tooltips',
						},
					],
				},
				{
					icon: <AiOutlinePlusCircle size={IconSize.basic} />,
					name: t('Extension'),
					dropdown: [
						{
							name: t('Sweet Alerts'),
							href: 'extension/sweet-alerts',
						},
						{
							name: t('Block UI'),
							href: 'extension/ui',
						},
						{
							name: t('Toastr'),
							href: 'extension/toastr',
						},
						{
							name: t('Slider'),
							href: 'extension/slider',
						},
						{
							name: t('Drag & Drop'),
							href: 'extension/drag&drop',
						},
						{
							name: t('Tour'),
							href: 'extension/tour',
						},
						{
							name: t('Clipboard'),
							href: 'extension/cliboard',
						},
						{
							name: t('Context Menu'),
							href: 'extension/context-menu',
						},
						{
							name: t('Swiper'),
							href: 'extension/swiper',
						},
						{
							name: t('Tree view'),
							href: 'extension/tree-view',
						},
						{
							name: t('i18n'),
							href: 'extension/i18n',
						},
					],
				},
				{
					icon: <AiOutlineLayout size={IconSize.basic} />,
					name: t('Page Layouts'),
					dropdown: [
						{
							name: t('Collapsed Menu'),
							href: 'layouts/collapsed-menu',
						},
						{
							name: t('Boxed Layout'),
							href: 'layouts/boxed-layout',
						},
						{
							name: t('Without Menu'),
							href: 'layouts/without-menu',
						},
						{
							name: t('Layout Empty'),
							href: 'layouts/layout-empty',
						},
						{
							name: t('Layout Blank'),
							href: 'layouts/layout-blank',
						},
					],
				},
			],
		},
		{
			title: t('FORMS & TABLES'),
			items: [
				{
					icon: <BiCopy size={IconSize.basic} />,
					name: t('Form Elements'),
					dropdown: [
						{
							name: t('Input'),
							href: '/form/elements/input',
						},
						{
							name: t('Input Groups'),
							href: '/form/elements/input-groups',
						},
						{
							name: t('Input Mask'),
							href: '/form/elements/input-mask',
						},
						{
							name: t('Textarea'),
							href: '/form/elements/textarea',
						},
						{
							name: t('Checkbox'),
							href: '/form/elements/checkbox',
						},
						{
							name: t('Radio'),
							href: '/form/elements/radio',
						},
						{
							name: t('Switch'),
							href: '/form/elements/switch',
						},
						{
							name: t('Select'),
							href: '/form/elements/select',
						},
						{
							name: t('Number Input'),
							href: '/form/elements/number-input',
						},
						{
							name: t('File Uploader'),
							href: '/form/elements/file-uploader',
						},
						{
							name: t('Quill Editor'),
							href: '/form/elements/quill-editor',
						},
						{
							name: t('Flatpicker'),
							href: '/form/elements/flatpicker',
						},
						{
							name: t('Date & Time picker'),
							href: '/form/elements/date&Time-picker',
						},
					],
				},
				{ icon: <BsBox size={IconSize.basic} />, name: t('Form Layout'), href: '/form/layout' },
				{
					icon: <PiCodesandboxLogoLight size={IconSize.basic} />,
					name: t('Form Wizard'),
					href: '/form/wizard',
				},
				{
					icon: <AiFillCheckCircle size={IconSize.basic} />,
					name: t('Form Validations'),
					href: '/form/validation',
				},
				{
					icon: <BsArrowRepeat size={IconSize.basic} />,
					name: t('Form Repeater'),
					href: '/form/repeater',
				},
				{
					icon: <HiOutlineServerStack size={IconSize.basic} />,
					name: t('Table'),
					href: '/form/table',
				},
				{
					icon: <PiSquaresFour size={IconSize.basic} />,
					name: t('DataTables'),
					href: '/form/data',
				},
			],
		},
		{
			title: t('CHARTS & MAPS'),
			items: [
				{
					icon: <AiOutlinePieChart size={IconSize.basic} />,
					name: t('Charts'),
					dropdown: [
						{
							name: t('Apex'),
							href: '/charts/apex',
						},
						{
							name: t('ChartJS'),
							href: '/charts/chartjs',
						},
					],
				},
				{ icon: <BsMap size={IconSize.basic} />, name: t('Google Maps'), href: '/maps' },
			],
		},
		{
			title: t('OTHERS'),
			items: [
				{
					icon: <GiHamburgerMenu size={IconSize.basic} />,
					name: t('Menu Levels'),
					dropdown: [
						{
							name: t('Second Level'),
							href: '/menu/levels/second',
						},
					],
				},
				{
					icon: <AiOutlineEyeInvisible size={IconSize.basic} />,
					name: t('Disabled Menu'),
					href: '',
				},
				{
					icon: <IoDocumentTextOutline size={IconSize.basic} />,
					name: t('Documentation'),
					href: '/menu/documentation',
				},
				{
					icon: <TbCircleTriangle size={IconSize.basic} />,
					name: t('Raise Support'),
					href: '/menu/support',
				},
			],
		},
	];
	return navItems;
};

import { IconSize } from '@/lib/entities/iconSize';
import { AiFillCheckCircle, AiOutlineCalendar, AiOutlineCreditCard, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineHome, AiOutlineLayout, AiOutlinePieChart, AiOutlinePlusCircle, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BiBox, BiCopy, BiDroplet } from 'react-icons/bi';
import { BsArrowRepeat, BsBox, BsCheck2Square, BsMap } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineChatBubbleLeft, HiOutlineEnvelope, HiOutlineServerStack } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiCodesandboxLogoLight, PiSquaresFour, PiTextTThin } from 'react-icons/pi';
import { TbCircleTriangle } from 'react-icons/tb';

export const navItems = [
	{
		title: '',
		items: [
			{
				icon: <AiOutlineHome size={IconSize.basic} />,
				name: 'Dashboard',
				dropdown: [
					{
						name: 'Analytics',
						href: '/dashboard/analitics',
					},
					{
						name: 'eCommerce',
						href: '/dashboard/ecommerce',
					},
				],
			},
		],
	},
	{
		title: 'APPS & PAGES',
		items: [
			{ icon: <HiOutlineEnvelope size={IconSize.basic} />, name: 'Email', href: '/email' },
			{ icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, name: 'Chat', href: '/chat' },
			{ icon: <BsCheck2Square size={IconSize.basic} />, name: 'Todo', href: '/todo/all' },
			{
				icon: <AiOutlineCalendar size={IconSize.basic} />,
				name: 'Calendar',
				href: '/calendar',
			},
			{
				icon: <IoDocumentTextOutline size={IconSize.basic} />,
				name: 'Pages',
				dropdown: [
					{
						name: 'Authentication',
						href: '/pages/authentication',
					},
					{
						name: 'Account Settings',
						href: '/pages/settings',
					},
					{
						name: 'Profile',
						href: '/pages/profile',
					},
					{
						name: 'FAQ',
						href: '/pages/faq',
					},
					{
						name: 'Knowledge Base',
						href: '/pages/knowledge',
					},
					{
						name: 'Pricing',
						href: '/pages/pricing',
					},
					{
						name: 'Blog',
						href: '/pages/blog',
					},
					{
						name: 'Mail Template',
						href: '/pages/mail',
					},
					{
						name: 'Blog',
						href: '/pages/blog',
					},
					{
						name: 'Miscellaneous',
						href: '/pages/miscellaneous',
					},
				],
			},
			{
				icon: <IoDocumentTextOutline size={IconSize.basic} />,
				name: 'Invoice',
				dropdown: [
					{
						name: 'list',
						href: '/invoice/list',
					},
					{
						name: 'Preview',
						href: '/invoice/preview',
					},
					{
						name: 'Edit',
						href: '/invoice/edit',
					},
					{
						name: 'Add',
						href: '/invoice/add',
					},
				],
			},
			{
				icon: <AiOutlineShoppingCart size={IconSize.basic} />,
				name: 'eCommerce',
				dropdown: [
					{
						name: 'Shop',
						href: '/ecommerce/shop',
					},
					{
						name: 'Details',
						href: '/ecommerce/details',
					},
					{
						name: 'Wish list',
						href: '/ecommerce/wish-list',
					},
					{
						name: 'Checkout',
						href: '/ecommerce/Checkout',
					},
				],
			},
			{
				icon: <AiOutlineUser size={IconSize.basic} />,
				name: 'User',
				dropdown: [
					{
						name: 'List',
						href: 'profile/list',
					},
					{
						name: 'View',
						href: 'profile/view',
					},
					{
						name: 'Edit',
						href: 'profile/Edit',
					},
				],
			},
		],
	},
	{
		title: 'USER INTERFACE',
		items: [
			{
				icon: <PiTextTThin size={IconSize.basic} />,
				name: 'Typography',
				href: '/typography',
			},
			{ icon: <BiDroplet size={IconSize.basic} />, name: 'Colors', href: '/colors' },
			{ icon: <AiOutlineEye size={IconSize.basic} />, name: 'Feather', href: '/feather' },
			{
				icon: <AiOutlineCreditCard size={IconSize.basic} />,
				name: 'Cards',
				dropdown: [
					{
						name: 'Basic',
						href: 'cards/basic',
					},
					{
						name: 'Advance',
						href: 'cards/advance',
					},
					{
						name: 'Statistics',
						href: 'cards/statistics',
					},
					{
						name: 'Analytics',
						href: 'cards/analytics',
					},
					{
						name: 'Actions',
						href: 'cards/actions',
					},
				],
			},
			{
				icon: <BiBox size={IconSize.basic} />,
				name: 'Components',
				dropdown: [
					{
						name: 'Alerts',
						href: 'components/alerts',
					},

					{
						name: 'Avatar',
						href: 'components/avatar',
					},

					{
						name: 'Badges',
						href: 'components/badges',
					},

					{
						name: 'Breadcrumbs',
						href: 'components/breadcrumbs',
					},

					{
						name: 'Buttons',
						href: 'components/buttons',
					},

					{
						name: 'Carousel',
						href: 'components/carousel',
					},

					{
						name: 'Collapse',
						href: 'components/collapse',
					},

					{
						name: 'Divider',
						href: 'components/divider',
					},
					{
						name: 'Dropdowns',
						href: 'components/dropdowns',
					},

					{
						name: 'List Group',
						href: 'components/list-group',
					},

					{
						name: 'Media Objects',
						href: 'components/media-objects',
					},

					{
						name: 'Modals',
						href: 'components/modals',
					},
					{
						name: 'Navs',
						href: 'components/navs',
					},
					{
						name: 'Pagination',
						href: 'components/pagination',
					},
					{
						name: 'Pill Badges',
						href: 'components/pill-badges',
					},
					{
						name: 'Pills',
						href: 'components/pills',
					},
					{
						name: 'Popovers',
						href: 'components/popovers',
					},
					{
						name: 'Progress',
						href: 'components/progress',
					},
					{
						name: 'Ratings',
						href: 'components/ratings',
					},
					{
						name: 'Spinner',
						href: 'components/spinner',
					},
					{
						name: 'Tabs',
						href: 'components/tabs',
					},
					{
						name: 'Timeline',
						href: 'components/timeline',
					},
					{
						name: 'Toasts',
						href: 'components/toasts',
					},
					{
						name: 'Tooltips',
						href: 'components/tooltips',
					},
				],
			},
			{
				icon: <AiOutlinePlusCircle size={IconSize.basic} />,
				name: 'Extension',
				dropdown: [
					{
						name: 'Sweet Alerts',
						href: 'extension/sweet-alerts',
					},

					{
						name: 'Block UI',
						href: 'extension/ui',
					},

					{
						name: 'Toastr',
						href: 'extension/toastr',
					},

					{
						name: 'Slider',
						href: 'extension/slider',
					},

					{
						name: 'Drag & Drop',
						href: 'extension/drag&drop',
					},
					{
						name: 'Tour',
						href: 'extension/tour',
					},

					{
						name: 'Clipboard',
						href: 'extension/cliboard',
					},

					{
						name: 'Context Menu',
						href: 'extension/context-menu',
					},
					{
						name: 'Swiper',
						href: 'extension/swiper',
					},

					{
						name: 'Tree view',
						href: 'extension/tree-view',
					},
					{
						name: 'i18n',
						href: 'extension/i18n',
					},
				],
			},
			{
				icon: <AiOutlineLayout size={IconSize.basic} />,
				name: 'Page Layouts',
				dropdown: [
					{
						name: 'Collapsed Menu',
						href: 'layouts/collapsed-menu',
					},

					{
						name: 'Boxed Layout',
						href: 'layouts/boxed-layout',
					},
					{
						name: 'Without Menu',
						href: 'layouts/without-menu',
					},

					{
						name: 'Layout Empty',
						href: 'layouts/layout-empty',
					},
					{
						name: 'Layout Blank',
						href: 'layouts/layout-blank',
					},
				],
			},
		],
	},
	{
		title: 'FORMS & TABLES',
		items: [
			{
				icon: <BiCopy size={IconSize.basic} />,
				name: 'Form Elements',

				dropdown: [
					{
						name: 'Input',
						href: '/form/elements/input',
					},
					{
						name: 'Input Groups',
						href: '/form/elements/input-groups',
					},
					{
						name: 'Input Mask',
						href: '/form/elements/input-mask',
					},
					{
						name: 'Textarea',
						href: '/form/elements/textarea',
					},
					{
						name: 'Checkbox',
						href: '/form/elements/checkbox',
					},
					{
						name: 'Radio',
						href: '/form/elements/radio',
					},
					{
						name: 'Switch',
						href: '/form/elements/switch',
					},
					{
						name: 'Select',
						href: '/form/elements/select',
					},
					{
						name: 'Number Input',
						href: '/form/elements/number-input',
					},
					{
						name: 'File Uploader',
						href: '/form/elements/file-uploader',
					},
					{
						name: 'Quill Editor',
						href: '/form/elements/quill-editor',
					},
					{
						name: 'Flatpicker',
						href: '/form/elements/flatpicker',
					},
					{
						name: 'Date & Time picker',
						href: '/form/elements/date&Time-picker',
					},
				],
			},
			{ icon: <BsBox size={IconSize.basic} />, name: 'Form Layout', href: '/form/layout' },
			{
				icon: <PiCodesandboxLogoLight size={IconSize.basic} />,
				name: 'Form Wizard',
				href: '/form/wizard',
			},
			{
				icon: <AiFillCheckCircle size={IconSize.basic} />,
				name: 'Form Validations',
				href: '/form/validation',
			},
			{
				icon: <BsArrowRepeat size={IconSize.basic} />,
				name: 'Form Repeater',
				href: '/form/repeater',
			},
			{
				icon: <HiOutlineServerStack size={IconSize.basic} />,
				name: 'Table',
				href: '/form/table',
			},
			{
				icon: <PiSquaresFour size={IconSize.basic} />,
				name: 'DataTables',
				href: '/form/data',
			},
		],
	},
	{
		title: 'CHARTS & MAPS',
		items: [
			{
				icon: <AiOutlinePieChart size={IconSize.basic} />,
				name: 'Charts',
				dropdown: [
					{
						name: 'Apex',
						href: '/charts/apex',
					},
					{
						name: 'ChartJS',
						href: '/charts/chartjs',
					},
				],
			},
			{ icon: <BsMap size={IconSize.basic} />, name: 'Google Maps', href: '/maps' },
		],
	},
	{
		title: 'OTHERS',
		items: [
			{
				icon: <GiHamburgerMenu size={IconSize.basic} />,
				name: 'Menu Levels',
				dropdown: [
					{
						name: 'Second Level',
						href: '/menu/levels/second',
					},
				],
			},
			{
				icon: <AiOutlineEyeInvisible size={IconSize.basic} />,
				name: 'Disabled Menu',
				href: '',
			},
			{
				icon: <IoDocumentTextOutline size={IconSize.basic} />,
				name: 'Documentation',
				href: '/menu/documentation',
			},
			{
				icon: <TbCircleTriangle size={IconSize.basic} />,
				name: 'Raise Support',
				href: '/menu/support',
			},
		],
	},
];

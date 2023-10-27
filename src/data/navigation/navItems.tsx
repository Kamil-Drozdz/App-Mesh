import { IconSize } from '@/lib/enums/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { useTranslation } from 'react-i18next';
import {
  AiFillCheckCircle,
  AiOutlineCalendar,
  AiOutlineCreditCard,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineLayout,
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
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
              href: `${BasicRoutes.DASHBOARD}${SubRoutes.ANALYTICS}`,
            },
            {
              name: t('eCommerce'),
              href: `${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`,
            },
          ],
        },
      ],
    },
    {
      title: t('APPS & PAGES'),
      items: [
        { icon: <HiOutlineEnvelope size={IconSize.basic} />, name: t('Email'), href: BasicRoutes.EMAIL },
        { icon: <HiOutlineChatBubbleLeft size={IconSize.basic} />, name: t('Chat'), href: BasicRoutes.CHAT },
        {
          icon: <BsCheck2Square size={IconSize.basic} />,
          name: t('Todo'),
          href: `${BasicRoutes.TODO}${SubRoutes.ALL}`,
        },
        {
          icon: <AiOutlineCalendar size={IconSize.basic} />,
          name: t('Calendar'),
          href: BasicRoutes.CALENDAR,
        },
        {
          icon: <IoDocumentTextOutline size={IconSize.basic} />,
          name: t('Pages'),
          dropdown: [
            {
              name: t('Authentication'),
              href: `${BasicRoutes.PAGES}${SubRoutes.AUTHENTICATION}`,
            },
            {
              name: t('Account Settings'),
              href: `${BasicRoutes.PAGES}${SubRoutes.SETTINGS}`,
            },
            {
              name: t('Profile'),
              href: `${BasicRoutes.PAGES}${SubRoutes.PROFILE}`,
            },
            {
              name: t('FAQ'),
              href: `${BasicRoutes.PAGES}${SubRoutes.FAQ}`,
            },
            {
              name: t('Knowledge Base'),
              href: `${BasicRoutes.PAGES}${SubRoutes.KNOWLEDGE}`,
            },
            {
              name: t('Pricing'),
              href: `${BasicRoutes.PAGES}${SubRoutes.PRICING}`,
            },
            {
              name: t('Blog'),
              href: `${BasicRoutes.PAGES}${SubRoutes.BLOG}`,
            },
            {
              name: t('Mail Template'),
              href: `${BasicRoutes.PAGES}${SubRoutes.MAIL}`,
            },
            {
              name: t('Miscellaneous'),
              href: `${BasicRoutes.PAGES}${SubRoutes.MISCELLANEOUS}`,
            },
          ],
        },
        {
          icon: <IoDocumentTextOutline size={IconSize.basic} />,
          name: t('Invoice'),
          dropdown: [
            {
              name: t('list'),
              href: `${BasicRoutes.INVOICE}${SubRoutes.LIST}`,
            },
            {
              name: t('Preview'),
              href: `${BasicRoutes.INVOICE}${SubRoutes.PREVIEW}`,
            },
            {
              name: t('Edit'),
              href: `${BasicRoutes.INVOICE}${SubRoutes.EDIT}`,
            },
            {
              name: t('Add'),
              href: `${BasicRoutes.INVOICE}${SubRoutes.ADD}`,
            },
          ],
        },
        {
          icon: <AiOutlineShoppingCart size={IconSize.basic} />,
          name: t('eCommerce'),
          dropdown: [
            {
              name: t('Shop'),
              href: `${BasicRoutes.ECOMMERCE}${SubRoutes.SHOP}`,
            },
            {
              name: t('Details'),
              href: `${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}`,
            },
            {
              name: t('Wish list'),
              href: `${BasicRoutes.ECOMMERCE}${SubRoutes.WISH_LIST}`,
            },
            {
              name: t('Checkout'),
              href: `${BasicRoutes.ECOMMERCE}${SubRoutes.CHECKOUT}`,
            },
          ],
        },
        {
          icon: <AiOutlineUser size={IconSize.basic} />,
          name: t('User'),
          dropdown: [
            {
              name: t('List'),
              href: `${BasicRoutes.PROFILE}${SubRoutes.LIST}`,
            },
            {
              name: t('View'),
              href: `${BasicRoutes.PROFILE}${SubRoutes.USER_VIEW}`,
            },
            {
              name: t('Edit'),
              href: `${BasicRoutes.PROFILE}${SubRoutes.USER_EDIT}`,
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
          href: BasicRoutes.TYPOGRAPHY,
        },
        { icon: <BiDroplet size={IconSize.basic} />, name: t('Colors'), href: BasicRoutes.COLORS },
        { icon: <AiOutlineEye size={IconSize.basic} />, name: t('Feather'), href: BasicRoutes.FEATHER },
        {
          icon: <AiOutlineCreditCard size={IconSize.basic} />,
          name: t('Cards'),
          dropdown: [
            {
              name: t('Basic'),
              href: `${BasicRoutes.CARDS}${SubRoutes.BASIC}`,
            },
            {
              name: t('Advance'),
              href: `${BasicRoutes.CARDS}${SubRoutes.ADVANCE}`,
            },
            {
              name: t('Statistics'),
              href: `${BasicRoutes.CARDS}${SubRoutes.STATISTICS}`,
            },
            {
              name: t('Analytics'),
              href: `${BasicRoutes.CARDS}${SubRoutes.ANALYTICS}`,
            },
            {
              name: t('Actions'),
              href: `${BasicRoutes.CARDS}${SubRoutes.ACTIONS}`,
            },
          ],
        },
        {
          icon: <BiBox size={IconSize.basic} />,
          name: t('Components'),
          dropdown: [
            {
              name: t('Alerts'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.ALERTS}`,
            },
            {
              name: t('Avatar'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.AVATAR}`,
            },
            {
              name: t('Badges'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.BADGES}`,
            },
            {
              name: t('Buttons'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.BUTTONS}`,
            },
            {
              name: t('Cards'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.CARDS}`,
            },
            {
              name: t('Carousel'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.CAROUSEL}`,
            },
            {
              name: t('Collapse'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.COLLAPSE}`,
            },

            {
              name: t('Divider'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.DIVIDER}`,
            },
            {
              name: t('Dropdowns'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.DROPDOWNS}`,
            },

            {
              name: t('List Group'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.LIST_GROUP}`,
            },

            {
              name: t('Media Objects'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.MEDIA_OBJECTS}`,
            },

            {
              name: t('Modals'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.MODALS}`,
            },
            {
              name: t('Navs'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.NAVS}`,
            },
            {
              name: t('Pagination'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.PAGINATION}`,
            },
            {
              name: t('Pill Badges'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.PILL_BADGES}`,
            },
            {
              name: t('Pills'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.PILLS}`,
            },
            {
              name: t('Popovers'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.POPOVERS}`,
            },
            {
              name: t('Progress'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.PROGRESS}`,
            },
            {
              name: t('Ratings'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.RATINGS}`,
            },
            {
              name: t('Spinner'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.SPINNER}`,
            },
            {
              name: t('Tabs'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.TABS}`,
            },
            {
              name: t('Timeline'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.TIMELINE}`,
            },
            {
              name: t('Toasts'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.TOASTS}`,
            },
            {
              name: t('Tooltips'),
              href: `${BasicRoutes.COMPONENTS}${SubRoutes.TOOLTIPS}`,
            },
          ],
        },
        {
          icon: <AiOutlinePlusCircle size={IconSize.basic} />,
          name: t('Extension'),
          dropdown: [
            {
              name: t('Sweet Alerts'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.SWEET_ALERTS}`,
            },
            {
              name: t('Block UI'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.UI}`,
            },
            {
              name: t('Toastr'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.TOASTR}`,
            },
            {
              name: t('Slider'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.SLIDER}`,
            },
            {
              name: t('Drag & Drop'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.DRAG_DROP}`,
            },
            {
              name: t('Tour'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.TOUR}`,
            },
            {
              name: t('Clipboard'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.CLIPBOARD}`,
            },
            {
              name: t('Context Menu'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.CONTEXT_MENU}`,
            },
            {
              name: t('Swiper'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.SWIPER}`,
            },
            {
              name: t('Tree view'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.TREE_VIEW}`,
            },
            {
              name: t('i18n'),
              href: `${BasicRoutes.EXTENSION}${SubRoutes.I18N}`,
            },
          ],
        },
        {
          icon: <AiOutlineLayout size={IconSize.basic} />,
          name: t('Page Layouts'),
          dropdown: [
            {
              name: t('Collapsed Menu'),
              href: `${BasicRoutes.LAYOUTS}${SubRoutes.COLLAPSED_MENU}`,
            },
            {
              name: t('Boxed Layout'),
              href: `${BasicRoutes.LAYOUTS}${SubRoutes.BOXED_LAYOUT}`,
            },
            {
              name: t('Without Menu'),
              href: `${BasicRoutes.LAYOUTS}${SubRoutes.WITHOUT_MENU}`,
            },
            {
              name: t('Layout Empty'),
              href: `${BasicRoutes.LAYOUTS}${SubRoutes.LAYOUT_EMPTY}`,
            },
            {
              name: t('Layout Blank'),
              href: `${BasicRoutes.LAYOUTS}${SubRoutes.LAYOUT_BLANK}`,
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
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_INPUT}`,
            },
            {
              name: t('Input Groups'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_INPUT_GROUPS}`,
            },
            {
              name: t('Input Mask'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_INPUT_MASK}`,
            },
            {
              name: t('Textarea'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_TEXTAREA}`,
            },
            {
              name: t('Checkbox'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_CHECKBOX}`,
            },
            {
              name: t('Radio'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_RADIO}`,
            },
            {
              name: t('Switch'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_SWITCH}`,
            },
            {
              name: t('Select'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_SELECT}`,
            },
            {
              name: t('Number Input'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_NUMBER_INPUT}`,
            },
            {
              name: t('File Uploader'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_FILE_UPLOADER}`,
            },
            {
              name: t('Quill Editor'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_QUILL_EDITOR}`,
            },
            {
              name: t('Flatpicker'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_FLATPICKER}`,
            },
            {
              name: t('Date & Time picker'),
              href: `${BasicRoutes.FORMS}${SubRoutes.ELEMENTS_DATE_TIME_PICKER}`,
            },
          ],
        },
        {
          icon: <BsBox size={IconSize.basic} />,
          name: t('Form Layout'),
          href: `${BasicRoutes.FORMS}${SubRoutes.LAYOUT}`,
        },
        {
          icon: <PiCodesandboxLogoLight size={IconSize.basic} />,
          name: t('Form Wizard'),
          href: `${BasicRoutes.FORMS}${SubRoutes.WIZARD}`,
        },
        {
          icon: <AiFillCheckCircle size={IconSize.basic} />,
          name: t('Form Validations'),
          href: `${BasicRoutes.FORMS}${SubRoutes.VALIDATION}`,
        },
        {
          icon: <BsArrowRepeat size={IconSize.basic} />,
          name: t('Form Repeater'),
          href: `${BasicRoutes.FORMS}${SubRoutes.REPEATER}`,
        },
        {
          icon: <HiOutlineServerStack size={IconSize.basic} />,
          name: t('Table'),
          href: `${BasicRoutes.FORMS}${SubRoutes.TABLE}`,
        },
        {
          icon: <PiSquaresFour size={IconSize.basic} />,
          name: t('DataTables'),
          href: `${BasicRoutes.FORMS}${SubRoutes.DATATABLES}`,
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
              href: `${BasicRoutes.CHARTS}${SubRoutes.CHARTS_APEX}`,
            },
            {
              name: t('ChartJS'),
              href: `${BasicRoutes.CHARTS}${SubRoutes.CHARTS_CHARTJS}`,
            },
          ],
        },
        { icon: <BsMap size={IconSize.basic} />, name: t('Google Maps'), href: `${BasicRoutes.MAPS}` },
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
              href: `${BasicRoutes.MENU}${SubRoutes.SECOND_LEVEL}`,
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
          href: `${BasicRoutes.MENU}${SubRoutes.DOCUMENTATION}`,
        },
        {
          icon: <TbCircleTriangle size={IconSize.basic} />,
          name: t('Raise Support'),
          href: `${BasicRoutes.MENU}${SubRoutes.RAISE_SUPPORT}`,
        },
      ],
    },
  ];
  return navItems;
};

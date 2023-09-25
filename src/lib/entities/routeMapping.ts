import { BasicRoutes, SubRoutes } from './routes';
import CalendarContent from '@/components/pages/Calendar/CalendarContent';
import ChatContent from '@/components/pages/Chat/ChatContent';
import AnalyticsContent from '@/components/pages/Dashboard/path/analytics/AnalyticsContent';
import EcommerceContent from '@/components/pages/Dashboard/path/ecommerce/EcommerceContent';
import EmailContent from '@/components/pages/Email/EmailContent';
import TodoContent from '@/components/pages/Todo/TodoContent';

interface RouteConfig {
	subPath: string;
	component: React.ComponentType<any>;
}

const ROUTE_MAPPING: Record<BasicRoutes, RouteConfig[]> = {
	[BasicRoutes.DASHBOARD]: [
		{ subPath: SubRoutes.ANALYTICS, component: AnalyticsContent },
		{ subPath: SubRoutes.ECOMMERCE, component: EcommerceContent },
	],
	[BasicRoutes.EMAIL]: [{ subPath: '', component: EmailContent }],
	[BasicRoutes.CHAT]: [{ subPath: '', component: ChatContent }],
	[BasicRoutes.TODO]: [{ subPath: SubRoutes.ALL, component: TodoContent }],
	[BasicRoutes.HOME]: [],
	[BasicRoutes.CALENDAR]: [{ subPath: '', component: CalendarContent }],
	[BasicRoutes.PAGES]: [],
	[BasicRoutes.INVOICE]: [],
	[BasicRoutes.ECOMMERCE]: [],
	[BasicRoutes.PROFILE]: [],
	[BasicRoutes.TYPOGRAPHY]: [],
	[BasicRoutes.COLORS]: [],
	[BasicRoutes.FEATHER]: [],
	[BasicRoutes.CARDS]: [],
	[BasicRoutes.COMPONENTS]: [],
	[BasicRoutes.EXTENSION]: [],
	[BasicRoutes.LAYOUTS]: [],
	[BasicRoutes.FORMS]: [],
	[BasicRoutes.CHARTS]: [],
	[BasicRoutes.MAPS]: [],
	[BasicRoutes.MENU]: [],
};
export const FULL_PATHS = Object.entries(ROUTE_MAPPING).flatMap(([basicRoute, routes]) => {
	return routes.map(({ subPath, component }) => ({ path: `${basicRoute}${subPath}`, component }));
});

// [BasicRoutes.PAGES]: [{subPaths: [SubRoutes.AUTHENTICATION, SubRoutes.SETTINGS, SubRoutes.PROFILE, SubRoutes.FAQ, SubRoutes.KNOWLEDGE, SubRoutes.PRICING, SubRoutes.BLOG, SubRoutes.MAIL, SubRoutes.MISCELLANEOUS], component: PagesContent }],
// [BasicRoutes.INVOICE]: [{subPaths: [SubRoutes.LIST, SubRoutes.PREVIEW, SubRoutes.EDIT, SubRoutes.ADD], component: InvoiceContent }],
// [BasicRoutes.ECOMMERCE]: [{subPaths: [SubRoutes.SHOP, SubRoutes.DETAILS, SubRoutes.WISH_LIST, SubRoutes.CHECKOUT], component: EcommerceContent }],
// [BasicRoutes.PROFILE]: [{subPaths: [SubRoutes.LIST, SubRoutes.VIEW, SubRoutes.EDIT], component: ProfileContent }],
// [BasicRoutes.TYPOGRAPHY]: [{subPaths: [], component: TypographyContent }],
// [BasicRoutes.COLORS]: [{subPaths: [], component: ColorsContent }],
// [BasicRoutes.FEATHER]: [{subPaths: [], component: FeatherContent }],
// [BasicRoutes.CARDS]: [{subPaths: [SubRoutes.BASIC, SubRoutes.ADVANCE, SubRoutes.STATISTICS, SubRoutes.ACTIONS], component: CardsContent }],
// [BasicRoutes.COMPONENTS]: [
// 	{
// 		paths: [SubRoutes.ALERTS, SubRoutes.AVATAR, SubRoutes.BADGES, SubRoutes.BREADCRUMBS, SubRoutes.BUTTONS, SubRoutes.CAROUSEL, SubRoutes.COLLAPSE, SubRoutes.DIVIDER, SubRoutes.DROPDOWNS, SubRoutes.LIST_GROUP, SubRoutes.MEDIA_OBJECTS, SubRoutes.MODALS, SubRoutes.NAVS, SubRoutes.PAGINATION, SubRoutes.PILL_BADGES, SubRoutes.PILLS, SubRoutes.POPOVERS, SubRoutes.PROGRESS, SubRoutes.RATINGS, SubRoutes.SPINNER, SubRoutes.TABS, SubRoutes.TIMELINE, SubRoutes.TOASTS, SubRoutes.TOOLTIPS],
// 		component: ComponentsContent,
// 	},
// ],
// [BasicRoutes.EXTENSION]: [{subPaths: [SubRoutes.SWEET_ALERTS, SubRoutes.UI, SubRoutes.TOASTR, SubRoutes.SLIDER, SubRoutes.DRAG_DROP, SubRoutes.TOUR, SubRoutes.CLIPBOARD, SubRoutes.CONTEXT_MENU, SubRoutes.SWIPER, SubRoutes.TREE_VIEW, SubRoutes.I18N], component: ExtensionContent }],
// [BasicRoutes.LAYOUTS]: [{subPaths: [SubRoutes.COLLAPSED_MENU, SubRoutes.BOXED_LAYOUT, SubRoutes.WITHOUT_MENU, SubRoutes.LAYOUT_EMPTY, SubRoutes.LAYOUT_BLANK], component: LayoutsContent }],
// [BasicRoutes.FORMS]: [
// 	{
// 		paths: [
// 			SubRoutes.ELEMENTS_INPUT,
// 			SubRoutes.ELEMENTS_INPUT_GROUPS,
// 			SubRoutes.ELEMENTS_INPUT_MASK,
// 			SubRoutes.ELEMENTS_TEXTAREA,
// 			SubRoutes.ELEMENTS_CHECKBOX,
// 			SubRoutes.ELEMENTS_RADIO,
// 			SubRoutes.ELEMENTS_SWITCH,
// 			SubRoutes.ELEMENTS_SELECT,
// 			SubRoutes.ELEMENTS_NUMBER_INPUT,
// 			SubRoutes.ELEMENTS_FILE_UPLOADER,
// 			SubRoutes.ELEMENTS_QUILL_EDITOR,
// 			SubRoutes.ELEMENTS_FLATPICKER,
// 			SubRoutes.ELEMENTS_DATE_TIME_PICKER,
// 			SubRoutes.LAYOUT,
// 			SubRoutes.WIZARD,
// 			SubRoutes.VALIDATION,
// 			SubRoutes.REPEATER,
// 			SubRoutes.TABLE,
// 			SubRoutes.DATATABLES,
// 		],
// 		component: FormsContent,
// 	},
// ],
// [BasicRoutes.CHARTS]: [{subPaths: [SubRoutes.CHARTS_APEX, SubRoutes.CHARTS_CHARTJS], component: ChartsContent }],
// [BasicRoutes.MAPS]: [{subPaths: [SubRoutes.GOOGLE_MAPS], component: MapsContent }],
// [BasicRoutes.MENU]: [{subPaths: [SubRoutes.SECOND_LEVEL, SubRoutes.DOCUMENTATION, SubRoutes.RAISE_SUPPORT], component: MenuContent }],

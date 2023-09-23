import ChatContent from '@/components/pages/Chat/ChatContent';
import EcommerceContent from '@/components/pages/Dashboard/path/ecommerce/EcommerceContent';
import EmailContent from '@/components/pages/Email/EmailContent';
import TodoContent from '@/components/pages/Todo/TodoContent';
import { BasicRoutes, SubRoutes } from './routes';

const ROUTE_MAPPING = {
	[BasicRoutes.DASHBOARD]: { paths: [SubRoutes.ANALYTICS, SubRoutes.ECOMMERCE], component: EcommerceContent },
	[BasicRoutes.EMAIL]: { paths: [], component: EmailContent },
	[BasicRoutes.CHAT]: { paths: [], component: ChatContent },
	[BasicRoutes.TODO]: { paths: [SubRoutes.ALL], component: TodoContent },
	// [BasicRoutes.CALENDAR]: { paths: [], component: CalendarContent },
	// [BasicRoutes.PAGES]: { paths: [SubRoutes.AUTHENTICATION, SubRoutes.SETTINGS, SubRoutes.PROFILE, SubRoutes.FAQ, SubRoutes.KNOWLEDGE, SubRoutes.PRICING, SubRoutes.BLOG, SubRoutes.MAIL, SubRoutes.MISCELLANEOUS], component: PagesContent },
	// [BasicRoutes.INVOICE]: { paths: [SubRoutes.LIST, SubRoutes.PREVIEW, SubRoutes.EDIT, SubRoutes.ADD], component: InvoiceContent },
	// [BasicRoutes.ECOMMERCE]: { paths: [SubRoutes.SHOP, SubRoutes.DETAILS, SubRoutes.WISH_LIST, SubRoutes.CHECKOUT], component: EcommerceContent },
	// [BasicRoutes.PROFILE]: { paths: [SubRoutes.LIST, SubRoutes.VIEW, SubRoutes.EDIT], component: ProfileContent },
	// [BasicRoutes.TYPOGRAPHY]: { paths: [], component: TypographyContent },
	// [BasicRoutes.COLORS]: { paths: [], component: ColorsContent },
	// [BasicRoutes.FEATHER]: { paths: [], component: FeatherContent },
	// [BasicRoutes.CARDS]: { paths: [SubRoutes.BASIC, SubRoutes.ADVANCE, SubRoutes.STATISTICS, SubRoutes.ACTIONS], component: CardsContent },
	// [BasicRoutes.COMPONENTS]: {
	// 	paths: [SubRoutes.ALERTS, SubRoutes.AVATAR, SubRoutes.BADGES, SubRoutes.BREADCRUMBS, SubRoutes.BUTTONS, SubRoutes.CAROUSEL, SubRoutes.COLLAPSE, SubRoutes.DIVIDER, SubRoutes.DROPDOWNS, SubRoutes.LIST_GROUP, SubRoutes.MEDIA_OBJECTS, SubRoutes.MODALS, SubRoutes.NAVS, SubRoutes.PAGINATION, SubRoutes.PILL_BADGES, SubRoutes.PILLS, SubRoutes.POPOVERS, SubRoutes.PROGRESS, SubRoutes.RATINGS, SubRoutes.SPINNER, SubRoutes.TABS, SubRoutes.TIMELINE, SubRoutes.TOASTS, SubRoutes.TOOLTIPS],
	// 	component: ComponentsContent,
	// },
	// [BasicRoutes.EXTENSION]: { paths: [SubRoutes.SWEET_ALERTS, SubRoutes.UI, SubRoutes.TOASTR, SubRoutes.SLIDER, SubRoutes.DRAG_DROP, SubRoutes.TOUR, SubRoutes.CLIPBOARD, SubRoutes.CONTEXT_MENU, SubRoutes.SWIPER, SubRoutes.TREE_VIEW, SubRoutes.I18N], component: ExtensionContent },
	// [BasicRoutes.LAYOUTS]: { paths: [SubRoutes.COLLAPSED_MENU, SubRoutes.BOXED_LAYOUT, SubRoutes.WITHOUT_MENU, SubRoutes.LAYOUT_EMPTY, SubRoutes.LAYOUT_BLANK], component: LayoutsContent },
	// [BasicRoutes.FORMS]: {
	// 	paths: [
	// 		SubRoutes.ELEMENTS_INPUT,
	// 		SubRoutes.ELEMENTS_INPUT_GROUPS,
	// 		SubRoutes.ELEMENTS_INPUT_MASK,
	// 		SubRoutes.ELEMENTS_TEXTAREA,
	// 		SubRoutes.ELEMENTS_CHECKBOX,
	// 		SubRoutes.ELEMENTS_RADIO,
	// 		SubRoutes.ELEMENTS_SWITCH,
	// 		SubRoutes.ELEMENTS_SELECT,
	// 		SubRoutes.ELEMENTS_NUMBER_INPUT,
	// 		SubRoutes.ELEMENTS_FILE_UPLOADER,
	// 		SubRoutes.ELEMENTS_QUILL_EDITOR,
	// 		SubRoutes.ELEMENTS_FLATPICKER,
	// 		SubRoutes.ELEMENTS_DATE_TIME_PICKER,
	// 		SubRoutes.LAYOUT,
	// 		SubRoutes.WIZARD,
	// 		SubRoutes.VALIDATION,
	// 		SubRoutes.REPEATER,
	// 		SubRoutes.TABLE,
	// 		SubRoutes.DATATABLES,
	// 	],
	// 	component: FormsContent,
	// },
	// [BasicRoutes.CHARTS]: { paths: [SubRoutes.CHARTS_APEX, SubRoutes.CHARTS_CHARTJS], component: ChartsContent },
	// [BasicRoutes.MAPS]: { paths: [SubRoutes.GOOGLE_MAPS], component: MapsContent },
	// [BasicRoutes.MENU]: { paths: [SubRoutes.SECOND_LEVEL, SubRoutes.DOCUMENTATION, SubRoutes.RAISE_SUPPORT], component: MenuContent },
};
export const FULL_PATHS = Object.entries(ROUTE_MAPPING).flatMap(([basicRoute, { paths, component }]) => {
	if (paths.length > 0) {
		return paths.map(subRoute => ({ path: `${basicRoute}${subRoute}`, component }));
	}
	return [{ path: basicRoute, component }];
});

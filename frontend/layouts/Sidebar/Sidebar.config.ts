import Career from '@assets/sidebarIcons/career.svg';
import Employees from '@assets/sidebarIcons/employees.svg';
import Feedback from '@assets/sidebarIcons/feedback.svg';
import Home from '@assets/sidebarIcons/home.svg';
import Projects from '@assets/sidebarIcons/projects.svg';
import Analytic from '@assets/sidebarIcons/analytic.svg';
import HR from '@assets/sidebarIcons/hr.svg';
import Rocket from '@assets/sidebarIcons/rocket.svg';
import Research from '@assets/sidebarIcons/research.svg';
import Coin from '@assets/sidebarIcons/coin.svg';

export type sidebarItemColorTypes = 'fill' | 'stroke';

interface ISidebarItem {
	label: string;
	href: string;
	validateEndsWith?: boolean;
	icon: React.FC<any>;
	colorType: sidebarItemColorTypes;
}

const SIDEBAR_ITEMS: ISidebarItem[] = [
	{
		label: 'Главная',
		href: '/dashboard',
		icon: Home,
		colorType: 'stroke',
		validateEndsWith: true,
	},
	{
		label: 'Проекты',
		href: '/projects',
		icon: Projects,
		colorType: 'fill',
	},
	{
		label: 'Коллеги',
		href: '/employees',
		icon: Employees,
		colorType: 'stroke',
	},
	{
		label: 'Справочная',
		href: '/help',
		icon: Feedback,
		colorType: 'fill',
	},
	{
		label: 'Путь в компании',
		href: '/career',
		icon: Career,
		colorType: 'stroke',
	},
];

const SIDEBAR_ITEMS_HR: ISidebarItem[] = [
	{
		label: 'Сотрудники',
		href: '/hr/employees',
		icon: Employees,
		colorType: 'stroke',
	},
	{
		label: 'Обратная связь',
		href: '/hr/feedback',
		icon: Feedback,
		colorType: 'fill',
	},
];

const SIDEBAR_ITEMS_ADMIN: ISidebarItem[] = [
	{
		label: 'Аналитика',
		href: '/admin',
		icon: Analytic,
		colorType: 'stroke',
		validateEndsWith: true,
	},
	{
		label: 'Все сотрудники',
		href: '/admin/employees',
		icon: Employees,
		colorType: 'stroke',
	},
	{
		label: 'HR',
		href: '/admin/humanresources',
		icon: HR,
		colorType: 'fill',
	},
];

const SIDEBAR_ITEMS_DOC: ISidebarItem[] = [
	{
		label: 'С чего начать?',
		href: '#start',
		icon: Rocket,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Исследования',
		href: '#second',
		icon: Research,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Экономика проектов',
		href: '#third',
		icon: Coin,
		colorType: 'stroke',
		validateEndsWith: true,
	},
];

export {
	SIDEBAR_ITEMS,
	SIDEBAR_ITEMS_HR,
	SIDEBAR_ITEMS_ADMIN,
	SIDEBAR_ITEMS_DOC,
};

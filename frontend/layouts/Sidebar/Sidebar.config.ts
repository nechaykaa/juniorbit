import Achievement from '@assets/sidebarIcons/achievement.svg';
import Career from '@assets/sidebarIcons/career.svg';
import Employees from '@assets/sidebarIcons/employees.svg';
import Feedback from '@assets/sidebarIcons/feedback.svg';
import Home from '@assets/sidebarIcons/home.svg';
import Projects from '@assets/sidebarIcons/projects.svg';
import Analytic from '@assets/sidebarIcons/analytic.svg';
import HR from '@assets/sidebarIcons/hr.svg';

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
		href: '/',
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
	{
		label: 'Достижения',
		href: '/achievements',
		icon: Achievement,
		colorType: 'fill',
	},
];

const SIDEBAR_ITEMS_HR: ISidebarItem[] = [
	{
		label: 'Главная',
		href: '/hr',
		icon: Home,
		colorType: 'stroke',
		validateEndsWith: true,
	},
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
		href: '/hr',
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

export {
	SIDEBAR_ITEMS,
	SIDEBAR_ITEMS_HR,
	SIDEBAR_ITEMS_ADMIN,
};

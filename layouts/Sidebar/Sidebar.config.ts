import Achievement from '@assets/sidebarIcons/achievement.svg';
import Career from '@assets/sidebarIcons/career.svg';
import Employees from '@assets/sidebarIcons/employees.svg';
import Feedback from '@assets/sidebarIcons/feedback.svg';
import Home from '@assets/sidebarIcons/home.svg';
import Projects from '@assets/sidebarIcons/projects.svg';

type sidebarItemColorTypes = 'fill' | 'stroke';

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
	},
	{
		label: 'Проекты',
		href: '/projects',
		icon: Projects,
		colorType: 'fill',
	},
	{
		label: 'Сотрудники',
		href: '/employees',
		icon: Employees,
		colorType: 'stroke',
	},
	{
		label: 'Обратная связь',
		href: '/feedback',
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

export default SIDEBAR_ITEMS;
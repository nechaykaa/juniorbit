import Achievement from '@assets/sidebarIcons/achievements.svg';
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
		href: '#',
		icon: Home,
		colorType: 'stroke',
	},
];

export default SIDEBAR_ITEMS;

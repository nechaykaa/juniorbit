import TagCard from '@/components/help/TagCard';
import SearchPanel from '@/components/help/SearchPanel';
import SidebarLayout from '@/layouts/SidebarLayout';

import ValuesCard from '@assets/values.svg';
import ContractWork from '@assets/contractWork.svg';
import Regions from '@assets/regions.svg';
import ProjectsInfo from '@assets/projectsInfo.svg';

const TAGS = [
	{
		label: 'Как оформлять документы?',
		filled: true,
	},
	{
		label: 'Как взять отпуск?',
		filled: false,
	},
	{
		label: 'Роспатриот',
		filled: true,
	},
	{
		label: 'Как забронировать переговорку?',
		filled: false,
	},
	{
		label: 'У кого просить помощи?',
		filled: false,
	},
	{
		label: 'Где взять доступ?',
		filled: false,
	},
	{
		label: 'Большая перемена',
		filled: true,
	},
	{
		label: 'Где ближайшая парковка?',
		filled: false,
	},
];

const HelpPage = (): JSX.Element => {
	return (
		<SidebarLayout className='p-20'>
			<h1 className='font-bold text-5xl text-center mt-14'>
				Найди
				{' '}
				<span className='text-primary'>
					всё
				</span>
				{' '}
				, что тебе нужно
			</h1>
			<SearchPanel />
			<div className='mt-3 flex flex-wrap gap-2'>
				{TAGS.map((i, num) => (
					<TagCard key={num} {...i} />
				))}
			</div>
			<h2 className='font-bold text-4xl mt-16'>
				База знаний
			</h2>
			<div className='grid grid-cols-2'>
				<ValuesCard />
				<ContractWork />
				<Regions />
				<ProjectsInfo />
			</div>
		</SidebarLayout>
	);
};

export default HelpPage;

import SidebarLayout from '@/layouts/SidebarLayout';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';
import ProjectCard from '@/components/projects/ProjectCard';
import { useQuery } from 'react-query';
import { getProjects } from '@/shared/api/projects';

const MenuItems = [
	{
		label: 'Все подразделения',
		link: '#?tab=1',
	},
	{
		label: 'РЕМЦ',
		link: '#?tab=2',
	},
	{
		label: 'Роскультцентр',
		link: '#',
	},
	{
		label: 'Роспатриот',
		link: '#',
	},
	{
		label: 'ЦСМС',
		link: '#',
	},
];

const Projects = (): JSX.Element => {
	const { data } = useQuery('get_projects', getProjects);
	
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Проекты
			</h1>
			<div>
				<TextHorizontalMenu className='' items={MenuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						{data?.map((i, num) => (
							<ProjectCard 
								key={num}
								label={i.title}
								subtitle={i.subtitle}
								description={i.description}
								icon={i.imageSrc} />
						))}
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default Projects;

import SidebarLayout from '@/layouts/SidebarLayout';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';
import ProjectCard from '@/components/projects/ProjectCard';
import { useQuery } from 'react-query';
import { getProjects } from '@/shared/api/projects';
import { useMemo, useState } from 'react';

const MenuItems = [
	{
		label: 'Все подразделения',
		link: '#',
	},
	{
		label: 'РЕМЦ',
		link: '#',
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
	const [menuItem, setMenuItem] = useState<string>('Все подразделения');
	
	const { data } = useQuery('get_projects', getProjects);

	const result = useMemo(() => {
		if(!data)
			return [];

		const d = data;

		if(menuItem == 'Все подразделения')
			return d;
		else
			return d.filter((i) => i.subtitle === menuItem);
	}, [menuItem, data]);
	
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Проекты
			</h1>
			<div>
				<TextHorizontalMenu onMenuItemChanged={setMenuItem} className='' items={MenuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						{result.map((i, num) => (
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

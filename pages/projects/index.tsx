import SidebarLayout from '@/layouts/SidebarLayout';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';
import ProjectCard from '@/components/projects/ProjectCard';

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
					<div className='flex mb-[17px]'>
						<ProjectCard 
							label='Реализация национального
							проекта «Образование»'
							subtitle='РЕМЦ'
							description='Развитие транспортной инфраструктуры, решение экологических вопросов, 
							добровольческие инициативы,
							создание студенческих бесплатных коворкингов и другие'
							icon='/assets/cardIcons/project1.png' 
							className='mr-[22px]' />
						<ProjectCard 
							label='Всероссийский урбанистический
							хакатон «Города»'
							subtitle='Роскультцентр'
							description='Команды-победители получат поддержку, в том числе 
							экспертную и финансовую, на реализацию своего 
							проекта в 2022-2026 году'
							icon='/assets/cardIcons/project2.png' />
					</div>
					<div className='flex mb-[17px]'>
						<ProjectCard 
							label='Фест-форум
							«Российская креативная неделя»'
							subtitle='Роскультцентр'
							description='8 обучающих роликов с ведущими экспертами - представителямигосударственных
							и общественных организаций. Спикеры рассказываюто возможностях поддержки'
							icon='/assets/cardIcons/project3.png'
							className='mr-[22px]' />
						<ProjectCard 
							label='Секретариат Всероссийского
							конкурса молодёжных проектов'
							subtitle='РЕМЦ'
							description='Cоздание международной коммуникационной площадки для дружественного,
							профессионального и гуманитарного взаимодействия молодых людей государств'
							icon='/assets/cardIcons/project4.png' />
					</div>
					<div className='flex mb-[17px]'>
						<ProjectCard 
							label='Мероприятие
							“Роспатриот”'
							subtitle='Роспатриот'
							description='Мероприятия в сфере патриотического воспитания,
							 реализация «Патриотическое воспитание граждан Российской Федерации»'
							icon='/assets/cardIcons/project5.png'
							className='mr-[22px]' />
						<ProjectCard 
							label='Мероприятие
							“Росмолодёжь.Добро”'
							subtitle='Роспатриот'
							description='Мероприятия в сфере добровольчества (волонтёрства),
							реализация федерального проекта «Социальная активность»'
							icon='/assets/cardIcons/project6.png' />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default Projects;

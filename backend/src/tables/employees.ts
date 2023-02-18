import { IProject } from "./projects";

interface IEmployee {
	id: number;
	fio: string;
	email: string;
	job: string;
	phone: string;
	tg: string;
	mentorId: 1 | 2; // 1 - Denis    2 - Vlad
	hrId: 1 | 2; // 1 - Alex      2 - Egor
	projectId: 0 | 1 | 2 | 3 | 4 | 5;
	project: IProject;
	registrationDate: string;
}

const EMPLOYEES_TABLE: IEmployee[] = [
	{
		id: 0,
		fio: 'Александр Исаков',
		email: '',
		job: 'Начальник отдела дизайна',
		phone: '',
		tg: '',
		mentorId: 1,
		hrId: 2,
		projectId: 5,
		project: {
			id: 5,
			title: 'Мероприятие “Росмолодёжь.Добро”',
			subtitle: 'Роспатриот',
			description: `
			Мероприятия в сфере добровольчества (волонтёрства), реализация федерального проекта «Социальная активность»
			`,
			imageSrc: '/assets/cardIcons/project6.png',
		},
		registrationDate: '2023-02-18T12:37:54.837Z',
	},
	{
		id: 1,
		fio: 'Мартин Нечаев',
		email: '',
		job: 'Главный программист',
		phone: '',
		tg: '',
		mentorId: 2,
		hrId: 1,
		projectId: 3,
		project: {
			id: 3,
			title: 'Секретариат Всероссийского конкурса молодёжных проектов',
			subtitle: 'РЕМЦ',
			description: `
				Cоздание международной коммуникационной площадки для дружественного, профессионального
				и гуманитарного взаимодействия молодых людей государств
			`,
			imageSrc: '/assets/cardIcons/project4.png',
		},
		registrationDate: '2023-02-18T12:37:54.837Z',
	},
	{
		id: 2,
		fio: 'Никита Касинцев',
		email: '',
		job: 'Главный менеджер',
		phone: '',
		tg: '',
		mentorId: 1,
		hrId: 2,
		projectId: 0,
		project: {
			id: 0,
			title: 'Реализация национального проекта «Образование»',
			subtitle: 'РЕМЦ',
			description: `
				Развитие транспортной инфраструктуры, решение экологических вопросов,
				добровольческие инициативы, создание студенческих бесплатных коворкингов и другие
			`,
			imageSrc: '/assets/cardIcons/project1.png',
		},
		registrationDate: '2023-02-18T12:37:54.837Z',
	},
];

export default EMPLOYEES_TABLE;

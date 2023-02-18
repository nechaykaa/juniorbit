"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FEEDBACK_TABLE = [
    {
        id: 0,
        user: {
            id: 0,
            fio: 'Александр Исаков',
            email: '',
            job: 'Начальник отдела дизайна',
            phone: '',
            tg: 'alexis.design',
            mentorId: 0,
            hrId: 1,
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
        answers: {
            mentorName: 'Денис Хромов',
            firstWorkDay: '2023-02-18T12:37:54.837Z',
            rate: 8,
            youUnderstandWork: 'Да',
            managerSetsTasks: 'Круто! Классно! Люблю Росмолодёжь',
            areDifficulty: 'Нет, совсем не сложно'
        }
    },
    {
        id: 1,
        user: {
            id: 1,
            fio: 'Мартин Нечаев',
            email: '',
            job: 'Главный программист',
            phone: '',
            tg: 'martini_nechav',
            mentorId: 1,
            hrId: 0,
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
        answers: {
            mentorName: 'Илья Огнев',
            firstWorkDay: '2023-02-18T12:37:54.837Z',
            rate: 10,
            youUnderstandWork: 'Да, всё отлично',
            managerSetsTasks: 'Задачи отлично понимаю, всегда таким хотел заниматься',
            areDifficulty: 'Вообще легко'
        }
    },
    {
        id: 2,
        user: {
            id: 2,
            fio: 'Никита Касинцев',
            email: '',
            job: 'Главный менеджер',
            phone: '',
            tg: 'nikita_cas',
            mentorId: 0,
            hrId: 1,
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
        answers: {
            mentorName: 'Денис Хромов',
            firstWorkDay: '2023-02-18T12:37:54.837Z',
            rate: 5,
            youUnderstandWork: 'Не сказал бы',
            managerSetsTasks: 'Задачи не совсем понимаю',
            areDifficulty: 'Да, трудновато'
        }
    },
];
exports.default = FEEDBACK_TABLE;

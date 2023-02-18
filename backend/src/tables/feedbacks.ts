interface IFeedback {
	id: number;
	answers: {
		mentorName: string;
		firstWorkDay: string;
		rate: number;
		youUnderstandWork: string;
		managerSetsTasks: string;
		areDifficulty: string;
	}
}

const FEEDBACK_TABLE: IFeedback[] = [
	{
		id: 0,
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

export default FEEDBACK_TABLE;

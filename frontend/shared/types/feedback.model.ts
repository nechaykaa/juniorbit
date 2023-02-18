import IEmployee from './employee.model';

export interface IAnswer {
	mentorName: string;
	firstWorkDay: string;
	rate: number;
	youUnderstandWork: string;
	managerSetsTasks: string;
	areDifficulty: string;
}

interface IFeedback {
	id: number;
	user: IEmployee;
	answers: {
		mentorName: string;
		firstWorkDay: string;
		rate: number;
		youUnderstandWork: string;
		managerSetsTasks: string;
		areDifficulty: string;
	}
}

export default IFeedback;

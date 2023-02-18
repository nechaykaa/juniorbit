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

const FEEDBACK_TABLE: IFeedback[] = [];

export default FEEDBACK_TABLE;

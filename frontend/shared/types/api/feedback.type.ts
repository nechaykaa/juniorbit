export type getFeedbackQueryKey = [
	{
		id: number;
	},	
	'get_feedback',
];

export interface IGetFeedbackRequest {
	queryKey: getFeedbackQueryKey;
}

export interface ICreateFeedbackResponse {
	id: number;
}

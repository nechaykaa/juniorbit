import { ICreateFeedbackResponse, IGetFeedbackRequest } from '../types/api/feedback.type';
import IFeedback, { IAnswer } from '../types/feedback.model';
import instance from './axios';

export const getFeedbacks = (): Promise<IFeedback[]> => {
	return instance.get('/api/feedbacks').then((res) => res.data);
};

export const getFeedbackById = ({ queryKey }: IGetFeedbackRequest): Promise<IFeedback> => {
	return instance.get(`/api/feedbacks/${queryKey[0].id}`).then((res) => res.data);
};

export const createFeedback = (data: IAnswer): Promise<ICreateFeedbackResponse> => {
	return instance.post('/api/feedbacks', data).then((res) => res.data);
};

import IEmployee from '../types/employee.model';
import instance from './axios';

export const getMe = (): Promise<IEmployee> => {
	return instance.get('/api/me').then((res) => res.data);
};

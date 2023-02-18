import IEmployee from '../types/employee.model';
import instance from './axios';

export const getEmployees = (): Promise<IEmployee[]> => {
	return instance.get('/api/employees').then((res) => res.data);
};

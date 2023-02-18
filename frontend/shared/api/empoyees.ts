import { ICreateEmployeeResponse } from '../types/api/employee.type';
import IEmployee from '../types/employee.model';
import instance from './axios';

export const getEmployees = (): Promise<IEmployee[]> => {
	return instance.get('/api/employees').then((res) => res.data);
};

export const createEmployee = (data: Omit<IEmployee, 'id' | 'project' | 'registrationDate'>):
	Promise<ICreateEmployeeResponse> => {
	return instance.post('/api/employees', data).then((res) => res.data);
};

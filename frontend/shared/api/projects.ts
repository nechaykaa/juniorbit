import IProject from '../types/project.model';
import instance from './axios';

export const getProjects = (): Promise<IProject[]> => {
	return instance.get('/api/projects').then((res) => res.data);
};

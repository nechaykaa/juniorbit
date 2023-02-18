import IProject from './project.model';

interface IEmployee {
	id: number;
	fio: string;
	email: string;
	job: string;
	phone: string;
	tg: string;
	mentorId: 0 | 1;
	hrId: 0 | 1; 
	projectId: 0 | 1 | 2 | 3 | 4 | 5;
	project: IProject;
	registrationDate: string;
}

export default IEmployee;

interface IEmployee {
	id: number;
	fio: string;
	email: string;
	job: string;
	phone: string;
	tg: string;
	mentorId: 1 | 2; // 1 - Denis    2 - Vlad
	hrId: 1 | 2; // 1 - Alex      2 - Egor
	projectId: 1 | 2 | 3 | 4 | 5 | 6;
	registrationDate: string;
}

export default IEmployee;

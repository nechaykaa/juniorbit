interface IProject {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	imageSrc: string;
}

const PROJECTS_TABLE: IProject[] = [];

export default PROJECTS_TABLE;

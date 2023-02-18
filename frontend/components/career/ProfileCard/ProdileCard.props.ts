import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fio: string;
	startDate: Date;
	job: string;
	project: string;
}

export default Props;

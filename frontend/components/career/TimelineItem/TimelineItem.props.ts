import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	step: number;
	label: ReactNode;
	date: Date;
	isActive: boolean;
}

export default Props;

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    startDate?: Date;
    name: string;
    description: string;
    Icon?: React.FC;
	label?: string;
}

export default Props;

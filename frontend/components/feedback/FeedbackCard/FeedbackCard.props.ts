import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    duration: string;
    name: string;
    description: string;
    Icon?: React.FC;
	feedbackId: number;
}

export default Props;

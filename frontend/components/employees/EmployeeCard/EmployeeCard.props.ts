import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    duration: string;
    name: string;
    description: string;
    Icon?: React.FC;
}

export default Props;

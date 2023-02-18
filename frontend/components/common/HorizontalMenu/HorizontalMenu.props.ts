import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	items: string[],
	initialValue: number,
	selectedColor?: string;
	selectedTextColor?: string;
	textClassName?: string;
	onItemChanged?: (newValue: number) => void;
}

export default Props;

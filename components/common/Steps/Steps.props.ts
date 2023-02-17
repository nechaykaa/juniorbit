import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	steps: string[];
	activeStep: number;
	onChangeStep: (stepId: number) => void;
}

export default Props;

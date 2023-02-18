import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface IMenuItem {
	label: string;
	link: string;
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: IMenuItem[];
	onMenuItemChanged?: (item: string) => void;
}

export default Props;

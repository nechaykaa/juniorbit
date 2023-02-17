import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { sidebarItemColorTypes } from '../../../shared/consts/sidebarItems';

interface Props extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	Icon: React.FC<any>;
	label: string;
	colorType: sidebarItemColorTypes;
	validateEndsWith?: boolean;
};

export default Props;

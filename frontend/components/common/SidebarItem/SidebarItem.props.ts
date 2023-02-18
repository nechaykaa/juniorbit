import { sidebarItemColorTypes } from '@/layouts/Sidebar/Sidebar.config';
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	Icon: React.FC<any>;
	label: string;
	colorType: sidebarItemColorTypes;
	validateEndsWith?: boolean;
};

export default Props;

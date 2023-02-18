import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import useMenu from '../../../stores/useMenu';
import Props from './SidebarItem.props';

const SidebarItem: React.FC<Props> = ({ className = '', ref, label, Icon, href = '', validateEndsWith, colorType, ...props }) => {
	const setIsMenuOpened = useMenu((state) => state.setIsMenuOpened);

	const router = useRouter();

	const validateUrl = useMemo(() => {
		if(typeof window === 'undefined')
			return false;
		else if(!validateEndsWith && router.pathname.includes(href))
			return true;
		else if(validateEndsWith && router.pathname.endsWith(href))
			return true;
		else
			return false;
	}, [validateEndsWith, href, router]);

	return (
		<Link
			href={href}
			onClick={() => setIsMenuOpened(false)}
			className={className + ' grid grid-cols-[24px_1fr] items-center gap-[14px] h-16 pl-16'}
			{...props}
		>
			<Icon
				style={validateUrl ? {
					fill: colorType === 'fill' ? '#8569D0' : '',
					stroke: colorType === 'stroke' ? '#8569D0' : '',
				} : {
					fill: colorType === 'fill' ? '#8E8E8E' : '',
					stroke: colorType === 'stroke' ? '#8E8E8E' : '',
				}} />
			<span className={validateUrl ? 'text-primary' : 'text-[#8E8E8E]' + ' text-BodyText_16'}>
				{label}
			</span>
		</Link>
	);
};

export default SidebarItem;

import Link from 'next/link';
import useMenu from '../../../stores/useMenu';
import Props from './SidebarItem.props';

const SidebarItem: React.FC<Props> = ({ className = '', ref, label, Icon, href = '', validateEndsWith, colorType, ...props }) => {
	const setIsMenuOpened = useMenu((state) => state.setIsMenuOpened);

	function validateUrl() {
		if(typeof window === 'undefined')
			return false;
		else if(!validateEndsWith && document.URL.includes(href))
			return true;
		else if(validateEndsWith&& document.URL.endsWith(href))
			return true;
		else
			return false;
	}

	return (
		<Link
			href={href}
			onClick={() => setIsMenuOpened(false)}
			className={className + ' grid grid-cols-[24px_1fr] items-center gap-[14px] h-16 pl-16'}
			{...props}
		>
			<Icon
				style={validateUrl() ? {
					fill: colorType === 'fill' ? '#FF0066' : '',
					stroke: colorType === 'stroke' ? '#FF0066' : '',
				} : {
					fill: colorType === 'fill' ? '#8E8E8E' : '',
					stroke: colorType === 'stroke' ? '#8E8E8E' : '',
				}} />
			<span
				className={validateUrl() ? 'text-primary' : 'text-[#8E8E8E]' + ' text-BoldBodyText_16'}
			>
				{label}
			</span>
		</Link>
	);
};

export default SidebarItem;

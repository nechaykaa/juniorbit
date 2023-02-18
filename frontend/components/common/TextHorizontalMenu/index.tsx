import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Props from './HorizontalMenu.props';

const TextHorizontalMenu: React.FC<Props> = ({ className = '', items, onMenuItemChanged, ...props }) => {
	const router = useRouter();
	
	const [selectedMenuItem, setSelectedMenuTab] = useState(0);

	items.forEach((i, num) => {
		if(router.pathname.startsWith(i.link))
			setSelectedMenuTab(num);
	});

	useEffect(() => {
		if(onMenuItemChanged)
			onMenuItemChanged(items[selectedMenuItem].label);
	}, [selectedMenuItem]);

	return (
		<div className={className + ' flex gap-12 items-center'} {...props}>
			{items.map((i, num) => (
				<Link
					key={num} 
					href={i.link} 
					onClick={() => setSelectedMenuTab(num)}
					className={'text-heading-2 ' + (selectedMenuItem !== num ? 'text-grey' : 'text-primary')}
				>
					{i.label}
				</Link>
			))}
		</div>
	);
};

export default TextHorizontalMenu;

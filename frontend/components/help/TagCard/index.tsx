import Props from './TagCard.props';
import CrossSm from '@assets/cross_sm.svg';
import { useMemo } from 'react';

const TagCard: React.FC<Props> = ({ className = '', label, filled, ...props }) => {
	const styleClass = useMemo(() => {
		if(filled) 
			return 'bg-[#EEE8FF] grid-cols-[1fr_18px] gap-2.5';
		else
			return 'bg-[#F9F9F9]';
	}, [filled]);

	return (
		<div
			className={`${className} py-2 px-4 rounded-xl grid items-center ${styleClass}`}
			{...props}
		>
			<p className={filled ? 'text-primary' : 'text-[#9F9F9F]'}>
				{label}
			</p>
			{filled && (
				<CrossSm className='cursor-pointer' />
			)}
		</div>
	);
};

export default TagCard;

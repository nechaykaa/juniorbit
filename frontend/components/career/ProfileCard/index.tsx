import Props from './ProdileCard.props';

import Avatar from '@assets/isakov.svg';
import { intervalToDuration } from 'date-fns';

const ProfileCard: React.FC<Props> = ({ className = '', startDate, fio, job, project, ...props }) => {
	const interval = intervalToDuration({
		start: startDate,
		end: new Date(Date.now()),
	});

	return (
		<div className={`${className} grid grid-cols-[90px_1fr] gap-[18px]`} {...props}>
			<Avatar />
			<div>
				<p className='text-[#8C888A] font-semibold mb-[6px]'>
					В компании 
					{` ${interval.days} `}
					дней
				</p>
				<p className='font-bold text-2xl mb-0.5'>
					{fio}
				</p>
				<p className='text-[#8C888A] font-semibold'>
					{job}
					{' • '}
					{project}
				</p>
			</div>
			<p
				className='font-bold text-xl'
				style={{
					gridColumnStart: 1,
					gridColumnEnd: 3,
				}}
			>
				<span className='text-primary'>
					Уровень 2.0
				</span>
				{' -> 2.1'}
			</p>
		</div>
	);
};

export default ProfileCard;

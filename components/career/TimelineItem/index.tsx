import Props from './TimelineItem.props';
import { format } from 'date-fns';

const TimelineItem: React.FC<Props> = ({ className = '', step, label, date, isActive, ...props }) => {
	return (
		<div className={className + ' grid grid-cols-[70px_1fr] grid-rows-[1fr_auto] gap-x-[30px] gap-y-1 h-fit'} {...props}>
			<div
				className={`border-2 rounded-full w-[70px] h-[70px] flex items-center justify-center bg-white
					${isActive && 'border-primary'}`}
				style={{
					gridRowStart: 1,
					gridRowEnd: 3,
				}}
			>
				<p className='font-semibold text-xl'>
					{step.toFixed(1)}
				</p>
			</div>
			{label}
			<p className='text-[#AAAAAA] text-BodyText_18'>
				{format(date, 'dd.MM.yyyy')}
			</p>
		</div>
	);
};

export default TimelineItem;

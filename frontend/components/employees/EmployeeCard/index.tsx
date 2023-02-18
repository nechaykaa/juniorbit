import { intervalToDuration } from 'date-fns';
import Props from './EmployeeCard.props';

const ProjectCard: React.FC<Props> = ({ startDate, label, name, description, Icon, ...props }) => {
	const interval = intervalToDuration({
		start: startDate || new Date(Date.now()),
		end: new Date(Date.now()),
	});

	return (
		<button
			className='bg-white rounded-[20px]'
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			{...props}
		>
			<div className='p-[20px] w-[474px]'>
				<div className='flex mb-4 justify-between'>
					<div>
						{startDate ? (
							<p className='text-BodyText_16 text-primary text-left'>
								{'В компании '}
								{interval.days}
								{' дней'}
							</p>
						) : (
							<p className='text-BodyText_16 text-primary text-left'>
								{label}
							</p>
						)}
						<p className='text-heading-2 text-black text-left'>
							{name}
						</p>
					</div>
					<div>
						{Icon && <Icon />}
					</div>
				</div>
				<p className='text-BodyText_16 text-[12px] text-darkGrey text-left'>
					{description}
				</p>
			</div>
		</button>
	);
};

export default ProjectCard;

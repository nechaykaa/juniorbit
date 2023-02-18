import Props from './FeedbackCard.props';
import Button from '@/components/common/Button';

const FeedbackCard: React.FC<Props> = ({ duration, name, description, Icon, ...props }) => {
	return (
		<button
			className='bg-white rounded-[20px]'
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			{...props}
		>
			<div className='p-[20px] w-[474px]'>
				<div className='flex justify-between'>
					<div>
						<p className='text-BodyText_16 text-primary text-left mb-[4px]'>
							{duration}
						</p>
						<p className='text-heading-2 text-black text-left mb-[2px]'>
							{name}
						</p>
					</div>
					<div>
						{Icon && <Icon />}
					</div>
				</div>
				<p className='text-BodyText_16 text-[12px] text-darkGrey text-left mb-[16px]'>
					{description}
				</p>
				<Button
					variant='filled'
					color='primary'
					className='w-[309px] float-left'
				>
					Посмотреть результаты опроса
				</Button>
			</div>
		</button>
	);
};

export default FeedbackCard;

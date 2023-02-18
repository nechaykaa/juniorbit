import Props from './FeedbackCard.props';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const FeedbackCard: React.FC<Props> = ({ duration, name, description, Icon, feedbackId, ...props }) => {
	const Button = dynamic(() => import('@/components/common/Button'));

	const router = useRouter();

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
					className='w-[309px] float-left mb-3'
					onClick={() => router.push(`/hr/feedback/${feedbackId}`)}
				>
					Посмотреть результаты опроса
				</Button>
			</div>
		</button>
	);
};

export default FeedbackCard;

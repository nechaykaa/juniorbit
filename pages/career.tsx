import TimelineItem from '@components/career/TimelineItem';
import CAREER_STEPS from '@shared/consts/careerSteps';
import SidebarLayout from '@layouts/SidebarLayout';

import IcTimelineLine from '@assets/timelineLine.svg';
import ProfileCard from '@components/career/ProfileCard';

const CareerPage = (): JSX.Element => {
	return (
		<SidebarLayout>
			<div className='grid grid-cols-[1fr_448px] h-fit pr-20'>
				<div className='flex flex-col justify-between ml-14 py-20'>
					<p className='font-bold text-3xl'>
						Твой путь
						{' '}
						<span className='text-primary'>
							простой адаптации
						</span>
						<br />
						к компании и полноценного
						<br />
						<span className='text-primary'>
							трудоустройства в штат
						</span>
					</p>
					<ProfileCard />
				</div>
				<div className='flex flex-col gap-12 mt-20 relative'>
					<IcTimelineLine className='absolute left-[34px] -z-10' />
					{CAREER_STEPS.map((i, num) => (
						<TimelineItem key={num} {...i} />
					))}
				</div>
			</div>
		</SidebarLayout>
	);
};

export default CareerPage;

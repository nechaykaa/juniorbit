import TimelineItem from '@components/career/TimelineItem';
import CAREER_STEPS from '@shared/consts/careerSteps';
import SidebarLayout from '@layouts/SidebarLayout';

import IcTimelineLine from '@assets/timelineLine.svg';
import ProfileCard from '@components/career/ProfileCard';
import NearestAchive from '@assets/nearestAchive.svg';
import { useQuery } from 'react-query';
import { getMe } from '@/shared/api/me';

const CareerPage = (): JSX.Element => {
	const { data, isSuccess } = useQuery('get_me', getMe);

	return (
		<SidebarLayout>
			<div className='grid grid-cols-[1fr_448px] h-fit pr-20'>
				<div className='flex flex-col justify-between ml-14 py-20'>
					<div>
						<p className='font-bold text-3xl mb-7'>
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
						{isSuccess && (
							<ProfileCard
								fio={data.fio}
								startDate={new Date(data.registrationDate)}
								job={data.job}
								project={data.project.subtitle} />
						)}
					</div>
					<NearestAchive />
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

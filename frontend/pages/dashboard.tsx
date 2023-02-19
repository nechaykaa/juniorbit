import ProfileCard from '@/components/career/ProfileCard';
import TimelineItem from '@/components/career/TimelineItem';
import SidebarLayout from '@/layouts/SidebarLayout';
import CAREER_STEPS from '@/shared/consts/careerSteps';

import IcTimelineLine from '@assets/tinelineSm.svg';
import Button from '@/components/common/Button';
import { useQuery } from 'react-query';
import { getMe } from '@/shared/api/me';

import DenisCard from '@assets/denis.svg';
import IliaCard from '@assets/ilia.svg';

import AlexCard from '@assets/alex.svg';
import NikitaCard from '@assets/nikita.svg';

const MENTORS = [<DenisCard key={0} />, <IliaCard key={1} />];
const HRS = [<AlexCard key={0} />, <NikitaCard key={1} />];

const MainPage = (): JSX.Element => {
	const { data, isSuccess } = useQuery('get_me', getMe);

	return (
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-10'>
				Главная
			</h1>
			<div className='grid grid-cols-[1fr_auto] gap-4'>
				<div>
					{isSuccess && (
						<ProfileCard
							fio={data.fio}
							startDate={new Date(data.registrationDate)}
							job={data.job}
							project={data.project.subtitle} />
					)}
					<div className='flex flex-col gap-12 mt-20 relative'>
						<IcTimelineLine className='absolute left-[34px] -z-10' />
						{[CAREER_STEPS[1], CAREER_STEPS[2]].map((i, num) => (
							<TimelineItem key={num} {...i} />
						))}
					</div>
				</div>
				<div>
					<h2 className='font-bold text-xl text-primary mb-2'>
						Твой наставник
					</h2>
					{isSuccess && MENTORS[data.mentorId]}
					<Button variant='filled' color='primary' className='w-full my-5'>
						Задать вопрос
					</Button>
					<h2 className='font-bold text-xl text-primary mb-2'>
						Твой HR
					</h2>
					{isSuccess && HRS[data.hrId]}
					<Button variant='filled' color='primary' className='w-full my-5'>
						Задать вопрос
					</Button>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default MainPage;

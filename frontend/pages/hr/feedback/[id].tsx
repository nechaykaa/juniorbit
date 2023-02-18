import Button from '@/components/common/Button';
import Title from '@/components/common/Title';
import Answer from '@/components/feedback/Answer';
import { getFeedbackById } from '@/shared/api/feedbacks';
import { getFeedbackQueryKey } from '@/shared/types/api/feedback.type';
import SidebarLayout from '@layouts/SidebarLayout';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import QUESTIONS from '@shared/consts/questions';

const FeedbackByIdPage = (): JSX.Element => {
	const router = useRouter();
	
	const { data, isSuccess } = useQuery([{ id: +(router.query.id as string) }, 'get_feedback'] as getFeedbackQueryKey,
		getFeedbackById, {
			enabled: !!router && !!router.query && !!router.query.id,
		});

	return (
		<SidebarLayout className='p-20 grid gap-6 h-fit'>
			<Title
				onClickBackButton={() => router.push('/hr/feedback')}
				label={data?.user.fio || 'Загрузка...'}
				className='mb-1' />
			{isSuccess && Object.keys(data.answers).map((i, num) => (
				<Answer
					key={num}
					question={(QUESTIONS as any)[i]}
					answer={(data.answers as any)[i]} /> 
			))}
			<Button variant='filled' color='primary' className='w-full'>
				Понятно
			</Button>
		</SidebarLayout>
	);
};

export default FeedbackByIdPage;

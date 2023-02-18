import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker';
import RadioInput from '@/components/common/RadioInput';
import { createFeedback } from '@/shared/api/feedbacks';
import Input from '@components/common/Input';
import Title from '@components/common/Title';
import SidebarLayout from '@layouts/SidebarLayout';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import * as Yup from 'yup';

const SurveyPage = (): JSX.Element => {
	const router = useRouter();
	
	const [date, setDate] = useState<Date>();

	const formik = useFormik({
		initialValues: {
			mentorName: '',
			firstWorkDay: '',
			rate: '',
			youUnderstandWork: '',
			managerSetsTasks: '',
			areDifficulty: '',
		},
		validationSchema: Yup.object({
			mentorName: Yup.string().required('Это обязательное поле'),
			firstWorkDay: Yup.string().required('Это обязательное поле'),
			rate: Yup.number().required('Это обязательное поле'),
			youUnderstandWork: Yup.string().required('Это обязательное поле'),
			managerSetsTasks: Yup.string().required('Это обязательное поле'),
			areDifficulty: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: (values) => mutate({
			...values,
			rate: +values.rate,
		}),
	});

	const { mutate } = useMutation(createFeedback, {
		onSuccess: () => router.push('/career'),
	});

	return (
		<SidebarLayout className='p-20'>
			<Title
				label='Опросный лист нового сотрудника'
				onClickBackButton={() => router.push('/career')} />
			<div className='mt-6 mb-3'> 
				<Input
					placeholder='ФИО наставника'
					onChange={formik.handleChange}
					value={formik.values.mentorName}
					errorMessage={formik.submitCount ? formik.errors.mentorName : undefined}
					name='mentorName' />
			</div>
			<DatePicker
				value={date}
				onChange={(date) => {
					setDate(date);
					formik.values.firstWorkDay = date.toString();
				}}
				errorMessage={formik.submitCount ? formik.errors.firstWorkDay : undefined}
				placeholder='Дата первого рабочего дня' />
			<h2 className='text-BoldBodyText_18 mt-7 mb-3'>
				Насколько совпадают твои ожидания от работы в Росмолодежь с реальностью?
			</h2>
			<RadioInput
				onChange={formik.handleChange}
				name='rate'
				errorMessage={formik.submitCount ? formik.errors.rate : undefined}
				items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
					label: i.toString(),
					id: i.toString(),
				}))} />
			<div className='mt-6 mb-3'>
				<Input
					placeholder='Тебе понятен твой функционал?'
					onChange={formik.handleChange}
					value={formik.values.youUnderstandWork}
					errorMessage={formik.submitCount ? formik.errors.youUnderstandWork : undefined}
					name='youUnderstandWork' />
			</div>
			<div className='mt-6 mb-3'>
				<Input
					placeholder='Твой руководитель ставит тебе задачи?'
					onChange={formik.handleChange}
					value={formik.values.managerSetsTasks}
					errorMessage={formik.submitCount ? formik.errors.managerSetsTasks : undefined}
					name='managerSetsTasks' />
			</div>
			<div className='mt-6 mb-3'>
				<Input
					placeholder='Есть ли сложности с выполнением задач?'
					onChange={formik.handleChange}
					value={formik.values.areDifficulty}
					errorMessage={formik.submitCount ? formik.errors.areDifficulty : undefined}
					name='areDifficulty' />
			</div>
			<Button variant='filled' color='primary' className='w-full' onClick={formik.submitForm}>
				Отправить
			</Button>
		</SidebarLayout>
	);
};

export default SurveyPage;

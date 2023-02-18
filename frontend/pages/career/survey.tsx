import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker';
import RadioInput from '@/components/common/RadioInput';
import Select from '@/components/common/Select';
import { ISelectOption } from '@/components/common/Select/Select.props';
import Input from '@components/common/Input';
import Title from '@components/common/Title';
import SidebarLayout from '@layouts/SidebarLayout';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';

const OPTIONS: ISelectOption[] = [
	{
		label: 'Да',
		value: 'Да',
	},
	{
		label: 'Нет',
		value: 'Нет',
	},
];

const SELECTS = ['Тебя представили коллегам?', 'Ты знаешь как зовут твоих ближайших коллег?',
	'Ты познакомился с коллегами из других подразделений?', 'Тебе понятен твой функционал?',
	'Твой руководитель ставит тебе задачи?', 'Тебе понятно как решать задачи, которые ставит руководитель?', 
	'Есть ли сложности с выполнением задач?', 'Обращаешься ли ты с вопросами к коллегам?', 
	'Обращаешься ли ты с вопросами к руководителю?', 'Кто чаще всего помогает тебе найти ответы на вопросы?',
	'Руководитель дает тебе обратную связь по результатам работы?'];

const SELECTS2 = ['Руководитель дает тебе обратную связь по результатам работы?',
	'Ты знаешь, где найти контакты (телефоны, адреса) коллег?', 'Ты знаешь что делать, если заболеешь?',
	'Ты понимаешь деятельность подразделений внутри Росмолодежь?',
	'У тебя есть понимание какие направления охватывает Росмолодежь?', 'У тебя есть представление подведомственные учреждения?'];

const SurveyPage = (): JSX.Element => {
	const router = useRouter();
	
	const [date, setDate] = useState<Date>();

	const formik = useFormik({
		initialValues: {
			fio: '',
			rate1: '',
			rate2: '',
			expectation: '',
			mentor: '',
			opinion: '',
			help: '',
			lunch: '',
		},
		onSubmit: () => undefined,
	});

	return (
		<SidebarLayout className='p-20'>
			<Title
				label='Опросный лист нового сотрудника'
				onClickBackButton={() => router.push('/career')} />
			<Input
				placeholder='ФИО наставника'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.fio}
				name='fio' />
			<DatePicker
				value={date}
				onChange={setDate}
				placeholder='Дата первого рабочего дня' />
			<h2 className='text-BoldBodyText_18 mt-7 mb-3'>
				Насколько совпадают твои ожидания от работы в Росмолодежь с реальностью?
			</h2>
			<RadioInput
				onChange={formik.handleChange}
				name='rate1'
				items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
					label: i.toString(),
					id: i.toString(),
				}))} />
			<Input
				placeholder='Насколько совпадают твои ожидания от работы  с реальностью?'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.expectation}
				name='expectation' />
			{SELECTS.map((i, num) => (
				<Select
					key={num}
					className='mb-3'
					placeholder={i}
					options={OPTIONS} />
			))}
			<Input
				placeholder='ФИО наставника'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.mentor}
				name='mentor' />
			<Input
				placeholder='Напиши, где ты чащеaвсего обедаешь?'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.lunch}
				name='lunch' />
			{SELECTS2.map((i, num) => (
				<Select
					key={num}
					className='mb-3'
					placeholder={i}
					options={OPTIONS} />
			))}
			<h2 className='text-BoldBodyText_18 mt-7 mb-3'>
				Отметь на шкале свой уровень комфорта работы в Росмолодежь
			</h2>
			<RadioInput
				onChange={formik.handleChange}
				name='rate1'
				items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
					label: i.toString(),
					id: i.toString(),
				}))} />
			<Input
				placeholder='Что поможет тебе почувствовать себя комфортнее и свободнее в новой среде?'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.help}
				name='help' />
			<Input
				placeholder='Возможно мы что-то не спросили, а тебе важно поделиться'
				className='mt-6 mb-3'
				onChange={formik.handleChange}
				value={formik.values.opinion}
				name='opinion' />
			<Button variant='filled' color='primary' className='w-full'>
				Отправить
			</Button>
		</SidebarLayout>
	);
};

export default SurveyPage;

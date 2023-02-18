import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagsPicker from '@/components/common/TagsPicker';
import Title from '@components/common/Title';
import SidebarLayout from '@layouts/SidebarLayout';
import Select from '@/components/common/Select';
import LinkIcon from '@assets/ic_link.svg';
import { useFormik } from 'formik';

import { useRouter } from 'next/router';
import { useState } from 'react';

const NewEmployeePage = (): JSX.Element => {
	const router = useRouter();
	const [tags, setTags] = useState<string[]>([]);

	const formik = useFormik({
		initialValues: {
			fio: '',
			job: '',
			email: '',
			tel: '',
			tg: '',
			mentor: '',
			hr: '',
			tasks: '',
		},
		onSubmit: () => undefined,
	});

	return (
		<SidebarLayout className='p-20'>
			<Title
				className='mb-7'
				onClickBackButton={() => router.push('/hr/employees')}
				label='Создание сотрудника' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='fio'
				value={formik.values.fio}
				placeholder='ФИО сотрудника' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='job'
				value={formik.values.job}
				placeholder='Должность сотрудника' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='email'
				// value={formik.values.email ? `@${formik.values.email}` : ''}
				value={formik.values.email}
				placeholder='Электронная почта' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='tel'
				value={formik.values.tel}
				placeholder='Номер телефона' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='tg'
				value={formik.values.tg ? `@${formik.values.tg}` : ''}
				placeholder='Ссылка на Telegram' />
			<Select
				className='mb-3'
				options={[
					{
						label: 'Евгений Рогозин',
						value: '',
					},
					{
						label: 'Александр Маслоу',
						value: '',
					},
					{
						label: 'Зинаида Пушкевич',
						value: '',
					},
				]} 
				placeholder='Добавить наставника' />
			<Select
				className='mb-3'
				options={[
					{
						label: 'Татьяна Авдеева',
						value: '',
					},
					{
						label: 'Максим Федотов',
						value: '',
					},
					{
						label: 'Нина Патрушева',
						value: '',
					},
				]} 
				placeholder='Добавить HR' />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='tasks'
				value={formik.values.tasks}
				placeholder='Задачи сотрудника' />
			<h2 className='text-BoldBodyText_18 mt-8 mb-5'>
				В каких проектах будет работать сотрудник?
			</h2>
			<TagsPicker
				tags={tags}
				setTags={(newTag) => setTags((prev) => [...prev, newTag])}
				onDeleteTag={(n) => setTags((prev) => {
					prev = [...prev.slice(0, n), ...prev.slice(n + 1)];

					return [...prev];
				})}
				placeholder='Название проекта' />
			<h2 className='text-BoldBodyText_18 mt-8 mb-5'>
				Уникальная ссылка
			</h2>
			<div className='flex text-center align-middle py-[23px] pl-[20px] pr-[425] bg-lightGrey rounded-2xl'>
				<LinkIcon />
				<p className='text-primary text-BodyText_14 mt-[3px] ml-3'>
					https://rosmol.ru/XxXxXxXxXx
				</p>
			</div>
			<Button
				variant='stroke'
				color='primary'
				className='mt-4 w-full'
			>
				Сгенерировать уникальную ссылку
			</Button>
			
			<Button variant='filled' color='primary' className='mt-4 w-full'>
				Сохранить
			</Button>
		</SidebarLayout>
	);
};

export default NewEmployeePage;

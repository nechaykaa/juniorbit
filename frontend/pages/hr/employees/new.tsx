import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagsPicker from '@/components/common/TagsPicker';
import Title from '@components/common/Title';
import SidebarLayout from '@layouts/SidebarLayout';
import Select from '@/components/common/Select';
import LinkIcon from '@assets/ic_link.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { createEmployee, getEmployees } from '@/shared/api/empoyees';
import { ISelectOption } from '@/components/common/Select/Select.props';
import { getProjects } from '@/shared/api/projects';

const NewEmployeePage = (): JSX.Element => {
	const router = useRouter();

	const [mentor, setMentor] = useState<ISelectOption>();
	const [hr, setHr] = useState<ISelectOption>();
	const [project, setProject] = useState<ISelectOption>();

	const { data: projects } = useQuery('get_projects', getProjects);
	const { data } = useQuery('get_employees', getEmployees);
	const { mutate } = useMutation(createEmployee, {
		onSuccess: () => router.push('/hr/employees'),
	});

	const url = `http://localhost:3000/login?id=${data?.length}`;
	
	const formik = useFormik({
		initialValues: {
			fio: '',
			job: '',
			email: '',
			tel: '',
			tg: '',
		},
		validationSchema: Yup.object({
			fio: Yup.string().required('Поле обязательное'),
			job: Yup.string().required('Поле обязательное'),
			email: Yup.string().email().required('Поле обязательное'),
			tel: Yup.string().required('Поле обязательное'),
			tg: Yup.string().required('Поле обязательное'),
		}),
		onSubmit: () => {
			mutate({
				fio: formik.values.fio,
				email: formik.values.email,
				job: formik.values.job,
				phone: formik.values.tel,
				tg: formik.values.tg,
				mentorId: +(mentor?.value as string) as (0 | 1),
				hrId: +(hr?.value as string) as (0 | 1),
				projectId: +(project?.value as string) as (0 | 1),
			});
		},
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
				placeholder='ФИО сотрудника'
				errorMessage={formik.submitCount ? formik.errors.fio : undefined} />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='job'
				value={formik.values.job}
				placeholder='Должность сотрудника'
				errorMessage={formik.submitCount ? formik.errors.job : undefined} />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='email'
				// value={formik.values.email ? `@${formik.values.email}` : ''}
				value={formik.values.email}
				placeholder='Электронная почта'
				errorMessage={formik.submitCount ? formik.errors.email : undefined} />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='tel'
				value={formik.values.tel}
				placeholder='Номер телефона'
				errorMessage={formik.submitCount ? formik.errors.tel : undefined} />
			<Input
				className='mb-3'
				onChange={formik.handleChange}
				name='tg'
				value={formik.values.tg}
				placeholder='Ссылка на Telegram'
				errorMessage={formik.submitCount ? formik.errors.tg : undefined} />
			<Select
				className='mb-3'
				isSearchable={false}
				options={[
					{
						label: 'Денис хромов',
						value: '0',
					},
					{
						label: 'Илья Огнев',
						value: '1',
					},
				]}
				onChange={setMentor}
				errorMessage={formik.submitCount && !mentor ? 'Обязательное поле' : undefined}
				placeholder='Выбрать наставника' />
			<Select
				className='mb-3'
				isSearchable={false}
				options={[
					{
						label: 'Александр Пьянков',
						value: '0',
					},
					{
						label: 'Никита Ананьев',
						value: '1',
					},
				]} 
				onChange={setHr}
				errorMessage={formik.submitCount && !hr ? 'Обязательное поле' : undefined}
				placeholder='Выбрать HR' />
			<h2 className='text-BoldBodyText_18 mt-8 mb-5'>
				В каких проектах будет работать сотрудник?
			</h2>
			<Select
				options={projects ? projects.map((i) => ({ value: i.id.toString(), label: i.title })) : []}
				placeholder='Проект'
				isSearchable={false}
				onChange={setProject}
				errorMessage={formik.submitCount && !project ? 'Выберите проект' : ''} />
			<h2 className='text-BoldBodyText_18 mt-8 mb-5'>
				Уникальная ссылка
			</h2>
			<div className='flex text-center align-middle py-[23px] pl-[20px] pr-[425] bg-lightGrey rounded-2xl'>
				<LinkIcon />
				<a href={url} className='text-primary text-BodyText_14 mt-[3px] ml-3'>
					http://localhost:3000/login?id=
					{data?.length}
				</a>
			</div>
			
			<Button
				variant='filled'
				color='primary'
				className='mt-4 w-full'
				onClick={() => formik.submitForm()}
			>
				Создать
			</Button>
		</SidebarLayout>
	);
};

export default NewEmployeePage;

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagsPicker from '@/components/common/TagsPicker';
import Title from '@components/common/Title';
import SidebarLayout from '@layouts/SidebarLayout';
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
			tg: '',
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
				name='tg'
				value={formik.values.tg ? `@${formik.values.tg}` : ''}
				placeholder='Должность сотрудника' />
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
			<Button variant='filled' color='primary' className='mt-4 w-full'>
				Сохранить
			</Button>
		</SidebarLayout>
	);
};

export default NewEmployeePage;

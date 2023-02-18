import LoginLayout from '@/layouts/LoginLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Yup from 'yup';

interface IFormik {
	password: string;
	passwordRepeat: string;
}

const LoginPage = (): JSX.Element => {
	const router = useRouter();

	const formik = useFormik<IFormik>({
		initialValues: {
			password: '',
			passwordRepeat: '',
		},
		validationSchema: Yup.object().shape({
			password: Yup.string().required('Это обязательное поле'),
			passwordRepeat: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => router.push('/'),
	});

	useEffect(() => {
		if(router.query.id)
			localStorage.setItem('userId', router.query.id as string);
	}, [router]);

	return (
		<LoginLayout>
			<h1 className='text-heading-1 mt-28'>
				С возвращением! 👋
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
				Поздравляю, ты новый сотрудник Росмолодёжи!
				<br />
				Придумай пароль, чтобы войти на платформу
			</p>
			<form onSubmit={formik.handleSubmit} className='max-w-[420px] mt-6 grid gap-[14px]'>
				<Input
					className='w-full'
					placeholder='Пароль'
					type='password'
					name='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					errorMessage={formik.submitCount ? formik.errors.password : undefined} />
				<Input
					className='w-full'
					placeholder='Повторите пароль'
					type='password'
					name='passwordRepeat'
					onChange={formik.handleChange}
					value={formik.values.passwordRepeat}
					errorMessage={formik.submitCount ? formik.errors.passwordRepeat : undefined} />
				<Button variant='filled' color='black'>
					Войти
				</Button>
			</form>
		</LoginLayout>
	);
};

export default LoginPage;

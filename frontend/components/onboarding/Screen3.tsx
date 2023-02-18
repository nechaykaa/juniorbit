import MainProject from '@assets/mainProject.svg';

const Screen3 = (): JSX.Element => {
	return (
		<div>
			<p className='font-bold text-4xl text-center mb-10'>
				Твоим основным проектом, над
				<br />
				которым ты будешь работать большую
				<br />
				часть времени будет:
			</p>
			<MainProject className='block mx-auto' />
		</div>
	);
};

export default Screen3;

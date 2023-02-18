import Denis from '@assets/denis.svg';
import Alex from '@assets/alex.svg';

const Screen6 = (): JSX.Element => {
	return (
		<div>
			<p className='font-bold text-4xl text-center mb-10'>
				В случае, если тебе понадобится помощь:
			</p>
			<div className='mx-auto block w-fit'>
				<p className='text-primary font-bold text-xl mb-2.5'>
					Твой наставник
				</p>
				<Denis />
				<p className='text-primary font-bold text-xl mt-8 mb-2.5'>
					Твой HR
				</p>
				<Alex />
			</div>
		</div>
	);
};

export default Screen6;

import Button from '@components/common/Button';
import Props from './SearchPanel.props';
import { useRouter } from 'next/router';

import LoupeIcon from '@assets/loup.svg';

const SearchPanel: React.FC<Props> = ({ className = '', ...props }) => {
	const router = useRouter();
	return (
		<div className={`${className} grid grid-cols-[1fr_166px] gap-3 items-center mt-8`} {...props}>
			<div className='bg-[#F8F8F8] rounded-[20px] p-[18px] grid grid-cols-[32px_1fr] gap-2'>
				<LoupeIcon />
				<input className='w-full h-full border-none outline-none bg-[#F8F8F8]' placeholder='Найдётся всё' />
			</div>
			<Button variant='filled' color='black' className='w-full' onClick={() => router.push('/doc')}>
				Найти
			</Button>
		</div>
	);
};

export default SearchPanel;

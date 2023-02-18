import Props from './Sidebar.props';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SidebarItem from '@components/common/SidebarItem';
import Logo from '@components/common/Logo';
import useMenu from '@/stores/useMenu';

import CloseLgIcon from '@assets/ic_close_lg.svg';
// import CloseLgIcon from '../../assets/ic_close_lg.svg';s

import SIDEBAR_ITEMS from './Sidebar.config';
import Button from '@/components/common/Button';

const Sidebar: React.FC<Props> = ({ className = '', style, ...props }) => {
	const router = useRouter();

	const { setIsMenuOpened } = useMenu();

	const [spanPadding, setSpanPadding] = useState(0);

	useEffect(() => setInitialSpanPadding(), [router]);

	function setInitialSpanPadding() {
		SIDEBAR_ITEMS.forEach((i, num) => {
			if(router.pathname.includes(i.href) || (i.validateEndsWith && router.pathname.endsWith(i.href)))
				setSpanPadding(64 * num);
		});
	}

	return (
		<nav
			className={className
				+ ' min-h-full pt-[78px] lg:pt-14 pb-6 lg:pb-[50px] grid grid-rows-[43px_1fr_auto] border-r-1 border-[#F5F5F5]'}
			style={{
				...style,
				display: 'grid',
			}}
			{...props}
		>
			<div className='flex justify-between items-center px-5 lg:px-auto'>
				<Logo className='lg:ml-12' />
				<button className='lg:hidden' onClick={() => setIsMenuOpened(false)}>
					<CloseLgIcon className='stroke-primary' />
				</button>
			</div>
			<div className='relative mt-[49px]'>
				<div
					className='w-full h-16 bg-lightGrey absolute transition-all duration-200 rounded-[20px] ml-5'
					style={{ top: spanPadding }}
				></div>
				<div className='absolute w-full'>
					{SIDEBAR_ITEMS.map((i, num) => (
						<SidebarItem
							key={num}
							label={i.label}
							href={i.href}
							validateEndsWith={i.validateEndsWith}
							Icon={i.icon}
							colorType={i.colorType}
							onMouseEnter={() => setSpanPadding(64 * num)}
							onMouseLeave={() => setInitialSpanPadding()} />
					))}
					{router.pathname.includes('hr') && (
						<Button color='primary' variant='filled' className='w-full ml-10 mr-130 mt-3'>
							Создать сотрудника
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;

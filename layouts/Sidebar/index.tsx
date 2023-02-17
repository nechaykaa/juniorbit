import Props from './Sidebar.props';
import Link from 'next/link';
import { 
	SIDEBAR_ADMIN_ITEMS, 
	SIDEBAR_TEACHER_ITEMS, 
	SIDEBAR_METAADMIN_ITEMS, 
	SIDEBAR_METHODIST_ITEMS,
	SIDEBAR_STUDENT_ITEMS,
	SIDEBAR_NO_ROLE_ITEMS,
} from '../../shared/consts/sidebarItems';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SidebarItem from '../../components/Layout/SidebarItem';
import ProfileTab from '../../components/Layout/ProfileTab';
import { useQuery } from 'react-query';
import { getProfile } from '../../shared/api/users';
import useRole from '../../hooks/useRole';

import Logo from '../../assets/logos/logo-horizontal.svg';
import CloseLgIcon from '../../assets/ic_close_lg.svg';
import useMenu from '../../stores/useMenu';
import TranslateMenu from '../../components/Layout/TranslateMenu';

const Sidebar: React.FC<Props> = ({ className = '', style, ...props }) => {
	const router = useRouter();

	const [spanPadding, setSpanPadding] = useState(0);

	const setIsMenuOpened = useMenu((state) => state.setIsMenuOpened);

	const { data, isSuccess } = useQuery('my_profile', getProfile);

	const { roleType } = useRole();

	useEffect(() => setInitialSpanPadding(), [router, roleType]);

	function getSidebarItems() {
		switch(roleType) {
			case 'ADMIN':
				return SIDEBAR_ADMIN_ITEMS;
			case 'TEACHER':
				return SIDEBAR_TEACHER_ITEMS;
			case 'META_ADMIN':
				return SIDEBAR_METAADMIN_ITEMS;
			case 'METHODIST':
				return SIDEBAR_METHODIST_ITEMS;
			case 'STUDENT':
				return SIDEBAR_STUDENT_ITEMS;
			default:
				return SIDEBAR_NO_ROLE_ITEMS;
		}
	}

	function setInitialSpanPadding() {
		getSidebarItems().forEach((i, num) => {
			if(router.pathname.includes(i.href) || (i.validateEndsWith && router.pathname.endsWith(i.href)))
				setSpanPadding(64 * num);
		});
	}

	function getUserName() {
		if(!isSuccess)
			return undefined;
		else if(data.user.full_name)
			return data.user.full_name;
		else
			return data.user.email;
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
				<Link href='/'>
					<a className='cursor-pointer lg:ml-12'>
						<Logo />
					</a>
				</Link>
				<button className='lg:hidden' onClick={() => setIsMenuOpened(false)}>
					<CloseLgIcon className='stroke-primary' />
				</button>
			</div>
			<div className='relative mt-[49px]'>
				<div
					className='w-full h-16 bg-lightGrey absolute transition-all duration-200'
					style={{ top: spanPadding }}
				></div>
				<div className='absolute w-full'>
					{getSidebarItems().map((i, num) => (
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
				</div>
			</div>
			<TranslateMenu className='ml-[22px] mb-2' />
			<ProfileTab
				userAvatar={isSuccess ? data.user.icon_id : undefined}
				userName={getUserName()}
				className='px-[22px]' />
		</nav>
	);
};

export default Sidebar;

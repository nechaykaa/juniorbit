import Link from 'next/link';
import { useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import useWindowDemantions from '../../hooks/useWindowDemantions';
import { LG } from '../../shared/consts/sizes';
import useMenu from '../../stores/useMenu';
import Sidebar from '../Sidebar';
import Props from './SidebarLayout.props';

import Logo from '@components/common/Logo';
import BurgerMenuIcon from '../../assets/ic_burgerMenu.svg';

const SidebarLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	const { width, setWidth } = useWindowDemantions();

	const { isMenuOpened, setIsMenuOpened } = useMenu();
	useEffect(() => {
		setWidth();
	}, [width, setWidth]);
	return (
		<>
			{width < LG && (
				<Menu 
					right 
					width={width} 
					isOpen={isMenuOpened} 
					onClose={() => setIsMenuOpened(false)} 
					className='p-4 h-screen'
				>	
					<Sidebar />
				</Menu>
			)}
			<div className='h-screen lg:grid grid-cols-[290px_1fr] px-2 pt-[67px] lg:px-0 lg:pt-0' {...props}>
				{width > LG && (
					<Sidebar />
				)}
				<div className='flex justify-between items-center px-2 lg:hidden'>
					<Logo />
					<button onClick={() => setIsMenuOpened(true)}>
						<BurgerMenuIcon />
					</button>
				</div>
				<div className={className + ' lg:h-screen overflow-y-scroll'}>
					{children}
				</div>
			</div>
		</>
	);	
};

export default SidebarLayout;

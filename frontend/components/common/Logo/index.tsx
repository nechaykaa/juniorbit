import Link from 'next/link';
import Props from './Logo.props';

import LogoIcon from '@assets/logo.svg';

const Logo: React.FC<Props> = ({ className = '' }) => {
	return (
		<Link className={`${className} font-bold text-2xl`} href='/dashboard'>
			<LogoIcon />
		</Link>
	);
};

export default Logo;

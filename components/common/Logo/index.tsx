import Link from 'next/link';
import Props from './Logo.props';

import LogoIcon from '@assets/logo.svg';

const Logo: React.FC<Props> = () => {
	return (
		<Link className='font-bold text-2xl' href='/'>
			<LogoIcon />
		</Link>
	);
};

export default Logo;

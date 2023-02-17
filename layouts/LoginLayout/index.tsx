import Props from './LoginLayout.props';
import Logo from '@components/common/Logo';

import LoginImage from '@assets/loginImage.svg';

const LoginLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	return (
		<section className={className + ' grid grid-cols-2'} {...props}>
			<div className='pl-28 pt-16'>
				<Logo />
				<div>
					{children}
				</div>
			</div>
			<LoginImage className='h-screen' />
		</section>
	);
};

export default LoginLayout;

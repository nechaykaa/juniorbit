import Props from './Title.props';

import BackButtonIcon from '@assets/backButton.svg';

const Title: React.FC<Props> = ({ className = '', label, onClickBackButton, ...props }) => {
	return (
		<div className={`${className} grid grid-cols-[48px_1fr] gap-4 items-center`} {...props}>
			{onClickBackButton && (
				<button
					className='bg-none border-none p-0 m-0'
					onClick={onClickBackButton}
				>
					<BackButtonIcon />
				</button>
			)}
			<h1 className='font-bold text-4xl'>
				{label}
			</h1>
		</div>
	);
};

export default Title;

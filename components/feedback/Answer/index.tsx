import Props from './Answer.props';

const Answer: React.FC<Props> = ({ question, answer, ...props }) => {
	return (
		<div {...props}>
			<h2 className='text-[#8C888A] text-base mb-2'>
				{answer}
			</h2>
			<p className='font-bold text-2xl'>
				{question}
			</p>
		</div>
	);
};

export default Answer;

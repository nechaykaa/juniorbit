import { format } from 'date-fns';
import Props from './Answer.props';

const Answer: React.FC<Props> = ({ question, answer, ...props }) => {
	return (
		<div {...props}>
			<h2 className='text-[#8C888A] text-base mb-2'>
				{question}
			</h2>
			<p className='font-bold text-2xl'>
				{question.includes('Дата') ? format(new Date(answer), 'dd.MM.yyyy') : answer}
			</p>
		</div>
	);
};

export default Answer;

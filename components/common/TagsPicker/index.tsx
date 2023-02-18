import Button from '../Button';
import Input from '../Input';
import Props from './TagsPeeker.props';
import PlusIcon from '@assets/ic_plus.svg';
import { useState } from 'react';
import TagCard from '../TagCard';

const TagsPicker: React.FC<Props> = ({ tags, setTags, placeholder, onDeleteTag, ...props }) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div {...props}>
			<div className='grid grid-cols-[1fr_160px] gap-2'>
				<Input 
					placeholder={placeholder}
					className='w-full' 
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)} />

				<Button
					color='primary' 
					variant='stroke' 
					className='items-center justify-center flex rounded-[16px] text-primary'
					onClick={() => {
						if (inputValue) {
							setTags(inputValue);
							setInputValue('');
						}
					}}
				>
					Добавить
				</Button>
			</div>

			<div className={'flex flex-wrap gap-3 ' + (tags.length ? 'mt-3' : '')}>
				{tags.map((tag, num) => (
					<TagCard 
						key={num} 
						onDeleteTag={() => onDeleteTag(num)}
						tagName={tag} />
				))}
			</div>
		</div>
	);
};

export default TagsPicker;

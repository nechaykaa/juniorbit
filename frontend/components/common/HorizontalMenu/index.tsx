import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Props from './HorizontalMenu.props';

const HorizontalMenu = ({ className = '', initialValue, onItemChanged = () => null, items,
	selectedColor = 'bg-primary', selectedTextColor = 'text-white', textClassName }: Props): JSX.Element => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	const [menuWidth, setMenuWidth] = useState<number>(0);
	const [menuHeight, setMenuHeight] = useState<number>(0);
	const [selectedItem, setSelectedItem] = useState<number>(initialValue);

	useEffect(() => {
		setMenuWidth(ref.current.offsetWidth);
		setMenuHeight(ref.current.offsetHeight);
	}, []);

	return(
		<div ref={ref} className={className + ' bg-lightGrey p-[5px] rounded-[15px] relative'} >
			<div 
				className='z-10 absolute w-full grid -ml-1 -mt-1 h-full' 
				style={{ 
					gridTemplateColumns: `repeat(${items.length}, 1fr)`,
				}} 
			>
				{items.map((item, i)=>{
					return(
						<button
							key={i} 
							onClick={() => {
								setSelectedItem(i);
								onItemChanged(i);
							}}
							className={'h-full w-full justify-self-center transition-all duration-700 ' + textClassName
								+ ' ' + (selectedItem === i && selectedTextColor)}
							
						>
							<span className='text-BodyText_16'>
								{item}
							</span>
						</button>
					);
				})}
			</div>
			<div 
				className={'rounded-[10px] absolute duration-500 ' + selectedColor}
				style={{ 
					width: (menuWidth - 10) / items.length, 
					height: menuHeight - 10, //it's padding
					left: ((menuWidth - 10) / items.length) * selectedItem + 5,
				}} />
		</div>
	);
};

export default HorizontalMenu;

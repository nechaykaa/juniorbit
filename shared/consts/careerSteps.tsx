import Link from 'next/link';
import { ReactNode } from 'react';

export interface ICareerItem {
	step: number;
	label: ReactNode;
	date: Date;
	isActive: boolean;
}

const CAREER_STEPS: ICareerItem[] = [
	{
		step: 1,
		label: (
			<p className='font-semibold h-fit'>
				Знакомство с компанией, изучение
				<br />
				<span className='text-primary underline'>
					истории
				</span>
				{' '}
				и
				{' '}
				<span className='text-primary underline'>
					проектов
				</span>
				{' '}
				компании,
				<br />
				<span className='text-primary underline'>
					погружение в основную область
				</span>
			</p>
		),
		date: new Date(2023, 3, 1),
		isActive: true,
	},
	{
		step: 2,
		label: (
			<p className='font-semibold h-fit'>
				Дедлайн заполнения
				{' '}
				<Link href='/career/survey'>
					<span className='text-primary'>
						опроса об
						<br />
						адаптации к компании
					</span>
				</Link>
				{' '}
				спустя 2 недели
			</p>
		),
		date: new Date(2023, 3, 13),
		isActive: true,
	},
	{
		step: 2.1,
		label: (
			<p className='font-semibold h-fit'>
				Чек-поинт с HR в Zoom, ощущения от первых недель в компании, эмоции
			</p>
		),
		date: new Date(2023, 3, 14),
		isActive: false,
	},
	{
		step: 3,
		label: (
			<p className='font-semibold h-fit'>
				Дедлайн заполнения 
				{' '}
				<Link className='cursor-pointer' href='/career/survey'>
					<span className='text-primary'>
						опроса об
						<br />
						адаптации к компании
					</span>
				</Link>
				{' '}
				спустя 1 месяц
			</p>
		),
		date: new Date(2023, 3, 29),
		isActive: false,
	},
	{
		step: 3.1,
		label: (
			<p className='font-semibold h-fit'>
				Чек-поинт с HR в Zoom, ощущения от месяца в компании, обратная связь
			</p>
		),
		date: new Date(2023, 4, 1),
		isActive: false,
	},
	{
		step: 4,
		label: (
			<p className='font-semibold h-fit'>
				Решающий чек-поинт, определение положения и будущего с компанией
			</p>
		),
		date: new Date(2023, 5, 1),
		isActive: false,
	},
];

export default CAREER_STEPS;

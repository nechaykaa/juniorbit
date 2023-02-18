import SidebarLayout from '@layouts/SidebarLayout';
import EmployeeCard from '@components/employees/EmployeeCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';

import menuItems from '@shared/consts/textHorizontalMenuItems';

import Star from '@assets/ic_star.svg';

const EmployeesPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Все сотрудники
			</h1>
			<div>
				<TextHorizontalMenu items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Александр Исаков'
							description='Начальник отдела дизайна • РЕМЦ'
							className='mr-[22px]'
							Icon={Star} />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Мартин Нечаев'
							description='Главный программист • РЕМЦ'
							className='mr-[22px]'
							Icon={Star} />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Дима Истомин'
							description='Генеральный менеджер • РЕМЦ'
							className='mr-[22px]'
							Icon={Star} />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Никита Касинцев'
							description='Главный менеджер • Роскультцентр'
							className='mr-[22px]'
							Icon={Star} />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Александр Лопахин'
							description='Управляющий • Роскультцентр'
							className='mr-[22px]'
							Icon={Star} />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Наталья Петухова'
							description='Программист • Роспатриот'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Василий Лопатин'
							description='Управляющий • Роскультцентр'
							className='mr-[22px]' />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Ирина Крючкова'
							description='Управляющий • Роскультцентр'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Мирон Фёдоров'
							description='Менеджер • Роскультцентр'
							className='mr-[22px]' />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Алексей Петухов'
							description='Технический специалист • Роспатриот'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Владимир Пупкин'
							description='Администратор • Роскультцентр'
							className='mr-[22px]' />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Василий Дудников'
							description='Event-менеджер • РЕМЦ'
							className='mr-[22px]' />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

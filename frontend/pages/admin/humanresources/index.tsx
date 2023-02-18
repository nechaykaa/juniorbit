import SidebarLayout from '@layouts/SidebarLayout';
import EmployeeCard from '@components/employees/EmployeeCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';

import menuItems from '@shared/consts/textHorizontalMenuItems';

import Star from '@assets/ic_star.svg';

const EmployeesPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Все HR-сотрудники
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
							description='HR'
							className='mr-[22px]' />
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Мартин Нечаев'
							description='HR'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							label='Telegram • +7 (922) 129-78-06'
							name='Андрей Волков'
							description='HR'
							className='mr-[22px]' />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

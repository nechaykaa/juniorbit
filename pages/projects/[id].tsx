import SidebarLayout from '@/layouts/SidebarLayout';
import EmployeeCard from '@components/employees/EmployeeCard';
import TextHorizontalMenu from '@/components/common/TextHorizontalMenu';

import menuItems from '@/shared/consts/textHorizontalMenuItems';

const ProjectIdPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Сотрудники на онбординге 
			</h1>
			<div>
				<TextHorizontalMenu items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							duration='В компании 13 дней'
							name='Александр Исаков'
							description='21 год • UX-UI Designer • РЕМЦ'
							className='mr-[22px]' />
						<EmployeeCard 
							duration='В компании 56 дней'
							name='Артемий Дёмкин'
							description='28 лет • Менеджер • Роспатриот • РЕМЦ'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							duration='В компании 69 дней'
							name='Николай Шахов'
							description='26 лет • Управляющий • РЕМЦ'
							className='mr-[22px]' />
						<EmployeeCard 
							duration='В компании 100 дней'
							name='Герман Карамышев'
							description='29 лет • Менеджер • Роспатриот'
							className='mr-[22px]' />
					</div>
					<div className='flex mb-[17px]'>
						<EmployeeCard 
							duration='В компании 65 дней'
							name='Ольга Лопахина'
							description='24 года • Управляющий • Роскультцентр'
							className='mr-[22px]' />
						<EmployeeCard 
							duration='В компании 43 дня'
							name='Наталья Петухова'
							description='30 лет • Программист • РЕМЦ'
							className='mr-[22px]' />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default ProjectIdPage;

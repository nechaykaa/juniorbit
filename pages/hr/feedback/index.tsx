import SidebarLayout from '@layouts/SidebarLayout';
import FeedbackCard from '@components/feedback/FeedbackCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';
import Trash from '@assets/ic_trash.svg';

import menuItems from '@shared/consts/textHorizontalMenuItems';

const EmployeesPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Обратная связь
			</h1>
			<div>
				<TextHorizontalMenu items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex mb-[17px]'>
						<FeedbackCard 
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Кирилл Осинцев'
							description='21 год • UX-UI Designer • РЕМЦ'
							className='mr-[22px]'
							Icon={Trash} />
						<FeedbackCard 
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Екатерина Соколова'
							description='28 лет • Менеджер • Роспатриот • РЕМЦ'
							className='mr-[22px]'
							Icon={Trash} />
					</div>
					<div className='flex mb-[17px]'>
						<FeedbackCard 
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Алексей Нияматов'
							description='26 лет • Управляющий • РЕМЦ'
							className='mr-[22px]'
							Icon={Trash} />
						<FeedbackCard 
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Кирилл Германов'
							description='29 лет • Менеджер • Роспатриот'
							className='mr-[22px]'
							Icon={Trash} />
					</div>
					<div className='flex mb-[17px]'>
						<FeedbackCard
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Александр Нюров'
							description='24 года • Управляющий • Роскультцентр'
							className='mr-[22px]'
							Icon={Trash} />
						<FeedbackCard 
							duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
							name='Наталья Осинцева'
							description='30 лет • Программист • РЕМЦ'
							className='mr-[22px]'
							Icon={Trash} />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

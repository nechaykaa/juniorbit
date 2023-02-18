import SidebarLayout from '@layouts/SidebarLayout';
import FeedbackCard from '@components/feedback/FeedbackCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';
import Trash from '@assets/ic_trash.svg';

import menuItems from '@shared/consts/textHorizontalMenuItems';
import { useMemo, useState } from 'react';
import { getFeedbacks } from '@/shared/api/feedbacks';
import { useQuery } from 'react-query';

const EmployeesPage = (): JSX.Element => {
	const [menuItem, setMenuItem] = useState<string>('Все подразделения');

	const { data } = useQuery('get_feedbacks', getFeedbacks);

	const result = useMemo(() => {
		if(!data)
			return [];

		const d = data;

		if(menuItem == 'Все подразделения')
			return d;
		else
			return d.filter((i) => i.user.project.subtitle === menuItem);
	}, [menuItem, data]);

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Обратная связь
			</h1>
			<div>
				<TextHorizontalMenu onMenuItemChanged={setMenuItem} items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						{result.map((i, num) => (
							<FeedbackCard 
								feedbackId={i.id}
								key={num}
								duration='уровень 2.0 • 04.03.23 - встреча • 15 дней'
								name={i.user.fio}
								description='21 год • UX-UI Designer • РЕМЦ' />
						))}
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

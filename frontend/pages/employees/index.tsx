import { useQuery } from 'react-query';
import { useMemo, useState } from 'react';
import { getEmployees } from '@/shared/api/empoyees';
import SidebarLayout from '@layouts/SidebarLayout';
import EmployeeCard from '@components/employees/EmployeeCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';

import menuItems from '@shared/consts/textHorizontalMenuItems';

import Star from '@assets/ic_star.svg';

const EmployeesPage = (): JSX.Element => {
	const [menuItem, setMenuItem] = useState<string>('Все подразделения');

	const { data } = useQuery('get_employees', getEmployees);

	const result = useMemo(() => {
		if(!data)
			return [];

		const d = data;

		if(menuItem == 'Все подразделения')
			return d;
		else
			return d.filter((i) => i.project.subtitle === menuItem);
	}, [menuItem, data]);

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Коллеги
			</h1>
			<div>
				<TextHorizontalMenu onMenuItemChanged={setMenuItem} items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						{result.map((i, num) => (
							<EmployeeCard 
								key={num}
								label={`Telegram • @${i.tg}`}
								name={i.fio}
								description={`${i.job} • ${i.project.subtitle}`}
								Icon={Star} />
						))}
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

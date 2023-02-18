import { useQuery } from 'react-query';
import { getEmployees } from '@/shared/api/empoyees';
import SidebarLayout from '@layouts/SidebarLayout';
import EmployeeCard from '@components/employees/EmployeeCard';
import TextHorizontalMenu from '@components/common/TextHorizontalMenu';

import menuItems from '@shared/consts/textHorizontalMenuItems';

import Star from '@assets/ic_star.svg';

const EmployeesPage = (): JSX.Element => {
	const { data } = useQuery('get_employees', getEmployees);

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Коллеги
			</h1>
			<div>
				<TextHorizontalMenu items={menuItems} />
			</div>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						{data?.map((i, num) => (
							<EmployeeCard 
								key={num}
								duration='Telegram • +7 (922) 129-78-06'
								name={i.fio}
								description={`${i.job} ${i.projectId}`}
								Icon={Star} />
						))}
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

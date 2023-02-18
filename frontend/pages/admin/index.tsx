import SidebarLayout from '@layouts/SidebarLayout';
import AnalyticData from '@assets/analyticData.svg';

const EmployeesPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Аналитика
			</h1>
			<div>
				<AnalyticData />
			</div>
		</SidebarLayout>
	);
};

export default EmployeesPage;

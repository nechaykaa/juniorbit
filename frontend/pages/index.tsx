import Logo from '@/components/common/Logo';
import Section1 from '@assets/landing/section1.svg';
import Section2 from '@assets/landing/section2.svg';
import Section3 from '@assets/landing/section3.svg';
import Section4 from '@assets/landing/section4.svg';
import Section5 from '@assets/landing/section5.svg';

const Landing = (): JSX.Element => {
	return (
		<div>
			<section className='ml-[121px]'>
				<div>
					<Section1 className='absolute right-0 -z-1 top-0' />
					<div className='mt-[41px]'>
						<Logo />
						<p className='font-semibold text-[40px] mt-[151px]'>
							Поздравляю!
						</p>
						<p className='font-bold text-[58px]'>
							вы попали в компанию 
							<span className='text-primary'>
								<br />
								по-настоящему
								<br />
							</span> 
							масштабных проектов
						</p>
						<div className='flex'>
							<div className='mr-[65px]'>
								<p className='font-bold text-[90px]'>
									100
								</p>
								<p className='font-semibold text-[22px] text-[#767676]'>
									Самых заряженных
									<br />
									сотрудников
								</p>
							</div>
							<div>
								<p className='font-bold text-[90px]'>
									25
								</p>
								<p className='font-semibold text-[22px] text-[#767676]'>
									Масштабнейших,
									<br />
									всероссийских проектов
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mt-[97px]'>
				<Section2 className='absolute -z-1' />
				<p className='font-semibold text-[22px] ml-[630px] pt-[680px]'>
					<span className='text-primary'>
						Федеральное агентство по делам молодежи -
					</span>
					<br />
					федеральный орган исполнительной власти в России,
					<br />
					осуществляющий функции по оказанию
					<br />
					государственных услуг и управлению
					<br />
					<br />
					Так же, реализацией мероприятий, направленных на
					<br />
					обеспечение здорового образа жизни молодёжи
				</p>
			</section>
			<section className='mt-[20px] '>
				<Section3 className='absolute -z-1 ml-[714px] ' />
				<p className='ml-[118px] mt-[160px] pt-[70px] font-semibold text-[22px]'>
					Компания была основана в 2008 году, когда у руля был
					<br />
					Якеменко, Василий Григорьевич. Спустя много лет, компания
					<br />
					пережила много изменений,  начиная от смены нескольких
					<br />
					руководителей, заканчивая сменой позиционирования
					<br />
					бренда на более молодежный tone of voice.
				</p>
			</section>
			<section className='mt-[20px] '>
				<Section4 className='absolute -z-1' />
				<p className='ml-[120px] pt-[190px] font-semibold text-[22px]'>
					Сейчас мы организовываем форумы и 
					<br />
					мероприятия, оказываем поддержку молодёжи
					<br />
					во всех регионах нашей страны. Мы гордимся историями
					<br />
					успеха наших подопечных. С помощью подведомственных
					<br />
					учреждений решаем широкий круг задач, руководствуясь
					<br />
					Основами государственной молодёжной политики
					<br />
					Российской Федерации на период до 2025 г.
				</p>
			</section>
			<section className='mt-[550px]'>
				<h2 className='text-[#D8D8D8] font-semibold text-[48px] ml-[120px]'>
					Мечтаем и делаем мечты реальными
				</h2>
				<h2 className='font-bold text-[48px] ml-[120px] mt-[7px]'>
					Пару слов о нас✌️
				</h2>
				<div className='flex mt-[18px] ml-[120px]'>
					<div className='mr-[50px]'>
						<p className='font-bold text-[46px] '>
							20
						</p>
						<p className='text-[#9F9F9F] text-[16px] font-medium'>
							Проектов
							<br />
							всероссийского
							<br />
							масштаба
						</p>
					</div>
					<div className='mr-[50px]'>
						<p className='font-bold text-[46px] '>
							100
						</p>
						<p className='text-[#9F9F9F] text-[16px] font-medium'>
							Лучших специалистов
							<br />
							в своей области
						</p>
					</div>
					<div>
						<p className='font-semibold text-[22px]'>
							Мы небольшая, но очень дружная команда, которая
							<br />
							занимается реальными продуктами клиентов. Все что мы
							<br />
							делаем, либо уже живет и развивается, либо скоро увидит
							<br />
							свет. Это касается и сайтов, и мобильных приложений.
						</p>
					</div>
				</div>
				<Section5 className='absolute -z-1' />
			</section>
		</div>
	);
};

export default Landing;

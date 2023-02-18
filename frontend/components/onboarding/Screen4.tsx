const Screen4 = (): JSX.Element => {
	return (
		<div>
			<p className='font-bold text-4xl text-center mb-10'>
				В твои глобальные задачи будет входить:
			</p>
			<ul className='list-inside list-disc mx-auto block w-fit font-bold text-xl'>
				<li>
					принимать входящие заявки на телефон и электронную почту
				</li>
				<li>
					вести переговоры с заказчиками
				</li>
				<li>
					рассчитывать стоимость продукции и доставки
				</li>
				<li>
					сопровождать сделки, контролировать оплаты и отгрузки
				</li>
			</ul>
		</div>
	);
};

export default Screen4;

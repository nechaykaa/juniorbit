import Logo from '@components/common/Logo';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

import Screen1 from '@/components/onboarding/Screen1';
import Screen2 from '@/components/onboarding/Screen2';
import Screen3 from '@/components/onboarding/Screen3';
import Screen4 from '@/components/onboarding/Screen4';
import Screen5 from '@/components/onboarding/Screen5';
import Screen6 from '@/components/onboarding/Screen6';

const ACTIVE_SCREENS = [<Screen1 key={0} />, <Screen2 key={1} />, <Screen3 key={2} />,
	<Screen4 key={3} />, <Screen5 key={4} />, <Screen6 key={5} />];

const OnboardingPage = (): JSX.Element => {
	const controls = useAnimationControls();
	const [activeScreen, setActiveScreen] = useState<number>(0);

	const nextStep = () => setTimeout(() => {
		setActiveScreen((prev) => prev + 1);
		nextStep();
	}, 1500);

	useEffect(() => {
		nextStep();
	}, []);
	
	return (
		<main className='flex flex-col items-center justify-between h-screen py-16'>
			<Logo className='' />
			<motion.div animate={controls}>
				{ACTIVE_SCREENS[activeScreen]}
			</motion.div>
			<p className='text-[#D7D7D7] text-2xl text-center'>
				{activeScreen + 1}
				/6
			</p>
		</main>
	);
};

export default OnboardingPage;

import { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.css';
import '@styles/fonts.css';
import '@styles/typeface.css';
import '@styles/burger-menu.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					Росмолодёжь | онбординг
				</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;

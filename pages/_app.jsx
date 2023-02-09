import '../styles/globals.css';
import { env } from 'process';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

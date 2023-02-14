import '../styles/globals.scss';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { env } from 'process';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;

import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<Link href='/' className='logo'>
				<h2>DEVILISH</h2>
			</Link>
			<a
				href='https://github.com/professorsugoi/'
				className='signature'
				aria-label='sugoi signature, click to visit github'
			>
				<img src='/comfi.svg' alt='comfi image' />
			</a>
		</footer>
	);
};

export default Footer;

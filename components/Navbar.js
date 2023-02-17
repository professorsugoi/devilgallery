import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import React, { useEffect, useRef } from 'react';

const Navbar = () => {
	const nav = useRef(null);

	useEffect(() => {
		gsap.to(nav.current, {
			y: '8vh',
			scrollTrigger: {
				trigger: nav.current,
				scrub: true,
				start: 'top top',
				end: 'bottom+=100 top',
			},
		});
	}, []);

	return (
		<nav ref={nav}>
			<Link href='/' className='logo'>
				<h2>DEVILISH</h2>
			</Link>
			<div className='navLinks'>
				<Link href='/about'>
					<span>About</span>
				</Link>
				<Link href='https://plasticiv.com/'>
					<span>Tumblr</span>
				</Link>
				<Link href='https://twitter.com/professorSugoi/'>
					<span>Twitter</span>
				</Link>
				<Link href='https://github.com/professorsugoi/'>
					<span>Github</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

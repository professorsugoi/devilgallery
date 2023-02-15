import Link from 'next/link';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({}) => {
	const nav = useRef(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;
		gsap.to(nav.current, {
			y: '8vh',
			scrollTrigger: {
				trigger: nav.current,
				scrub: true,
				start: 'top top',
				end: 'bottom+=100 top',
			},
		});
	}, [isMounted]);

	return (
		<nav ref={nav}>
			<a href='https://boring.samalander.dev/' className='logo'>
				<h2>DEVILISH</h2>
			</a>
			<div className='navLinks'>
				<Link href='#'>
					<span>About</span>
				</Link>
				<Link href='#'>
					<span>Discord</span>
				</Link>
				<Link href='#'>
					<span>Twitter</span>
				</Link>
				<Link href='#'>
					<span>Opensea</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

import { throttle } from '@/lib/helpers/throttle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import styles from './Navbar.module.css';

const menuItems = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Projects', path: '/projects' },
	{ title: 'Resume', path: '/resume' }
	// { title: 'Get in touch', path: '/contact' }
];

function Navbar(): JSX.Element {
	const { pathname } = useRouter();
	const [navbarOnTop, setNavbarOnTop] = useState<boolean>(true);
	const [animation, setAnimation] = useState<boolean>(false);
	const [expandNavbar, setExpandNavbar] = useState<boolean>(false);

	const handleToggle = () => {
		if (window.innerWidth < 768) setExpandNavbar((prev) => !prev);
	};

	const handleResize = throttle(() => {
		if (window.innerWidth > 768) setExpandNavbar(false);
	}, 300);

	/* const handleScroll = throttle(() => {
		const starfield: HTMLElement | null = document.querySelector('#starfield');

		if (starfield && window.scrollY < starfield.clientHeight) {
			setNavbarOnTop(false);
		} else {
			if (!expandNavbar) setAnimation(true);
			if (navbarOnTop && expandNavbar) setAnimation(false);
			setNavbarOnTop(true);
		}
	}, 300); */

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	useEffect(() => {
		if (pathname === '/') {
			/* const starfield = document.querySelector('#starfield');
			setNavbarOnTop(
				starfield && window.scrollY < starfield.clientHeight ? false : true
			); */

			setNavbarOnTop(false);
			setAnimation(false);

			// window.addEventListener('scroll', handleScroll);
		} else {
			setNavbarOnTop(true);
			setAnimation(true);
		}

		/* return () => {
			if (pathname === '/') {
				window.removeEventListener('scroll', handleScroll);
			}
		}; */
	}, [pathname]);

	return (
		<nav
			className={`${styles.nav} ${
				navbarOnTop
					? `${
							animation ? `${styles.fixed} ${styles.slideDown}` : styles.fixed
					  }`
					: styles.absolute
			}`}>
			<Link href="/">
				<Logo />
			</Link>

			<div
				className={`${styles.blackBackground} ${expandNavbar && styles.active}`}
				onClick={handleToggle}></div>
			<div className={`${styles.menu} ${expandNavbar && styles.active}`}>
				<Logo />
				<ul className={styles.menuItems}>
					{menuItems.map(({ title, path }) => (
						<li
							key={title}
							className={
								pathname == path
									? `${styles.active} ${styles.menuItemsLink}`
									: `${styles.menuItemsLink}`
							}>
							<Link href={path} onClick={handleToggle}>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<Link
					href="/contact"
					className={`${styles.contactLink} ${
						pathname === '/contact' ? styles.active : ''
					}`}
					onClick={handleToggle}>
					Get in touch
				</Link>
			</div>

			<Link
				href="/contact"
				className={`${styles.contactLink} ${
					pathname === '/contact' ? styles.active : ''
				}`}>
				Get in touch
			</Link>

			<button
				id="burger"
				aria-label="Burger"
				className={`${styles.burger} ${expandNavbar && styles.active}`}
				onClick={handleToggle}>
				<span />
				<span />
				<span />
			</button>
		</nav>
	);
}

export default Navbar;

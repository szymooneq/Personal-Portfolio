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
	{ title: 'Resume', path: '/resume' },
	{ title: 'Blog', path: '/blog' }
];

function Navbar(): JSX.Element {
	const { pathname } = useRouter();
	const [expandNavbar, setExpandNavbar] = useState<boolean>(false);

	const handleToggle = () => {
		if (window.innerWidth < 1024) setExpandNavbar((prev) => !prev);
	};

	const handleResize = throttle(() => {
		if (window.innerWidth > 1024) setExpandNavbar(false);
	}, 300);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<nav
			className={`${styles.navbar} ${
				pathname === '/' ? styles.absolute : styles.fixed
			}`}>
			<Link href="/">
				<Logo />
			</Link>

			<div
				className={styles.blackLayer}
				onClick={handleToggle}
				data-open={expandNavbar}></div>
			<div className={styles.menu} data-open={expandNavbar}>
				<Logo />
				<ul className={styles.menuItemsList}>
					{menuItems.map((item) => (
						<li
							key={item.title}
							className={styles.menuItem}
							data-active={pathname === item.path}>
							<Link
								href={item.path}
								onClick={handleToggle}
								aria-current={pathname === item.path ? 'page' : 'false'}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<Link
					href="/contact"
					className={styles.contactLink}
					onClick={handleToggle}
					data-active={pathname === '/contact'}
					aria-current={pathname === '/contact' ? 'page' : 'false'}>
					Get in touch
				</Link>
			</div>

			<Link
				href="/contact"
				className={styles.contactLink}
				data-active={pathname === '/contact'}
				aria-current={pathname === '/contact' ? 'page' : 'false'}>
				Get in touch
			</Link>

			<button
				id="burger"
				aria-label="Burger"
				className={styles.burger}
				data-open={expandNavbar}
				onClick={handleToggle}>
				<span />
				<span />
				<span />
			</button>
		</nav>
	);
}

export default Navbar;

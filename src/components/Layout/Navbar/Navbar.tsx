import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { throttle } from '@/lib/helpers/throttle';
import Logo from '@/components/UI/Logo/Logo';
import ThemeButton from '@/components/UI/ThemeButton/ThemeButton';
import styles from './Navbar.module.css';

const menuItems = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Projects', path: '/projects' },
	{ title: 'Resume', path: '/resume' },
	{ title: 'Blog', path: '/blog' }
];

function Navbar(): JSX.Element {
	const { pathname, push } = useRouter();
	const [isExpand, setIsExpand] = useState<boolean>(false);

	const handleRedirect = () => {
		if (pathname !== '/') push('/');
	};

	const handleToggle = () => {
		if (window.innerWidth < 1024) setIsExpand((prev) => !prev);
	};

	const handleResize = throttle(() => {
		if (window.innerWidth > 1024) setIsExpand(false);
	}, 300);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<nav className={styles.nav} data-home={pathname === '/'}>
			<div className={styles.navContent}>
				<div onClick={() => handleRedirect()}>
					<Logo />
				</div>

				<ul className={styles.menuList}>
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

				<div className={styles.rightSide}>
					<ThemeButton />
					<Link
						href="/contact"
						className={styles.contactLink}
						data-active={pathname === '/contact'}
						aria-current={pathname === '/contact' ? 'page' : 'false'}>
						Get in touch
					</Link>
				</div>

				<button
					id="burger"
					aria-label="Burger"
					className={styles.burger}
					data-expand={isExpand}
					onClick={handleToggle}>
					<span />
					<span />
					<span />
				</button>
			</div>

			<div className={styles.navMobile}>
				<div
					className={styles.opacLayer}
					onClick={handleToggle}
					data-expand={isExpand}></div>
				<div className={styles.mobileMenu} data-expand={isExpand}>
					<Logo />
					<ul className={styles.menuList}>
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

					<div className={styles.options}>
						<ThemeButton />
						{/* <select name="language" id="language">
							<option value="pl">PL</option>
							<option value="en">EN</option>
						</select> */}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

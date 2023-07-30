import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.css'

import { throttle } from '@/lib/helpers'
import Logo from '@/components/UI/Logo'
import Burger from '@/components/UI/Burger'
import * as Button from '@/components/UI/Button'

const menuItems = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Projects', path: '/projects' },
	{ title: 'Resume', path: '/resume' },
	{ title: 'Blog', path: '/blog' }
]

// TODO: Contact Button
const Navbar = (): JSX.Element => {
	const { pathname } = useRouter()
	const [isExpand, setIsExpand] = useState<boolean>(false)

	const handleToggle = () => {
		if (window.innerWidth < 1024) setIsExpand((prev) => !prev)
	}

	const handleResize = throttle(() => {
		if (window.innerWidth > 1024) setIsExpand(false)
	}, 300)

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [handleResize])

	return (
		<nav className={styles.nav} data-home={pathname === '/'}>
			<div className={styles.desktop}>
				<Link href="/">
					<Logo />
				</Link>

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
					<Button.Theme />
					<Link
						href="/contact"
						className={styles.contactLink}
						data-active={pathname === '/contact'}
						aria-current={pathname === '/contact' ? 'page' : 'false'}>
						Get in touch
					</Link>
				</div>

				<Burger isExpanded={isExpand} onClick={handleToggle} />
			</div>

			<div className={styles.mobile}>
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
						<Button.Theme />
						{/* <select name="language" id="language">
							<option value="pl">PL</option>
							<option value="en">EN</option>
						</select> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

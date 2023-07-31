import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.css'

import * as Styled from './Navbar.styled'

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
		<Styled.Navbar isHomePage={pathname === '/'} isOtherPage={pathname !== '/'}>
			<Styled.Desktop>
				<Link href="/">
					<Logo />
				</Link>

				<Styled.Menu>
					{menuItems.map((item) => (
						<Styled.MenuItem
							key={item.title}
							isActive={pathname === item.path}>
							<Link
								href={item.path}
								onClick={handleToggle}
								aria-current={pathname === item.path ? 'page' : 'false'}>
								{item.title}
							</Link>
						</Styled.MenuItem>
					))}
				</Styled.Menu>

				<Styled.ButtonWrapper>
					<Button.Theme />
					<Styled.ContactLink
						href="/contact"
						isActive={pathname === '/contact'}
						aria-current={pathname === '/contact' ? 'page' : 'false'}>
						Get in touch
					</Styled.ContactLink>
				</Styled.ButtonWrapper>

				<Styled.Burger isExpanded={isExpand} onClick={handleToggle}>
					<span></span><span></span><span></span>
				</Styled.Burger>
			</Styled.Desktop>

			<Styled.Mobile>
				<Styled.BlackLayer
					onClick={handleToggle}
					isActive={isExpand}></Styled.BlackLayer>
				<Styled.MobileMenu isExpanded={isExpand}>
					<Logo />
					<Styled.Menu>
						{menuItems.map((item) => (
							<Styled.MenuItem
								key={item.title}
								isActive={pathname === item.path}>
								<Link
									href={item.path}
									onClick={handleToggle}
									aria-current={pathname === item.path ? 'page' : 'false'}>
									{item.title}
								</Link>
							</Styled.MenuItem>
						))}
					</Styled.Menu>
					<Styled.ContactLink
						href="/contact"
						onClick={handleToggle}
						isActive={pathname === '/contact'}
						aria-current={pathname === '/contact' ? 'page' : 'false'}>
						Get in touch
					</Styled.ContactLink>

					<Styled.Settings>
						<Button.Theme />
						{/* <select name="language" id="language">
							<option value="pl">PL</option>
							<option value="en">EN</option>
						</select> */}
					</Styled.Settings>
				</Styled.MobileMenu>
			</Styled.Mobile>
		</Styled.Navbar>
	)
}

export default Navbar

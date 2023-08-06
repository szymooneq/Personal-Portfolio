import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '@/components/UI/Logo'
import Button from '@/components/UI/Button'
import * as Styled from './Navbar.styled'
import ThemeSwitcher from '@/components/UI/ThemeSwitcher'

const MENU_ITEMS = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Projects', path: '/projects' },
	{ title: 'Resume', path: '/resume' },
	{ title: 'Blog', path: '/blog' }
]

const Navbar = (): JSX.Element => {
	const { pathname } = useRouter()
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggle = () => {
		if (window.innerWidth < 1024) setIsExpanded(current => !current)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) setIsExpanded(false)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<Styled.Navbar>
			<Styled.Wrapper>
				<Link href="/">
					<Logo />
				</Link>

				<Styled.Menu>
					<Styled.Links>
						{MENU_ITEMS.map((item) => (
							<li key={item.title}>
								<Styled.Link
									href={item.path}
									onClick={handleToggle}
									isCurrent={pathname === item.path}
									aria-current={pathname === item.path ? 'page' : 'false'}>
									{item.title}
								</Styled.Link>
							</li>
						))}
					</Styled.Links>

					<Styled.Settings>
						<Styled.FeaturedLink
							href="/contact"
							onClick={handleToggle}
							isCurrent={pathname === '/contact'}
							aria-current={pathname === '/contact' ? 'page' : 'false'}>
							Get in touch
						</Styled.FeaturedLink>
						<ThemeSwitcher />
					</Styled.Settings>
				</Styled.Menu>

				<Button variant='burger' isExpanded={isExpanded} onClick={handleToggle}>
					<span />
					<span />
					<span />
				</Button>
			</Styled.Wrapper>
				
			<Styled.Dropdown aria-hidden={!isExpanded} isExpanded={isExpanded}>
				<Styled.Menu>
					<Styled.Links>
						{MENU_ITEMS.map((item) => (
							<li key={item.title}>
								<Styled.Link
									href={item.path}
									onClick={handleToggle}
									isCurrent={pathname === item.path}
									aria-current={pathname === item.path ? 'page' : 'false'}>
									{item.title}
								</Styled.Link>
							</li>
						))}
					</Styled.Links>

					<Styled.Settings>
						<Styled.FeaturedLink
							href="/contact"
							onClick={handleToggle}
							isCurrent={pathname === '/contact'}
							aria-current={pathname === '/contact' ? 'page' : 'false'}>
							Get in touch
						</Styled.FeaturedLink>
						<ThemeSwitcher />
					</Styled.Settings>
				</Styled.Menu>
			</Styled.Dropdown>
				
		</Styled.Navbar>
	)
}

export default Navbar

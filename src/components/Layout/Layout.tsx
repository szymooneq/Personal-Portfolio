import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { LayoutProps } from './Layout.types'
import Main from '@/components/Layout/Main'

// TODO: check keywords
const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<ThemeProvider enableSystem={true}>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Szymon Dudka" />
				<meta
					name="keywords"
					content="Szymon Dudka, Frontend Developer, Responsive Interfaces, User-friendly interfaces, API-based Applications, Web Development, React, Next, TypeScript, JavaScript, HTML, CSS, Project Development, Portfolio, Hangman, Memory Master, Navigation, Apple, Tastebite Recipes, App, Application, Game, CMS, E-Commerce"
				/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121317" />
				<meta name="msapplication-TileColor" content="#121317" />
				<meta name="theme-color" content="#121317" />
			</Head>

			<NextNProgress
				color="linear-gradient(to bottom right, rgb(93, 93, 255), darkorchid)"
				height={2}
				options={{ showSpinner: false }}
			/>

			<Main>{children}</Main>
		</ThemeProvider>
	)
}

export default Layout

import Head from 'next/head'
import Link from 'next/link'
import { contactLinks } from '@/lib/helpers'
import styles from '@/styles/Contact.module.css'

import Page from '@/components/Layout/Page'
import { cubeIcon, penIcon, webGridIcon } from '@/assets/icons'

const cards = [
	{
		title: 'Website design & development',
		desc: 'Experienced designer & visual developer. I create websites/web applications.',
		icon: webGridIcon
	},
	{
		title: 'Visual & graphic design',
		desc: 'I have an eye for the visual side of things. I enjoy working with attention to detail!',
		icon: penIcon
	},
	{
		title: 'Branding',
		desc: 'I combine my visual and analytical side and love creating brands.',
		icon: cubeIcon
	}
]

const contactTypes = [
	{
		question: 'want to call me?',
		href: 'https://discord.com/users/554988199529676800',
		title: 'Schedule a call with me'
	},
	{
		question: 'just want to email me?',
		href: 'mailto:szymooneq@zohomail.eu',
		title: 'szymooneq@zohomail.eu'
	}
]

export default function Contact(): JSX.Element {
	return (
		<Page header="Contact">
			<Head>
				<title>Contact | Szymon Dudka</title>
				<meta
					name="description"
					content="I'm always open to collaborate on a project or hear about an
          opportunity!"
				/>
			</Head>

			<div className={styles.content}>
				<div className={styles.description}>
					<div>
						<h2 className={styles.title}>Get in Touch ✨</h2>
						<p className={styles.subText}>
							I&apos;m always ready to collaborate on a project or hear about an
							opportunity!
						</p>
					</div>
					<div className={styles.types}>
						{contactTypes.map((link) => (
							<div key={link.question}>
								<p className={styles.question}>{link.question}</p>
								<Link
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className={styles.link}>
									{link.title}
								</Link>
							</div>
						))}
					</div>
					<div className={styles.icons}>
						{contactLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noreferrer"
								aria-label={link.ariaLabel}>
								{link.icon}
							</Link>
						))}
					</div>
				</div>

				<form
					className={styles.form}
					action="https://usebasin.com/f/d46c0979603a"
					method="post">
					<div className={styles.field}>
						<label htmlFor="name" hidden>
							Enter your name
						</label>
						<input type="text" name="name" id="name" placeholder="Name" required />
					</div>

					<div className={styles.field}>
						<label htmlFor="email" hidden>
							Enter your e-mail
						</label>
						<input type="email" name="email" id="email" placeholder="E-mail" required />
					</div>

					<div className={styles.field}>
						<label htmlFor="message" hidden>
							Enter your message
						</label>
						<textarea
							id="message"
							name="message"
							rows={8}
							placeholder="Type your message"
							required
						/>
					</div>

					<button type="submit" className={styles.submit}>
						Send Message
					</button>
				</form>
			</div>

			<div className={styles.cards}>
				{cards.map((item) => (
					<div key={item.title} className={styles.card}>
						{item.icon}
						<h3 className={styles.cardTitle}>{item.title}</h3>
						<p className={styles.cardDesc}>{item.desc}</p>
					</div>
				))}
			</div>
		</Page>
	)
}

import Article from '@/components/Layout/Article/Article';
import { cubeIcon, layoutIcon, penIcon } from '@/components/UI/Svg/SvgIcons';
import { contactLinks } from '@/lib/helpers/contactLinks';
import styles from '@/styles/Contact.module.css';
import Head from 'next/head';
import Link from 'next/link';

const cards = [
	{
		title: 'Website design & development',
		desc: 'Experienced designer & visual developer. I create websites/web applications.',
		icon: layoutIcon
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
];

const contactTypes = [
	{
		smallTitle: 'want to call me?',
		linkHref: 'https://discord.com/users/554988199529676800',
		linkDesc: 'Schedule a call with me'
	},
	{
		smallTitle: 'just want to email me?',
		linkHref: 'mailto:szymooneq@zohomail.eu',
		linkDesc: 'szymooneq@zohomail.eu'
	}
];

function Contact(): JSX.Element {
	return (
		<>
			<Head>
				<title>Contact | Szymon Dudka</title>
				<meta
					name="description"
					content="I’m always open to collaborate on a project or hear about an
          opportunity!"
				/>
			</Head>

			<Article header="Contact">
				<div className={styles.content}>
					<div className={styles.description}>
						<div>
							<h2 className={styles.title}>Get in Touch ✨</h2>
							<p className={styles.subText}>
								I'm always ready to collaborate on a project or hear about an
								opportunity!
							</p>
						</div>
						<div className={styles.types}>
							{contactTypes.map((link) => (
								<div key={link.smallTitle}>
									<p className={styles.smallTitle}>{link.smallTitle}</p>
									<Link
										href={link.linkHref}
										target="_blank"
										rel="noreferrer"
										className={styles.link}>
										{link.linkDesc}
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
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								required
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor="email" hidden>
								Enter your e-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="E-mail"
								required
							/>
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
			</Article>
		</>
	);
}

export default Contact;

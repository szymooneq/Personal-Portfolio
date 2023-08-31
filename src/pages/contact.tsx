import Head from 'next/head'
import { contactLinks } from '@/lib/helpers'
import Button from '@/components/UI/Button'
import * as Styled from '@/styles/Contact.styled'
import { cubeIcon, penIcon, webGridIcon } from '@/assets/icons'
import { Container, Heading, Link, SrOnly } from '@/components/shared.styled'

const CARDS = [
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

const CONTACT_QUESTIONS = [
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
		<>
			<Head>
				<title>Contact | Szymon Dudka</title>
				<meta
					name="description"
					content="I'm always open to collaborate on a project or hear about an opportunity!" />
			</Head>

			<Container>
				<Heading>Contact</Heading>

				<Styled.FormSection>
					<Styled.Contact>
						<div>
							<Styled.Title>Get in Touch ✨</Styled.Title>
							<Styled.Description>
								I&apos;m always ready to collaborate on a project or hear about an opportunity!
							</Styled.Description>
						</div>
						<Styled.Questions>
							{CONTACT_QUESTIONS.map((link) => (
								<li key={link.question}>
									<Styled.Question>{link.question}</Styled.Question>
									<Link href={link.href} target="_blank" rel="noreferrer" variant="contactQuestion">
										{link.title}
									</Link>
								</li>
							))}
						</Styled.Questions>

						<Styled.SocialList>
							{contactLinks.map((link) => (
								<li key={link.name}>
									<Link href={link.url} target="_blank" rel="noreferrer" variant="contactIcon">
										<SrOnly>{link.name}</SrOnly>{link.icon}
									</Link>
								</li>
							))}
						</Styled.SocialList>
					</Styled.Contact>

					<Styled.Form action="https://usebasin.com/f/d46c0979603a" method="post">
						<div>
							<label htmlFor="name" hidden>
								Enter your name
							</label>
							<Styled.Input type="text" name="name" id="name" placeholder="Name" required />
						</div>

						<div>
							<label htmlFor="email" hidden>
								Enter your e-mail
							</label>
							<Styled.Input type="email" name="email" id="email" placeholder="E-mail" required />
						</div>

						<div>
							<label htmlFor="message" hidden>
								Enter your message
							</label>
							<Styled.Textarea as="textarea" id="message" name="message" rows={8} placeholder="Type your message" required />
						</div>

						<Button type="submit" variant="contactSubmit">
							Send Message
						</Button>
					</Styled.Form>
				</Styled.FormSection>

				<Styled.Cards>
					{CARDS.map((item) => (
						<Styled.Card key={item.title}>
							{item.icon}
							<Styled.CardTitle>{item.title}</Styled.CardTitle>
							<Styled.CardDesc>{item.desc}</Styled.CardDesc>
						</Styled.Card>
					))}
				</Styled.Cards>
			</Container>
		</>
	)
}

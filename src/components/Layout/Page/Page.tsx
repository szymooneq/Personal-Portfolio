import Header from '@/components/Layout/Header'
import Container from '@/components/Layout/Container'

const Page = ({ header, className, children }: PageProps): JSX.Element => (
	<Container>
		{header ? <Header content={header} /> : null}
		<article className={className}>{children}</article>
	</Container>
)

export default Page

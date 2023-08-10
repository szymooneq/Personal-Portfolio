import type { HeaderProps } from './Header.types'
import * as Styled from './Header.styled'

const Header = ({ content }: HeaderProps): JSX.Element => (
	<header>
		<Styled.Heading>{content}</Styled.Heading>
	</header>
)

export default Header

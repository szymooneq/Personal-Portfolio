import type { ButtonProps } from './Button.types'
import * as Styled from './Button.styled'

const Button = ({ children, ...buttonAttributes }: ButtonProps) => (
  <Styled.Button {...buttonAttributes}>{children}</Styled.Button>
)

export default Button
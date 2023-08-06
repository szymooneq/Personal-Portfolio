type ButtonVariants = 'burger'

export interface StyledButtonProps {
  variant?: ButtonVariants
  isExpanded?: boolean
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {
  children: React.ReactNode
}
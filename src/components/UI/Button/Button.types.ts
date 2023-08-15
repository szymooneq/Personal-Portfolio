type ButtonVariants = 'burger' | 'back' | 'projectLink' | 'technology' | 'resumePrimary' | 'resumeSecondary'

export interface StyledButtonProps {
  variant?: ButtonVariants
  isExpanded?: boolean
  isActive?: boolean
  isReset?: boolean
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {
  children: React.ReactNode
}
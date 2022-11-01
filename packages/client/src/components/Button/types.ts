export interface Props {
  onClick?: () => void
  className?: string
  color?: string
  type?: 'button' | 'submit' | 'reset' 
  children: React.ReactNode
}

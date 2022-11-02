export interface Props {
  onClick?: () => void
  className?: string
  color?: string
  regular?: boolean
  type?: 'button' | 'submit' | 'reset' 
  children: React.ReactNode
}

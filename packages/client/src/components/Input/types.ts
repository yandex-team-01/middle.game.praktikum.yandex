export interface Props<T> {
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<T>) => void
  onBlur?: (e: React.FocusEvent<T, Element>) => void
  className?: string
  inputClassName?: string
  showError?: boolean
  error?: string 
  autoComplete?: string 
}

export interface Props {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  className?: string;
  inputClassName?: string;
  showError?: boolean;
  error?: string;
  autoComplete?: string;
  label?: string;
  placeholder?: string;
}

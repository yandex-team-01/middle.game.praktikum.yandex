import { ReactNode, FormEvent } from 'react';

export type Props = {
  children: ReactNode;
  buttons: ReactNode[];
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

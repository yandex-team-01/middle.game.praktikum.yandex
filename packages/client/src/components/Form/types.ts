import { ReactNode, FormEvent } from 'react';

export type Props = {
  children: ReactNode;
  buttonsBlock: ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

import { ReactI18NextChild } from 'react-i18next';

import styles from './Column.module.scss';

type Props = {
  title: string | number | ReactI18NextChild;
  children: JSX.Element;
};

export const Column = ({ title, children }: Props) => {
  return (
    <div className={styles.column}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

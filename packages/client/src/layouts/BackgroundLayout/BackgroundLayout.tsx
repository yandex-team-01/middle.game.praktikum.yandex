import styles from './BackgroundLayout.module.scss';

type Props = {
  children: JSX.Element;
};

export const BackgroundLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

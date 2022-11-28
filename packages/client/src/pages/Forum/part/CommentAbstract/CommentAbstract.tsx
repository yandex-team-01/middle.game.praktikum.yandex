import styles from './CommentAbstract.module.scss';

type CommentAbstractProps = {
  date: string;
  text: string;
};

export const CommentAbstract = ({ date, text }: CommentAbstractProps) => {
  return (
    <div className={styles.comments}>
      <div>{date}</div>
      <div className={styles.count}>{text}</div>
    </div>
  );
};

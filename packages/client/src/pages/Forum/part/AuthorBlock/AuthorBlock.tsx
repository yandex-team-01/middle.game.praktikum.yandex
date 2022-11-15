import styles from './AuthorBlock.module.scss';

type AuthorBlockProps = {
  avatar: string;
  author: string;
};

export const AuthorBlock = ({ avatar, author }: AuthorBlockProps) => {
  return (
    <div className={styles.block_author}>
      <img src={avatar} className={styles.avatar} />
      <div className={styles.author}>{author}</div>
    </div>
  );
};

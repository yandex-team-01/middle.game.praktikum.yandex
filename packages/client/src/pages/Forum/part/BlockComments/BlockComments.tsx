import { useTranslation } from 'react-i18next';

import styles from './BlockComment.module.scss';

import { Topic } from '../Topic';
import { IComment } from '../Comment/types';
import { Comment } from '../Comment';
import { Props } from './types';

import { SendComment } from '../SendComment';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const BlockComments = ({ topic }: Props) => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <Topic
          id={topic.id}
          title={topic.title}
          description={topic.description}
          author={topic.author}
          date={topic.date}
          comments={topic.comments}
          views={topic.views}
        />
        <div className={styles.title}>{t('comments')}</div>
        <div className={styles.list}>
          {topic.comments.map((comment: IComment, index: number) => {
            return <Comment key={index} comment={comment} />;
          })}
        </div>
        <BlankWindow className={styles.card}>
          <SendComment />
        </BlankWindow>
      </div>
    </ErrorBoundary>
  );
};

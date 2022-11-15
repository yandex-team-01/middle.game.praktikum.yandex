import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './BlockComment.module.scss';
import { Topic } from '../Topic';
import { IComment } from '../Comment/types';
import { Comment } from '../Comment';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { SendComment } from '../SendComment';
import { Props } from './types';

export const BlockComments = ({ topic }: Props) => {

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
        <div className={styles.title}>COMMENTS</div>
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

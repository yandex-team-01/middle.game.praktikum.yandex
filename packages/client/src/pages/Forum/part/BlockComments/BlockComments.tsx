import React from 'react';
import styles from './BlockComment.module.scss';
import { Topic } from '../Topic';
import { Props } from './types';
import { SendComment } from '../CommentEditor';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { CommentList } from '../CommentList';

export const BlockComments = ({ topic, comments }: Props) => {
  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <Topic
          id={topic.id}
          title={topic.title}
          description={topic.description}
          id_author={topic.id_author}
          date={topic.date}
          views={topic.views}
        />
        <CommentList comments={comments} />
        <SendComment topicId={topic.id} />
      </div>
    </ErrorBoundary>
  );
};

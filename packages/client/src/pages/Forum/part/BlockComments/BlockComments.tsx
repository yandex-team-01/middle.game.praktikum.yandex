import React from 'react';
import styles from './BlockComment.module.scss';
import { Topic } from '../Topic';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { SendComment } from '../SendComment';
import { Props } from './types';
import { CommentList } from '../CommentList';

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
        <CommentList comments={topic.comments} />
        <SendComment topicId={topic.id} />
      </div>
    </ErrorBoundary>
  );
};

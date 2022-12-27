import React from 'react';
import styles from './CommentsPage.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectActiveTopic, selectComments } from 'src/store/forum/ForumSelectors';
import { BlockComments } from 'src/pages/Forum/part/BlockComments';

export const CommentsPage = () => {
  const topic = useAppSelector(selectActiveTopic);
  const comments = useAppSelector(selectComments);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        {topic && <BlockComments topic={topic} comments={comments} />}
      </div>
    </ErrorBoundary>
  );
};

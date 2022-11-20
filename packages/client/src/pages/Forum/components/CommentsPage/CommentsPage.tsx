import React from 'react';
import styles from './CommentsPage.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectActiveTopic } from 'src/store/forum/ForumSelectors';
import { BlockComments } from 'src/pages/Forum/part/BlockComments';

export const CommentsPage = () => {
  const [topic] = useAppSelector(selectActiveTopic);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        {topic && <BlockComments topic={topic} />}
      </div>
    </ErrorBoundary>
  );
};

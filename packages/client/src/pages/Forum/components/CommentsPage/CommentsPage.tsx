import React from 'react';
import styles from './CommentsPage.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectActiveTopic } from 'src/store/forum/ForumSelectors';
import { BlockComments } from '../../part/BlockComments';
import { ButtonCreateTopic } from '../../part/ButtonCreateTopic';

export const CommentsPage = () => {
  const [topic] = useAppSelector(selectActiveTopic);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <ButtonCreateTopic />
        {topic && <BlockComments topic={topic} />}
      </div>
    </ErrorBoundary>
  );
};

import React from 'react';
import styles from './Topics.module.scss';
import { Topic } from '../../part/Topic';
import { selectListTopics } from 'src/store/forum/ForumSelectors';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { ButtonCreateTopic } from '../../part/ButtonCreateTopic';

export const TopicList = () => {
  const topics = useAppSelector(selectListTopics);

  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <ButtonCreateTopic />
        <div className={styles.list}>
          {Object.keys(topics).map((topicId: string, index: number) => {
            return <Topic key={index} {...topics[topicId]} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

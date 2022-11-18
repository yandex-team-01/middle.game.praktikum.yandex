import React from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectListTopics } from 'src/store/forum/ForumSelectors';
import { ButtonCreateTopic } from '../../part/ButtonCreateTopic';
import { Topic } from '../../part/Topic';
import styles from './Topics.module.scss';

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

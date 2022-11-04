import React from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { Topic } from '../Topic';
import { ITopic } from '../Topic/types';
import styles from './topics.module.scss';

export const TopicList = () => {
  const topics = useAppSelector(state => state.forum.listTopics);

  return (
    <ErrorBoundary>
      <div className={styles.list}>
        {topics.map((topic: ITopic, index: number) => {
          return <Topic key={index} topic={topic} />;
        })}
      </div>
    </ErrorBoundary>
  );
};

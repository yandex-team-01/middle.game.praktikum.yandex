import React from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import topics from 'src/static/topics.json';
import { Topic } from '../Topic';
import { ITopic } from '../Topic/types';
import styles from './topics.module.scss';

export const TopicList = () => {
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

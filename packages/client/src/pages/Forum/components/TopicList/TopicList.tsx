import React from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { Topic } from '../Topic';
import { ITopic } from '../Topic/types';
import styles from './Topics.module.scss';

export const TopicList = () => {
  const topics = useAppSelector(state => state.forum.listTopics);

  return (
    <div className={styles.list}>
      {topics.map((topic: ITopic, index: number) => {
        return <Topic key={index} {...topic} />;
      })}
    </div>
  );
};

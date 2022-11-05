import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { Topic } from '../../part/Topic';
import { ITopic } from '../../part/Topic/types';
import styles from './Topics.module.scss';

export const TopicList = () => {
  const navigate = useNavigate();
  const topics = useAppSelector(state => state.forum.listTopics);

  const handlerCreateTopic = useCallback(() => {
    navigate('/forum/createtopic');
  }, [navigate]);


  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <Button className={styles.button} onClick={handlerCreateTopic}>POST NEW TOPIC</Button>
        <div className={styles.list}>
          {topics.map((topic: ITopic, index: number) => {
            return <Topic key={index} {...topic} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

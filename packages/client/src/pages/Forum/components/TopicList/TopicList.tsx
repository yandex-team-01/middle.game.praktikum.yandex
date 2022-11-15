import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectListTopics } from 'src/store/forum/ForumSelectors';
import { Topic } from '../../part/Topic';
import styles from './Topics.module.scss';

export const TopicList = () => {
  const navigate = useNavigate();
  const topics = useAppSelector(selectListTopics);

  const handleCreateTopic = useCallback(() => {
    navigate('/forum/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <Button
          regular
          className={styles.button_create_topic}
          onClick={handleCreateTopic}>
          POST NEW TOPIC
        </Button>
        <div className={styles.list}>
          {Object.keys(topics).map((topicId: string, index: number) => {
            return <Topic key={index} {...topics[topicId]} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

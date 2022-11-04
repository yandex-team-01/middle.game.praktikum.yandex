import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from '../../components/Button';
import { TopicList } from './components/TopicList';
import styles from './forum.module.scss';

export const Forum = () => {
  const navigate = useNavigate();

  const handleGoCreateTopic = useCallback(() => {
    navigate('/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button regular>GO BACK</Button>
            <Button regular>PLAY</Button>
          </div>
          <Button regular onClick={handleGoCreateTopic}>
            POST NEW TOPIC
          </Button>
        </div>
        <div className={styles.block_topics}>
          <TopicList />
        </div>
      </div>
    </ErrorBoundary>
  );
};

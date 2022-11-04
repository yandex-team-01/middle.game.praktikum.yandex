import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { TopicList } from './components/TopicList';
import styles from './forum.module.scss';

export const Forum = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button onClick={() => navigate('/')} regular>GO BACK</Button>
            <Button onClick={() => navigate('/loading')} regular>PLAY</Button>
          </div>
          <Button regular onClick={() => navigate('/createtopic')}>

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

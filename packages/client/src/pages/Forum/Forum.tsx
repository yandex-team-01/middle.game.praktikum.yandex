import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { TopicList } from './components/TopicList';
import styles from './Forum.module.scss';

export const Forum = () => {
  const navigate = useNavigate();

  const handlerBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handlerLoadGame = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

  const handlerCreateTopic = useCallback(() => {
    navigate('/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button onClick={() => navigate('/')}>GO BACK</Button>
            <Button onClick={() => navigate('/loading')}>PLAY</Button>
          </div>
          <Button regular onClick={handlerCreateTopic}>POST NEW TOPIC</Button>
        </div>
        <div className={styles.block_topics}>
          <TopicList />
        </div>
      </div>
    </ErrorBoundary>
  );
};

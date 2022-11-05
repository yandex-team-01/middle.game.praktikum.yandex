import React, { useCallback } from 'react';
import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import styles from './Comments.module.scss';
import { BlockComments } from './components/BlockComments';

export const ForumCommentsPage = () => {
  const navigate = useNavigate();
  const topic = useAppSelector(state => state.forum.activeTopic);

  const handlerBack = useCallback(() => {
    navigate('/forum');
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
            <Button onClick={handlerBack}>GO BACK</Button>
            <Button onClick={handlerLoadGame}>PLAY</Button>
          </div>
          <Button onClick={handlerCreateTopic}>POST NEW TOPIC</Button>
        </div>
        {topic && <BlockComments topic={topic} />}
      </div>
    </ErrorBoundary>
  );
};

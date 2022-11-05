import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import styles from './Forum.module.scss';

export const Forum = () => {
  const navigate = useNavigate();

  const handlerBack = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  const handlerLoadGame = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <Button onClick={handlerBack}>GO BACK</Button>
          <Button onClick={handlerLoadGame}>PLAY</Button>
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

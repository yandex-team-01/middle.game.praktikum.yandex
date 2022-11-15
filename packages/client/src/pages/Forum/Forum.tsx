import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import styles from './Forum.module.scss';

export const Forum = () => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  const handlePlay = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.forum}>
        <div className={styles.block_button}>
          <Button regular onClick={handleBack}>
            GO BACK
          </Button>
          <Button regular onClick={handlePlay}>
            PLAY
          </Button>
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

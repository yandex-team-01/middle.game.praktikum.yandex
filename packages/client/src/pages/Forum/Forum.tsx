import React, { useCallback, useState } from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from '../../components/Button';
import { CreateTopic } from './components/CreateTopic';
import { TopicList } from './components/TopicList';
import styles from './forum.module.scss';

export const Forum = () => {
  const [open, setOpen] = useState(false);

  const handleCreateNewTopic = useCallback(() => {
    setOpen(isOpen => !isOpen);
  }, []);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button>GO BACK</Button>
            <Button>PLAY</Button>
          </div>
          <Button onClick={handleCreateNewTopic}>POST NEW TOPIC</Button>
        </div>
        <div className={styles.block_posts}>
          {open ? (
            <CreateTopic />
          ) : (
            <TopicList />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

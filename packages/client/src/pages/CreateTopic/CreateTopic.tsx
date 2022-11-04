import React, { ChangeEvent, useCallback } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import styles from './createtopic.module.scss';
import { useNavigate } from 'react-router-dom';

export const CreateTopic = () => {
  const navigate = useNavigate();

  const handleCreateNewTopic = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  const handleBackToForum = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button onClick={handleBackToForum}>GO BACK</Button>
            <Button>PLAY</Button>
          </div>
          <Button onClick={handleCreateNewTopic}>PUBLISH</Button>
        </div>
        <div className={styles.block_topics}>
          <BlankWindow className={styles.card}>
            <div className={styles.topic}>
              <div className={styles.title}>NEW TOPIC: </div>
              <Input
                name="name_topic"
                className={styles.input}
                onChange={changeName}
                value=""
              />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
              <Input
                name="descrioption_topic"
                className={styles.input}
                onChange={changeDescription}
                value=""
              />
            </div>
          </BlankWindow>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const changeName = (event: ChangeEvent) => {
  console.log(event.target.value);
  //здесь будет логика создания топика
};

const changeDescription = (event: ChangeEvent) => {
  console.log(event.target.value);
  //здесь будет логика создания топика
};

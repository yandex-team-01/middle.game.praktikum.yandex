import React, { ChangeEvent } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import styles from './createtopic.module.scss';

export const CreateTopic = () => {
  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div className={styles.topic}>
          <div className={styles.title}>NEW TOPIC: </div>
          <Input name="name_topic" onChange={() => changeName} value="" />
        </div>
        <div className={styles.title}>Topic description: </div>
        <div className={styles.description}>
          <Input
            name="descrioption_topic"
            className={styles.input}
            onChange={() => changeDescription}
            value=""
          />
        </div>
        <Button onClick={publishTopic}>
          PUBLISH
        </Button>
      </BlankWindow>
    </ErrorBoundary>
  );
};

const changeName = (value: string) => {
  //здесь будет логика создания топика
};

const changeDescription = (value: string) => {
  //здесь будет логика создания топика
};

const publishTopic = () => {
  //здесь будет логика создания топика
};

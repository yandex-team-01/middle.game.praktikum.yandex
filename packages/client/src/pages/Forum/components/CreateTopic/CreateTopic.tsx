import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Input } from 'src/components/Input';
import styles from './createtopic.module.scss';

export const CreateTopic = () => {
  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div className={styles.topic}>
          <div className={styles.title}>NEW TOPIC: </div>
          <Input name="name_topic" onChange={() => change} value="" />
        </div>
        <div className={styles.title}>Topic description: </div>
        <div className={styles.description}>
          <Input name="name_topic" className={styles.input} onChange={() => change} value="" />
        </div>
      </BlankWindow>
    </ErrorBoundary>
  );
};

const change = (value: string): void => {
  console.log(value);
};

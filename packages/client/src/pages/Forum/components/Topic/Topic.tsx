import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import styles from './topic.module.scss';
import { ITopic, Props } from './types';

export const Topic = (props: Props) => {
  const { title, description, author, date, comments, views } = props.topic;

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div onClick={() => change(props.topic)} className={styles.topic}>
          <div className={styles.title}>{title}</div>
          <div>{description}</div>
          <div className={styles.author}>
            <div>author: {author}</div>
            <div>{date}</div>
          </div>
        </div>
        <div className={styles.comments}>
          <div className={styles.title}>comments</div>
          <div className={styles.count}>{comments.length}</div>
        </div>
        <div className={styles.views}>
          <div className={styles.title}>views</div>
          <div className={styles.count}>{views}</div>
        </div>
      </BlankWindow>
    </ErrorBoundary>
  );
};

const change = (topic: ITopic) => {
  console.log(topic.id);
  //здесь будет логика перехода в топик
};

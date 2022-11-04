import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppDispatch } from 'src/hooks/redux';
import { changeActiveTopic } from 'src/store/forum/ForumSlice';
import styles from './topic.module.scss';
import { Props } from './types';

export const Topic = (props: Props) => {
  const { id, title, description, author, date, comments, views } = props.topic;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerGoToTopic = useCallback((): void => {
    dispatch(changeActiveTopic(id));
    navigate('/topic');
  }, [dispatch, id, navigate]);

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div onClick={handlerGoToTopic} className={styles.topic}>
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

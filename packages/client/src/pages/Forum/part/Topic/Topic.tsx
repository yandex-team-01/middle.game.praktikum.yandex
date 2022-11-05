import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppDispatch } from 'src/hooks/redux';
import { changeActiveTopic } from 'src/store/forum/ForumSlice';
import { Column } from '../Column/Column';
import styles from './Topic.module.scss';
import { ITopic } from './types';

export const Topic = ({
  id,
  title,
  description,
  author,
  date,
  comments,
  views,
}: ITopic) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerGoToTopic = useCallback((): void => {
    dispatch(changeActiveTopic(id));
    navigate('/forum/topic');
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
        <Column title="comments">
          <h3>{comments.length}</h3>
        </Column>
        <Column title="views">
          <h3>{views}</h3>
        </Column>
      </BlankWindow>
    </ErrorBoundary>
  );
};

import React, { useCallback } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { Comment } from './Comment';
import { IComment } from './Comment/types';
import { Topic } from '../Forum/components/Topic';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import styles from './comments.module.scss';

export const ForumCommentsPage = () => {
  const navigate = useNavigate();

  const topic = useAppSelector(state => state.forum.activeTopic);
  const login = useAppSelector(state => state.auth.user?.login);
  const dispatch = useAppDispatch();

  const addComment = useCallback((): void => {
    const input = document.getElementsByName('comment')[0] as HTMLInputElement;
    const date = new Date();
    const new_format_date = String(
      date.getDate() +
      '/' +
      date.getMonth() +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );

    if (topic) {
      dispatch(
        addCommentInTopic({
          id: topic.id,
          comment: {
            text: input.value,
            author: login || '',
            date: new_format_date,
            likes: 0,
          },
        })
      );
    }

    input.value = '';
  }, [dispatch, topic, login]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button onClick={() => navigate('/forum')}>GO BACK</Button>
            <Button onClick={() => navigate('/loading')}>PLAY</Button>
          </div>
          <Button onClick={() => navigate('/createtopic')}>
            POST NEW TOPIC
          </Button>
        </div>
        {topic && (
          <div className={styles.block_topics}>
            <Topic topic={topic} />
            <div className={styles.title}>COMMENTS</div>
            <div className={styles.list}>
              {topic.comments.map((comment: IComment, index: number) => {
                return <Comment key={index} comment={comment} />;
              })}
            </div>
            <BlankWindow className={styles.card}>
              <div className={styles.topic}>
                <div className={styles.text}>New comment: </div>
                <Input
                  name="comment"
                  className={styles.input}
                  onChange={changeComment}
                  value=""
                />
                <Button className={styles.button} onClick={addComment}>
                  Send
                </Button>
              </div>
            </BlankWindow>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

const changeComment = (): void => {
  //возможно здесь будет валидация формы?
};

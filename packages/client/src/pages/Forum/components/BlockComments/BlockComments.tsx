import React, { ChangeEvent, useCallback, useState } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './BlockComment.module.scss';
import { Topic } from '../../part/Topic';
import { IComment } from '../../part/Comment/types';
import { Comment } from '../../part/Comment';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const BlockComments = () => {
  const navigate = useNavigate();
  const [textComment, setTextComment] = useState('');
  const login = useAppSelector(state => state.auth.user?.login);
  const topic = useAppSelector(state => state.forum.activeTopic);
  const dispatch = useAppDispatch();

  const changeComment = useCallback((event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setTextComment(input.value);
  }, []);

  const addComment = useCallback((): void => {
    const newFormatDate = dateFormatting(new Date());
    if (topic) {
      dispatch(
        addCommentInTopic({
          id: topic.id,
          comment: {
            text: textComment,
            author: login || '',
            date: newFormatDate,
            likes: 0,
          },
        })
      );
    }
    setTextComment('');
  }, [dispatch, topic, login, textComment]);

  const handlerCreateTopic = useCallback(() => {
    navigate('/forum/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <Button className={styles.button_publish} onClick={handlerCreateTopic}>POST NEW TOPIC</Button>
        {topic && <div className={styles.block_topics}>
          <Topic {...topic} />
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
                value={textComment}
              />
              <Button className={styles.button} onClick={addComment}>
                Send
              </Button>
            </div>
          </BlankWindow>
        </div>
        }
      </div>
    </ErrorBoundary>
  );
};

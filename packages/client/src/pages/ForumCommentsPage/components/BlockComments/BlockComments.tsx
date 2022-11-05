import React, { ChangeEvent, useCallback, useState } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './BlockComment.module.scss';
import { Props } from './types';
import { Topic } from 'src/pages/Forum/components/Topic';
import { IComment } from '../Comment/types';
import { Comment } from '../Comment';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

export const BlockComments = ({ topic }: Props) => {
  const [textComment, setTextComment] = useState('');
  const login = useAppSelector(state => state.auth.user?.login);
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

  return (
    <div className={styles.block_topics}>
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
  );
};

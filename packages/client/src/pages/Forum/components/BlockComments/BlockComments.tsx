import React, { useCallback } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './BlockComment.module.scss';
import { Topic } from '../../part/Topic';
import { IComment } from '../../part/Comment/types';
import { Comment } from '../../part/Comment';
import { Button } from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { SendComment } from '../../part/SendComment';
import { selectActiveTopic } from 'src/store/forum/ForumSelectors';

export const BlockComments = () => {
  const navigate = useNavigate();

  const [topic] = useAppSelector(selectActiveTopic);

  const handleCreateTopic = useCallback(() => {
    navigate('/forum/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <Button
          regular
          className={styles.button_new_post}
          onClick={handleCreateTopic}>
          POST NEW TOPIC
        </Button>
        {topic && (
          <div className={styles.block_topics}>
            <Topic
              id={topic.id}
              title={topic.title}
              description={topic.description}
              author={topic.author}
              date={topic.date}
              comments={topic.comments}
              views={topic.views}
            />
            <div className={styles.title}>COMMENTS</div>
            <div className={styles.list}>
              {topic.comments.map((comment: IComment, index: number) => {
                return <Comment key={index} comment={comment} />;
              })}
            </div>
            <BlankWindow className={styles.card}>
              <SendComment />
            </BlankWindow>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

import React, { memo } from 'react';
import styles from './topics.module.scss';
import { Topic } from 'src/pages/Forum/part/Topic';
import { selectListTopics } from 'src/store/forum/ForumSelectors';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { ButtonCreateTopic } from 'src/pages/Forum/part/ButtonCreateTopic';
import { ITopic } from 'src/pages/Forum/part/Topic/types';

import { fetchTopics } from 'src/store/forum/ForumActions';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';

export const TopicList = memo(() => {
  const topics = useAppSelector(selectListTopics);
  const getTopics = useBoundAction(() => fetchTopics());

  useMountEffectOneCall(() => {
    getTopics();
  });

  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <ButtonCreateTopic />
        <div className={styles.list}>
          {topics && Object.values(topics).map((topic: ITopic, index: number) => {
            return <Topic id={topic.id}
              title={topic.title}
              description={topic.description}
              id_author={topic.id_author}
              date={topic.date}
              views={topic.views}
              key={index} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
});

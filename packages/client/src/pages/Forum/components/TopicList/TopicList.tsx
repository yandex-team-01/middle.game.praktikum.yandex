import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Topics.module.scss';

import { Topic } from '../../part/Topic';
import { ITopic } from '../../part/Topic/types';

import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

import { useAppSelector } from 'src/hooks/redux';
import { selectListTopics } from 'src/store/forum/ForumSelectors';
import { Topic } from '../../part/Topic';
import styles from './Topics.module.scss';

import { Topic } from '../../part/Topic';
import { ITopic } from '../../part/Topic/types';

import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

import { useAppSelector } from 'src/hooks/redux';

export const TopicList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const topics = useAppSelector(selectListTopics);

  const handleCreateTopic = useCallback(() => {
    navigate('/forum/createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block_topics}>
        <Button
          regular
          className={styles.button_create_topic}
          onClick={handleCreateTopic}>
          {t('postNewTopic')}
        </Button>
        <div className={styles.list}>
          {Object.keys(topics).map((topicId: string, index: number) => {
            return <Topic key={index} {...topics[topicId]} />;
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

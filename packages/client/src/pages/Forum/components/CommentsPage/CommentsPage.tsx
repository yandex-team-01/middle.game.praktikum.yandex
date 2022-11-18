import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './CommentsPage.module.scss';
import { Button } from 'src/components/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectActiveTopic } from 'src/store/forum/ForumSelectors';
import { BlockComments } from '../../part/BlockComments';
import { ButtonCreateTopic } from '../../part/ButtonCreateTopic';
import { useNavigator } from 'src/hooks/useNavigator';

export const CommentsPage = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const [topic] = useAppSelector(selectActiveTopic);

  const handleCreateTopic = () => navigator('/forum/createtopic');

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <Button
          regular
          className={styles.button_new_post}
          onClick={handleCreateTopic}>
          {t('postNewTopic')}
        </Button>
        <ButtonCreateTopic />
        {topic && <BlockComments topic={topic} />}
      </div>
    </ErrorBoundary>
  );
};

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CommentsPage.module.scss';
import { Button } from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppSelector } from 'src/hooks/redux';
import { selectActiveTopic } from 'src/store/forum/ForumSelectors';
import { BlockComments } from '../../part/BlockComments';

export const CommentsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [topic] = useAppSelector(selectActiveTopic);

  const handleCreateTopic = useCallback(() => {
    navigate('createtopic');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <Button
          regular
          className={styles.button_new_post}
          onClick={handleCreateTopic}>
          {t('postNewTopic')}
        </Button>
        {topic && <BlockComments topic={topic} />}
      </div>
    </ErrorBoundary>
  );
};

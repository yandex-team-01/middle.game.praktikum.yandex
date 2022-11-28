import { useTranslation } from 'react-i18next';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';
import { changeActiveTopic } from 'src/store/forum/ForumSlice';
import { Column } from '../Column/Column';
import { useBoundAction } from './helper';
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
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleTopicChange = useBoundAction(() => {
    navigator('topic');
    return changeActiveTopic(id);
  });

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div onClick={handleTopicChange} className={styles.topic}>
          <div className={styles.title}>{title}</div>
          <div>{description}</div>
          <div className={styles.author}>
            <div>
              {t('author')}: {author}
            </div>
            <div>{date}</div>
          </div>
        </div>
        <Column title={t('comments')}>
          <h3>{comments.length}</h3>
        </Column>
        <Column title={t('views')}>
          <h3>{views}</h3>
        </Column>
      </BlankWindow>
    </ErrorBoundary>
  );
};

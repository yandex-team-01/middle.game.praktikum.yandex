import { useTranslation } from 'react-i18next';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { useNavigator } from 'src/hooks/useNavigator';
import { fetchComments } from 'src/store/forum/ForumActions';
import { selectComments } from 'src/store/forum/ForumSelectors';
import { changeActiveTopic } from 'src/store/forum/ForumSlice';
import { Column } from '../Column/Column';
import styles from './Topic.module.scss';
import { ITopic } from './types';

export const Topic = ({
  id,
  title,
  description,
  id_author,
  date,
  views,
}: ITopic) => {
  const comments = useAppSelector(selectComments);

  const dispatch = useAppDispatch();

  let countComments = 0;
  if (comments) countComments = Object.values(comments).length;

  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleTopicChange = () => {
    dispatch(fetchComments(id));
    dispatch(changeActiveTopic(id));
    navigator('topic');
  };

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <div onClick={handleTopicChange} className={styles.topic}>
          <div className={styles.title}>{title}</div>
          <div>{description}</div>
          <div className={styles.author}>
            <div>
              {t('author')}: {id_author}
            </div>
            <div>{date}</div>
          </div>
        </div>
        <Column title={t('comments')}>
          <h3>{countComments}</h3>
        </Column>
        <Column title={t('views')}>
          <h3>{views}</h3>
        </Column>
      </BlankWindow>
    </ErrorBoundary>
  );
};

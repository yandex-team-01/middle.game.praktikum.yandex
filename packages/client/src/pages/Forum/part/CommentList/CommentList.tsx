import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Spinner } from 'src/components/Spinner';
import { useAppSelector } from 'src/hooks/redux';
import { selectLoading } from 'src/store/forum/ForumSelectors';
import { Comment } from '../Comment';
import { IComment } from '../Comment/types';
import styles from './CommentList.module.scss';
import { Props } from './types';

export const CommentList = memo(({ comments }: Props) => {
  const { t } = useTranslation();
  const isLoading = useAppSelector(selectLoading);

  return (
    <ErrorBoundary>
      <div>
        <div className={styles.title}>{t('comments')}</div>
        <div className={styles.list}>
          {isLoading ? <Spinner /> :
            <>
              {comments && Object.values(comments).map((comment: IComment, index: number) => {
                return <Comment key={index} comment={comment} />;
              })}
            </>
          }
        </div>
      </div>
    </ErrorBoundary>
  );
});

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Comment } from '../Comment';
import styles from './CommentList.module.scss';
import { Props } from './types';

export const CommentList = memo(({ comments }: Props) => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <div>
        <div className={styles.title}>{t('comments')}</div>
        <div className={styles.list}>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
});

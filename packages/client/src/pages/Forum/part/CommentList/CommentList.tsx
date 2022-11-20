import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Comment } from '../Comment';
import { IComment } from '../Comment/types';
import styles from './CommentList.module.scss';
import { Props } from './types';

export const CommentList = memo(({ comments }: Props) => {
    const { t } = useTranslation();

    return (
        <ErrorBoundary>
            <div className={styles.title}>{t('comments')}</div>
            <div className={styles.list}>
                {comments.map((comment: IComment, index: number) => {
                    return <Comment key={index} comment={comment} />;
                })}
            </div>
        </ErrorBoundary>
    );
});

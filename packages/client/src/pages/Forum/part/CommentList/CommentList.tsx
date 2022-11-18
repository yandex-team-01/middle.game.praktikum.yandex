import React from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Comment } from '../Comment';
import { IComment } from '../Comment/types';
import styles from './CommentList.module.scss';
import { Props } from './types';

export const CommentList = ({ comments }: Props) => {
    return (
        <ErrorBoundary>
            <div className={styles.title}>COMMENTS</div>
            <div className={styles.list}>
                {comments.map((comment: IComment, index: number) => {
                    return <Comment key={index} comment={comment} />;
                })}
            </div>
        </ErrorBoundary>
    );
};

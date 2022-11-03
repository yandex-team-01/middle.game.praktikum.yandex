import React from 'react';
import { Comment } from '../Comment';
import { IComment } from '../Comment/types';
import styles from './comments.module.scss';
import { Props } from './types';

export const CommentsPage = (props: Props) => {
    const { topic } = props;

    return (
        <div className={styles.list}>
            {topic.comments.map((comment: IComment, index: number) => {
                return <Comment key={index} comment={comment} />;
            })}
        </div>
    );
};

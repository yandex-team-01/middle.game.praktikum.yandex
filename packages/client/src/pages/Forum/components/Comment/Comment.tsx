import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './comment.module.scss';
import { Props } from './types';

export const Comment = (props: Props) => {
    const { comment } = props;

    return (
        <BlankWindow className={styles.card}>
            <div className={styles.topic}>
                <div>аватар</div>
                <div className={styles.author}>
                    <div>author: {comment.author}</div>
                    <div>{comment.date}</div>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.title}>сам текст</div>
                <div className={styles.count}>{comment.text}</div>
            </div>
            <div className={styles.views}>
                <div className={styles.title}>звездочки</div>
                <div className={styles.count}>{comment.likes}</div>
            </div>
        </BlankWindow>
    );
};

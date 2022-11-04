import React, { ChangeEvent } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { Comment } from '../Comment';
import { IComment } from '../Comment/types';
import { Topic } from '../Topic';
import { ITopic } from '../Topic/types';
import styles from './comments.module.scss';
import { Props } from './types';

const mochaTopic: ITopic = {
    "id": "1",
    "title": "HELP ME!",
    "description": "Topic description",
    "author": "user_1",
    "date": "25/10/2022 12:20",
    "comments": [
        {
            "author": "user_2",
            "text": "Hello",
            "date": "25/10/2022 12:32",
            "likes": 2
        },
        {
            "author": "user_1",
            "text": "How are you?",
            "date": "25/10/2022 12:36",
            "likes": 1
        }
    ],
    "views": 74
};

export const CommentsPage = () => {
    const topic = mochaTopic;

    return (
        <div>
            <Topic topic={topic} />
            <div className={styles.title}>COMMENTS</div>
            <div className={styles.list}>
                {topic.comments.map((comment: IComment, index: number) => {
                    return <Comment key={index} comment={comment} />;
                })}
            </div>
            <BlankWindow className={styles.card}>
                <div className={styles.topic}>
                    <div className={styles.text}>New comment: </div>
                    <Input name="comment" className={styles.input} onChange={changeComment} value="" />
                    <Button className={styles.button}>Send</Button>
                </div>
            </BlankWindow>
        </div>
    );
};

const changeComment = (event: ChangeEvent) => {
    //здесь будет логика создания комментария
};

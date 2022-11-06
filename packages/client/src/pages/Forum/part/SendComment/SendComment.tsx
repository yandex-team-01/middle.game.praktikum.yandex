import React, { ChangeEvent, useCallback, useState } from 'react';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Input } from 'src/components/Input';
import styles from './SendComment.module.scss';
import { Button } from 'src/components/Button';

export const SendComment = () => {
    const [textComment, setTextComment] = useState('');
    const [login, topic] = useAppSelector(state => [state.auth.user?.login, state.forum.activeTopic]);
    const dispatch = useAppDispatch();

    const changeComment = useCallback((event: ChangeEvent) => {
        const input = event.target as HTMLInputElement;
        setTextComment(input.value);
    }, []);

    const addComment = useCallback((): void => {
        const newFormatDate = dateFormatting(new Date());
        if (topic) {
            dispatch(
                addCommentInTopic({
                    id: topic.id,
                    comment: {
                        text: textComment,
                        author: login || '',
                        date: newFormatDate,
                        likes: 0,
                    },
                })
            );
        }
        setTextComment('');
    }, [dispatch, topic, login, textComment]);

    return (
        <div className={styles.new_comment}>
            <div className={styles.text}>New comment: </div>
            <Input
                name="comment"
                className={styles.input}
                onChange={changeComment}
                value={textComment}
            />
            <Button regular className={styles.button_comment} onClick={addComment}>
                Send
            </Button>
        </div>
    );
};

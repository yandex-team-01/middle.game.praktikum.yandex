import { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Input } from 'src/components/Input';
import styles from './SendComment.module.scss';
import { Button } from 'src/components/Button';
import { selectLoginTopic } from 'src/store/forum/ForumSelectors';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const SendComment = () => {
  const { t } = useTranslation();
  const [textComment, setTextComment] = useState('');
  const { login, topic } = useAppSelector(selectLoginTopic);
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
    <ErrorBoundary>
      <div className={styles.new_comment}>
        <div className={styles.text}>{t('newComment')}: </div>
        <Input
          name="comment"
          className={styles.input}
          onChange={changeComment}
          value={textComment}
        />
        <Button regular className={styles.button_comment} onClick={addComment}>
          {t('send')}
        </Button>
      </div>
    </ErrorBoundary>
  );
};

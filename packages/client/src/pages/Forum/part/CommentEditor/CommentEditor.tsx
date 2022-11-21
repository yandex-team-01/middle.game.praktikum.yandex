import React, { useCallback } from 'react';
import { addCommentInTopic } from 'src/store/forum/ForumSlice';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { Input } from 'src/components/Input';
import styles from './CommentEditor.module.scss';
import { Button } from 'src/components/Button';
import { selectLogin } from 'src/store/forum/ForumSelectors';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Props } from './types';
import { useFormik } from 'formik';
import { initialRegValuesSchema, regSchema } from './CommentEditorSchema';
import { IComment } from '../Comment/types';
import { BlankWindow } from 'src/components/BlankWindow';
import { useTranslation } from 'react-i18next';

export const SendComment = ({ topicId }: Props) => {
  const { t } = useTranslation();
  const { login } = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const addComment = useCallback(
    (comment: IComment): void => {
      dispatch(
        addCommentInTopic({
          id: topicId,
          comment: comment,
        })
      );
    },
    [dispatch, topicId]
  );

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialRegValuesSchema,
      validationSchema: regSchema,
      onSubmit: values => {
        const comment: IComment = {
          text: values.comment,
          author: login || '',
          date: dateFormatting(new Date()),
          likes: 0,
        };
        addComment(comment);
      },
    });

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <form className={styles.new_comment} onSubmit={handleSubmit}>
          <div className={styles.text}>{t('newComment')}: </div>
          <Input
            name="comment"
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            showError={Boolean(errors.comment) && Boolean(touched.comment)}
            error={errors.comment}
          />
          <Button regular className={styles.button_comment} type="submit">
            {t('send')}
          </Button>
        </form>
      </BlankWindow>
    </ErrorBoundary>
  );
};

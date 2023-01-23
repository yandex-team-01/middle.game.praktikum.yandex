import React from 'react';
import { dateFormatting } from 'src/utils/dateFormatting';
import { useAppSelector } from 'src/hooks/redux';
import { Input } from 'src/components/Input';
import styles from './CommentEditor.module.scss';
import { Button } from 'src/components/Button';
import { selectLogin } from 'src/store/forum/ForumSelectors';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Props } from './types';
import { useFormik } from 'formik';
import DOMPurify from 'dompurify';

import {
  initialCommentValuesSchema,
  commentSchema,
} from './CommentEditorSchema';
import { ICommentCreate } from '../Comment/types';
import { BlankWindow } from 'src/components/BlankWindow';
import { useTranslation } from 'react-i18next';
import { fetchCreateComments } from 'src/store/forum/ForumActions';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { v1 } from 'uuid';

export const SendComment = ({ topicId }: Props) => {
  const { t } = useTranslation();
  const { login } = useAppSelector(selectLogin);
  const purify = (value: string) => DOMPurify.sanitize(value);

  const addComment = useBoundAction((comment: ICommentCreate) =>
    fetchCreateComments(comment)
  );

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialCommentValuesSchema,
      validationSchema: commentSchema(t),
      onSubmit: values => {
        values.comment = purify(values.comment);
        const comment: ICommentCreate = {
          id: v1(),
          text: values.comment,
          id_topic: topicId,
          id_author: login || '',
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

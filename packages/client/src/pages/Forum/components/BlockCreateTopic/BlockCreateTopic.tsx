import React, { useCallback } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
// import { addNewTopic } from 'src/store/forum/ForumSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { dateFormatting } from 'src/utils/dateFormatting';
import { selectUserLogin } from 'src/store/auth/AuthSelectors';
import { useNavigator } from 'src/hooks/useNavigator';
import { useFormik } from 'formik';
import { initialTopicValuesSchema, topicSchema } from './CreateTopicSchema';
import styles from './CreateTopic.module.scss';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { v1 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { fetchCreateTopic } from 'src/store/forum/ForumActions';

export const BlockCreateTopic = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const login = useAppSelector(selectUserLogin);
  const dispatch = useAppDispatch();

  const handleCreateNewTopic = useCallback(
    (newtopic: ITopic) => {
      dispatch(fetchCreateTopic(newtopic));
      navigator(-1);
    },
    [dispatch, navigator]
  );

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialTopicValuesSchema,
      validationSchema: topicSchema(t),
      onSubmit: values => {
        const newtopic: ITopic = {
          id: v1(),
          title: values.name_topic,
          description: values.description_topic,
          id_author: login || '',
          date: dateFormatting(new Date()),
          views: 0,
        };
        handleCreateNewTopic(newtopic);
      },
    });

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit} className={styles.block}>
        <Button regular className={styles.button_publish} type="submit">
          {t('publich')}
        </Button>
        <BlankWindow className={styles.card}>
          <div className={styles.block_input}>
            <div className={styles.new_topic}>
              <div className={styles.title}>{t('newTopic')}: </div>
              <Input
                name="name_topic"
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name_topic}
                showError={
                  Boolean(errors.name_topic) && Boolean(touched.name_topic)
                }
                error={errors.name_topic}
              />
            </div>
            <div className={styles.title_description}>
              {t('topicDescription')}:{' '}
            </div>
            <div className={styles.description}>
              <Input
                name="description_topic"
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description_topic}
                showError={
                  Boolean(errors.description_topic) &&
                  Boolean(touched.description_topic)
                }
                error={errors.description_topic}
              />
            </div>
          </div>
        </BlankWindow>
      </form>
    </ErrorBoundary>
  );
};

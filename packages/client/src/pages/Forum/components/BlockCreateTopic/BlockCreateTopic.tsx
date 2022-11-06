import React, { ChangeEvent, useCallback, useState } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import styles from './CreateTopic.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';
import { ITopic } from '../../part/Topic/types';
import { addNewTopic } from 'src/store/forum/ForumSlice';
import { useAppSelector } from 'src/hooks/redux';
import { dateFormatting } from 'src/utils/dateFormatting';

export const BlockCreateTopic = () => {
  const [nameTopic, setNameTopic] = useState('');
  const [descriptionTopic, setDescriptionTopic] = useState('');
  const navigate = useNavigate();

  const login = useAppSelector(state => state.auth.user?.login);
  const dispatch = useDispatch();

  const changeName = useCallback((event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setNameTopic(input.value);
  }, []);

  const changeDescription = useCallback((event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setDescriptionTopic(input.value);
  }, []);

  const handleCreateNewTopic = useCallback(() => {
    const newFormatDate = dateFormatting(new Date());
    const newtopic: ITopic = {
      id: v1(),
      title: nameTopic,
      description: descriptionTopic,
      author: login || '',
      date: newFormatDate,
      comments: [],
      views: 0,
    };
    dispatch(addNewTopic(newtopic));
    navigate('/forum');
  }, [dispatch, login, navigate, nameTopic, descriptionTopic]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <Button regular className={styles.button_publish} onClick={handleCreateNewTopic}>PUBLISH</Button>
        <BlankWindow className={styles.card}>
          <div className={styles.block_input}>
            <div className={styles.topic}>
              <div className={styles.title}>NEW TOPIC: </div>
              <Input
                name="name_topic"
                className={styles.input}
                onChange={changeName}
                value={nameTopic}
              />
            </div>
            <div className={styles.title_description}>Topic description: </div>
            <div className={styles.description}>
              <Input
                name="description_topic"
                className={styles.input}
                onChange={changeDescription}
                value={descriptionTopic}
              />
            </div>
          </div>
        </BlankWindow>
      </div>
    </ErrorBoundary>
  );
};

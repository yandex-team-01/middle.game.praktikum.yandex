import React, { ChangeEvent, useCallback, useState } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import styles from './CreateTopic.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';
import { ITopic } from '../Forum/components/Topic/types';
import { addNewTopic } from 'src/store/forum/ForumSlice';
import { useAppSelector } from 'src/hooks/redux';
import { dateFormatting } from 'src/utils/dateFormatting';

export const ForumCreateTopic = () => {
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

  const handlerBack = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  const handlerLoadGame = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button onClick={handlerBack}>GO BACK</Button>
            <Button onClick={handlerLoadGame}>PLAY</Button>
          </div>
          <Button onClick={handleCreateNewTopic}>PUBLISH</Button>
        </div>
        <div className={styles.block_topics}>
          <BlankWindow className={styles.card}>
            <div className={styles.topic}>
              <div className={styles.title}>NEW TOPIC: </div>
              <Input
                name="name_topic"
                className={styles.input}
                onChange={changeName}
                value={nameTopic}
              />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
              <Input
                name="descrioption_topic"
                className={styles.input}
                onChange={changeDescription}
                value={descriptionTopic}
              />
            </div>
          </BlankWindow>
        </div>
      </div>
    </ErrorBoundary>
  );
};

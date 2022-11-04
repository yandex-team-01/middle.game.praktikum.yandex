import React, { ChangeEvent, useCallback } from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import styles from './createtopic.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as uuid from 'uuid';
import { ITopic } from '../Forum/components/Topic/types';
import { addNewTopic } from 'src/store/forum/ForumSlice';
import { useAppSelector } from 'src/hooks/redux';

export const ForumCreateTopic = () => {
  const navigate = useNavigate();

  const login = useAppSelector(state => state.auth.user?.login);
  const dispatch = useDispatch();

  const handleCreateNewTopic = useCallback(() => {
    const name_topic = document.getElementsByName(
      'name_topic'
    )[0] as HTMLInputElement;
    const descrioption_topic = document.getElementsByName(
      'descrioption_topic'
    )[0] as HTMLInputElement;
    const date = new Date();
    const new_format_date = String(
      date.getDate() +
      '/' +
      date.getMonth() +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );

    const newtopic: ITopic = {
      id: uuid.v1(),
      title: name_topic.value,
      description: descrioption_topic.value,
      author: login || '',
      date: new_format_date,
      comments: [],
      views: 0,
    };
    dispatch(addNewTopic(newtopic));
    navigate('/forum');
  }, [dispatch, login, navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.block_button}>
          <div className={styles.block_buttons_top}>
            <Button
              onClick={() => {
                navigate('/forum');
              }}>
              GO BACK
            </Button>
            <Button>PLAY</Button>
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
                value=""
              />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
              <Input
                name="descrioption_topic"
                className={styles.input}
                onChange={changeDescription}
                value=""
              />
            </div>
          </BlankWindow>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const changeName = (event: ChangeEvent) => {
  console.log(event);
  //возможно здесь будет валидация формы?
};

const changeDescription = (event: ChangeEvent) => {
  console.log(event);
  //возможно здесь будет валидация формы?
};

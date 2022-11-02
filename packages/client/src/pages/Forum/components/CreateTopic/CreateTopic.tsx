import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import { Input } from 'src/components/Input';
import styles from './createtopic.module.scss';

export const CreateTopic = () => {
    return (
        <BlankWindow className={styles.card}>
            <div className={styles.topic}>
                <div className={styles.title}>NEW TOPIC: </div>
                <Input name="name_topic" onChange={change} value='' />
            </div>
            <div className={styles.title}>Topic description: </div>
            <div className={styles.description}>
                <Input name="name_topic" className={styles.input} onChange={change} value='' />
            </div>
        </BlankWindow>
    );
};

const change = (value: any) => {
    //здесь будет логика создания топика
};

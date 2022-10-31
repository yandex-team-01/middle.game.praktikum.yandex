import React from 'react';
import topics from '../../../../static/topics.json'
import { Topic } from '../Topic';
import { ITopic } from '../Topic/types';

export const TopicList = () => {
    return (
        <>
            {topics.map((topic: ITopic, index: number) => {
              return <Topic key={index} topic={topic} />
            })}
        </>
    );
};
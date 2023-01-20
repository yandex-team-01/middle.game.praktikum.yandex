import { defaultHeaders } from 'src/constants/http';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { fetchApi } from 'src/store/utils';

import {
  ICommentForBackend,
  IComment,
  ICommentCreate,
} from 'src/pages/Forum/part/Comment/types';
import {
  IEmojiCreate,
  IEmojiAnswer,
} from 'src/pages/Forum/part/EmojiBlock/types';

export const getTopics = () => {
  return fetchApi<ITopic[]>(
    '/api/forum/topic',
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...defaultHeaders,
        'Content-Type': 'text/plain;charset=UTF-8',
        Accept: 'application/json',
      },
    },
    `${import.meta.env.VITE_SERVER}`
  );
};

export const createTopics = (topic: ITopic) => {
  return fetchApi<ITopic>(
    '/api/forum/topic',
    {
      method: 'POST',
      headers: {
        mode: 'cors',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        referrerPolicy: 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify(topic),
    },
    `${import.meta.env.VITE_SERVER}`
  );
};

export const getComments = (id_topic: string) => {
  return fetchApi<ICommentForBackend[]>(
    `/api/forum/comment?id_topic=${id_topic}`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...defaultHeaders,
        'Content-Type': 'text/plain;charset=UTF-8',
        Accept: 'application/json',
      },
    },
    `${import.meta.env.VITE_SERVER}`
  );
};

export const createComment = (comment: ICommentCreate) => {
  return fetchApi<IComment>(
    '/api/forum/comment',
    {
      method: 'POST',
      headers: {
        mode: 'cors',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        referrerPolicy: 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify(comment),
    },
    `${import.meta.env.VITE_SERVER}`
  );
};

export const createReaction = (reaction: IEmojiCreate) => {
  return fetchApi<IEmojiAnswer | null>(
    '/api/forum/reaction',
    {
      method: 'POST',
      headers: {
        mode: 'cors',
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        referrerPolicy: 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify(reaction),
    },
    `${import.meta.env.VITE_SERVER}`
  );
};

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
    '/forum/topic',
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...defaultHeaders,
        'Content-Type': 'text/plain;charset=UTF-8',
        Accept: 'application/json',
      },
    },
    `/api`
  );
};

export const createTopics = (topic: ITopic) => {
  return fetchApi<ITopic>(
    '/forum/topic',
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
    `/api`
  );
};

export const getComments = (id_topic: string) => {
  return fetchApi<ICommentForBackend[]>(
    `/forum/comment?id_topic=${id_topic}`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...defaultHeaders,
        'Content-Type': 'text/plain;charset=UTF-8',
        Accept: 'application/json',
      },
    },
    `/api`
  );
};

export const createComment = (comment: ICommentCreate) => {
  return fetchApi<IComment>(
    '/forum/comment',
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
    `/api`
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

import { defaultHeaders } from 'src/constants/http';
import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { fetchApi } from 'src/store/utils';

export const getTopics = () => {
  return fetchApi<ITopic[]>('/api/forum/topic', {
    credentials: 'include',
    method: 'GET',
    headers: {
      ...defaultHeaders,
      'Content-Type': 'text/plain;charset=UTF-8',
      Accept: 'application/json',
    },
  });
};

export const createTopics = (topic: ITopic) => {
  return fetchApi<ITopic>('/api/forum/topic', {
    method: 'POST',
    headers: {
      mode: 'cors',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      referrerPolicy: 'strict-origin-when-cross-origin',
    },
    body: JSON.stringify(topic),
  });
};

export const getComments = (id_topic: string) => {
  return fetchApi<IComment[]>(`/api/forum/comment?id_topic=${id_topic}`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      ...defaultHeaders,
      'Content-Type': 'text/plain;charset=UTF-8',
      Accept: 'application/json',
    },
  });
};

export const createComment = (comment: IComment) => {
  return fetchApi<IComment>('/api/forum/comment', {
    method: 'POST',
    headers: {
      mode: 'cors',
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      referrerPolicy: 'strict-origin-when-cross-origin',
    },
    body: JSON.stringify(comment),
  });
};

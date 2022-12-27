import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createComment,
  createTopics,
  getComments,
  getTopics,
} from 'src/api/forumApi';
import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';

export const fetchTopics = createAsyncThunk('api/forum/topic', async () => {
  try {
    const res = await getTopics();
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const fetchCreateTopic = createAsyncThunk(
  'api/forum/createtopic',
  async (topic: ITopic) => {
    try {
      const res = await createTopics(topic);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchComments = createAsyncThunk(
  'api/forum/comments',
  async (id_topic: string) => {
    try {
      const res = await getComments(id_topic);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchCreateComments = createAsyncThunk(
  'api/forum/createcomment',
  async (comment: IComment) => {
    try {
      const res = await createComment(comment);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

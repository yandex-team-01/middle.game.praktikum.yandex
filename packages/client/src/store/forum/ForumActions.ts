import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createComment,
  createTopics,
  createReaction,
  getComments,
  getTopics,
} from 'src/api/forumApi';
import {
  IComment,
  ICommentCreate,
  ICommentForBackend,
} from 'src/pages/Forum/part/Comment/types';
import {
  IEmoji,
  IEmojiCreate,
  IEmojiForBackend,
} from 'src/pages/Forum/part/EmojiBlock/types';
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
      let newReactions: IEmoji[] = [];

      // преобразую массив реакций собирая одинаковые эмоджи в один объект
      const newArr: IComment[] = res.map((comment: ICommentForBackend) => {
        newReactions = [];
        comment.reactions.forEach((reaction: IEmojiForBackend) => {
          const indexEmoji = newReactions.findIndex(
            item => item.value === reaction.value
          );
          if (indexEmoji === -1) {
            newReactions.push({
              value: reaction.value,
              authorsId: [reaction.id_author],
            });
          } else {
            newReactions[indexEmoji].authorsId.push(reaction.id_author);
          }
          return reaction;
        });

        return {
          ...comment,
          reactions: newReactions,
        };
      });

      return newArr;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchCreateComments = createAsyncThunk(
  'api/forum/createcomment',
  async (comment: ICommentCreate) => {
    try {
      const res = await createComment(comment);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchCreateReaction = createAsyncThunk(
  'api/forum/createreaction',
  async (reaction: IEmojiCreate) => {
    try {
      const res = await createReaction(reaction);

      return {
        request: reaction,
        data: res,
      };
    } catch (error) {
      console.error(error);
    }
  }
);

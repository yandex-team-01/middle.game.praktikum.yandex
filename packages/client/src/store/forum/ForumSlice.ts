import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import {
  fetchComments,
  fetchCreateComments,
  fetchCreateTopic,
  fetchTopics,
  fetchCreateReaction,
} from './ForumActions';
import { initialState } from './initialSlice';

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    changeActiveTopic(state, action: PayloadAction<string>) {
      if (state.topics) state.activeTopic = state.topics[action.payload];
    },
  },
  extraReducers: buider => {
    // запрашиваем список топиков
    buider.addCase(fetchTopics.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchTopics.fulfilled, (state, action) => {
      if (action.payload)
        state.topics = action.payload.reduce<Record<string, ITopic>>(
          (acc, t) => {
            acc[t.id] = t;
            return acc;
          },
          {}
        );
      state.loading = false;
    });
    buider.addCase(fetchTopics.rejected, state => {
      state.loading = false;
    });
    // запрашиваем список комментариев к топику по id_topic
    buider.addCase(fetchComments.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchComments.fulfilled, (state, action) => {
      if (action.payload)
        state.comments = action.payload.reduce<Record<string, IComment>>(
          (acc, comment) => {
            acc[comment.id] = comment;
            return acc;
          },
          {}
        );
      state.loading = false;
    });
    buider.addCase(fetchComments.rejected, state => {
      state.loading = false;
    });
    // создаем новый топик
    buider.addCase(fetchCreateTopic.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchCreateTopic.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        if (state.topics) {
          state.topics = {
            ...state.topics,
            [action.payload.id]: action.payload,
          };
        } else {
          state.topics = {
            [action.payload.id]: action.payload,
          };
        }
      }
    });
    buider.addCase(fetchCreateTopic.rejected, state => {
      state.loading = false;
    });
    // создаем новый комментарий к топику
    buider.addCase(fetchCreateComments.fulfilled, (state, action) => {
      if (state.comments && action.payload)
        state.comments[action.payload.id] = action.payload;
      state.loading = false;
    });
    buider.addCase(fetchCreateComments.rejected, state => {
      state.loading = false;
    });
    //добавить реакцию
    buider.addCase(fetchCreateReaction.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchCreateReaction.fulfilled, (state, action) => {
      if (action.payload && state.comments) {
        if (action.payload.data) {
          //добавили новую реакцию
          const reaction = action.payload.data;
          const comment = state.comments[reaction.id_comment];

          const index = comment.reactions.findIndex(
            item => item.value === reaction.value
          );

          if (index === -1) {
            // если такой реакции не было, добавляю
            comment.reactions.push({
              value: reaction.value,
              authorsId: [reaction.id_author],
            });
          } else {
            // если реакция была, добавляю id пользователя в authorsId
            comment.reactions[index].authorsId.push(reaction.id_author);
          }
        } else {
          // удалили реакцию
          const request = action.payload.request;
          const comment = state.comments[request.id_comment];
          const index = comment.reactions.findIndex(
            item => item.value === request.value
          );

          if (index !== -1) {
            // убираю id пользователя из authorsId
            comment.reactions[index].authorsId = comment.reactions[
              index
            ].authorsId.filter(item => item !== request.id_author);
          }
        }
      }

      // state.comments
      state.loading = false;
    });
    buider.addCase(fetchCreateReaction.rejected, state => {
      state.loading = false;
    });
  },
});

export const forumReducer = forumSlice.reducer;
export const { changeActiveTopic } = forumSlice.actions;

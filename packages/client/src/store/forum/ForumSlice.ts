import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/pages/Forum/part/Comment/types';
// import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { fetchComments, fetchCreateComments, fetchCreateTopic, fetchTopics } from './ForumActions';
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
    buider.addCase(
      fetchTopics.fulfilled,
      (state, action) => {
        if (action.payload)
          state.topics = action.payload.reduce<Record<string, ITopic>>((acc, t) => {
            acc[t.id] = t;
            return acc;
          }, {});
        state.loading = false;
      }
    );
    buider.addCase(fetchTopics.rejected, state => {
      state.loading = false;
    });
    // запрашиваем список комментариев к топику по id_topic
    buider.addCase(fetchComments.pending, state => {
      state.loading = true;
    });
    buider.addCase(
      fetchComments.fulfilled,
      (state, action) => {
        if (action.payload)
          state.comments = action.payload.reduce<Record<string, IComment>>((acc, t) => {
            acc[t.id] = t;
            return acc;
          }, {});
        state.loading = false;
      }
    );
    buider.addCase(fetchComments.rejected, state => {
      state.loading = false;
    });
    // создаем новый топик
    buider.addCase(fetchCreateTopic.pending, state => {
      state.loading = true;
    });
    buider.addCase(
      fetchCreateTopic.fulfilled,
      (state) => {
        state.loading = false;
      }
    );
    buider.addCase(fetchCreateTopic.rejected, state => {
      state.loading = false;
    });
    // создаем новый комментарий к топику
    buider.addCase(fetchCreateComments.pending, state => {
      state.loading = true;
    });
    buider.addCase(
      fetchCreateComments.fulfilled,
      (state) => {
        state.loading = true;
      }
    );
    buider.addCase(fetchCreateComments.rejected, state => {
      state.loading = false;
    });
  }
});

export const forumReducer = forumSlice.reducer;
export const { changeActiveTopic } = forumSlice.actions;

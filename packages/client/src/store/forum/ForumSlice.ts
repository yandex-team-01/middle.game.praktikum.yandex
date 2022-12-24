import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { fetchTopics } from './ForumActions';
import { initialState } from './initialSlice';

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    changeActiveTopic(state, action: PayloadAction<string>) {
      if (state.topics) state.activeTopic = state.topics[action.payload];
    },
    addCommentInTopic(
      state,
      action: PayloadAction<{ id: string; comment: IComment }>
    ) {
      state.activeTopic?.comments.push(action.payload.comment);

      if (!state.topics) return;

      const topic = state.topics[action.payload.id];
      if (topic) topic.comments.push(action.payload.comment);
    },
    addNewTopic(state, action: PayloadAction<ITopic>) {
      if (state.topics) state.topics[action.payload.id] = action.payload;
    },
  },
  extraReducers: buider => {
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
  }
});

export const forumReducer = forumSlice.reducer;
export const { changeActiveTopic, addCommentInTopic, addNewTopic } =
  forumSlice.actions;

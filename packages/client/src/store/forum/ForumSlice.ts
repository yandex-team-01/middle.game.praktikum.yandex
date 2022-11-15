import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/pages/Forum/part/Comment/types';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { initialState } from './initialSlice';

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    changeActiveTopic(state, action: PayloadAction<string>) {
      state.activeTopic = state.topics[action.payload];
    },
    addCommentInTopic(
      state,
      action: PayloadAction<{ id: string; comment: IComment }>
    ) {
      state.activeTopic?.comments.push(action.payload.comment);

      const topic = state.topics[action.payload.id];
      if (topic) topic.comments.push(action.payload.comment);
    },
    addNewTopic(state, action: PayloadAction<ITopic>) {
      state.topics[action.payload.id] = action.payload;
    },
  },
});

export const forumReducer = forumSlice.reducer;
export const { changeActiveTopic, addCommentInTopic, addNewTopic } =
  forumSlice.actions;

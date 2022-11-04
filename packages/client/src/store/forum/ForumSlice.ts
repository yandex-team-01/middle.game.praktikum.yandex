import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/pages/ForumCommentsPage/Comment/types';
import { ITopic } from 'src/pages/Forum/components/Topic/types';
import { initialState } from './initialSlice';

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    changeActiveTopic(state, action: PayloadAction<string>) {
      const topic = state.listTopics.filter(
        topic => topic.id === action.payload
      )[0];
      state.activeTopic = topic;
    },
    addCommentInTopic(
      state,
      action: PayloadAction<{ id: string; comment: IComment }>
    ) {
      state.activeTopic?.comments.push(action.payload.comment);

      const topic = state.listTopics.filter(
        topic => topic.id === action.payload.id
      )[0];
      topic.comments.push(action.payload.comment);
    },
    addNewTopic(state, action: PayloadAction<ITopic>) {
      state.listTopics.unshift(action.payload);
    },
  },
});

export const forumReducer = forumSlice.reducer;
export const { changeActiveTopic, addCommentInTopic, addNewTopic } =
  forumSlice.actions;

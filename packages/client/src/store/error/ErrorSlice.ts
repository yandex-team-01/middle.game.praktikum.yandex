import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as makeUUID } from 'uuid';
import { ErrorState } from '../types';

const initialState: ErrorState = {
  errorList: [],
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    removeError(state, action: PayloadAction<string>) {
      state.errorList = state.errorList.filter(t => t.id !== action.payload);
    },
    addError(state, action: PayloadAction<string>) {
      const id = makeUUID();
      state.errorList = [...state.errorList, { text: action.payload, id: id }];
    },
  },
});

export const errorReducer = errorSlice.reducer;
export const { removeError, addError } = errorSlice.actions;

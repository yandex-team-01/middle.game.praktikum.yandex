import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ErrorState {
  error: string | null
}

const initialState: ErrorState = {
  error: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default errorSlice.reducer;

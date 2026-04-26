import { configureStore } from '@reduxjs/toolkit';
import internReducer from './slices/internSlice';

export const store = configureStore({
  reducer: {
    interns: internReducer,
  },
});

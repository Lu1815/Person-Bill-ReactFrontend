import { configureStore } from '@reduxjs/toolkit';
import { appApi } from '../services/appApi';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  },
});

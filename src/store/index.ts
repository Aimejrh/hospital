import { Action, configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppAction = Action<string>;

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;

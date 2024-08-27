import { configureStore } from '@reduxjs/toolkit';
import gameSliceReducer from './GameSlice/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

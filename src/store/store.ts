import { configureStore } from '@reduxjs/toolkit';
import recentlyVisitedReducer from './features/recently-visited-slice';

export const store = configureStore({
	reducer: {
		recentlyVisited: recentlyVisitedReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

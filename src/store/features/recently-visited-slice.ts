import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RecentlyVisitedState = {
	characters: [],
};

export const recentlyVisitedSlice = createSlice({
	name: 'recentlyVisited',
	initialState,
	reducers: {
		addCharacter: (state, action: PayloadAction<CharacterCard>) => {
			if (state.characters.length === 10) {
				state.characters.pop();
			}
			state.characters.splice(0, 0, action.payload);
		},
	},
});

export const { addCharacter } = recentlyVisitedSlice.actions;

export default recentlyVisitedSlice.reducer;

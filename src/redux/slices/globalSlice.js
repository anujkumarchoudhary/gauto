import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    globalData: null,
};

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGlobalData: (state, action) => {
            state.globalData = action.payload;
        },
    },
});

// ✅ Correct: export actions and reducer
export const { setGlobalData } = GlobalSlice.actions;
export default GlobalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice ({
    name: 'siteModal',
    initialState: {
       isSiteVisible: true
    },
    reducers: {
        setIsVisible: (state, action) => {
            state.isSiteVisible = action.payload;
        },
    }
});

export const {setIsVisible} = slice.actions;

export default slice.reducer;
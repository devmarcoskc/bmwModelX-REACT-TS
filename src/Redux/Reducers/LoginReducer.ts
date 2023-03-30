import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice ({
    name: 'login',
    initialState: {
       isLogged: false
    },
    reducers: {
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
    }
});

export const {setIsLogged} = slice.actions;

export default slice.reducer;
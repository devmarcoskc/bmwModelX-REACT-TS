import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice ({
    name: 'itemCar',
    initialState: {
        title: '',
        backgroundImage: {
            backgroundIMG: '',
        }
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setImageBackground: (state, action) => {
            state.backgroundImage = action.payload;
        }
    }
});

export const { setTitle,setImageBackground} = slice.actions;

export default slice.reducer;
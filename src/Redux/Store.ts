import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './Reducers/itemReducer';

export const store = configureStore({
    reducer: {
        itemCar: itemReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
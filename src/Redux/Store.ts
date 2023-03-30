import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './Reducers/itemReducer';
import LoginReducer from './Reducers/LoginReducer';

export const store = configureStore({
    reducer: {
        itemCar: itemReducer,
        loginUser: LoginReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
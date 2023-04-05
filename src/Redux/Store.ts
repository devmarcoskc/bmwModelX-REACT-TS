import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './Reducers/itemReducer';
import LoginReducer from './Reducers/LoginReducer';
import siteModalReducer from './Reducers/siteModalReducer';

export const store = configureStore({
    reducer: {
        itemCar: itemReducer,
        loginUser: LoginReducer,
        modalMsg: siteModalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
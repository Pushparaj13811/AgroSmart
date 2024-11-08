import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cropReducer  from './cropSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        crop: cropReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
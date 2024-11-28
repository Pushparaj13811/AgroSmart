import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cropReducer from './cropSlice';
import videoReducer from './videoSlice'
import aiSlice from './aiSlice';
import weatherSlice from './weatherSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        crop: cropReducer,
        videos: videoReducer,
        aiSlice: aiSlice,
        weatherSlice: weatherSlice,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
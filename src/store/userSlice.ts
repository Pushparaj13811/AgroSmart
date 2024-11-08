import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as userApi from '../api/userApi';
import { User, UserState } from '../types/types';

const initialState: UserState = {
    user: null,
    status: 'idle',
    error: null,
};

// Async actions
export const userActions = {
    register: createAsyncThunk<User, User>('user/register', async (user) => await userApi.register(user)),
    login: createAsyncThunk<User, { email: string; password: string }>('user/login', async ({ email, password }) => await userApi.login(email, password)),
    logout: createAsyncThunk<void>('user/logout', async () => {
        await userApi.logout();
        return;
    }),
    getUser: createAsyncThunk<User>('user/getUser', async () => await userApi.getUser()),
    refreshToken: createAsyncThunk<User>('user/refreshToken', async () => await userApi.refreshAccessToken()),
    changePassword: createAsyncThunk<User, { oldPassword: string; newPassword: string }>('user/changePassword', async ({ oldPassword, newPassword }) => await userApi.changeCurrentPassword(oldPassword, newPassword)),
    updateAvatar: createAsyncThunk<User, File>('user/updateAvatar', async (avatar) => await userApi.updateUserAvatar(avatar)),
    updateCoverImage: createAsyncThunk<User, File>('user/updateCoverImage', async (coverImage) => await userApi.updateUserCoverImage(coverImage)),
    updateProfile: createAsyncThunk<User, User>('user/updateProfile', async (user) => await userApi.updateUserProfile(user)),
    updateLanguage: createAsyncThunk<User, string>('user/updateLanguage', async (language) => await userApi.updateUserLanguage(language)),
    updateBio: createAsyncThunk<User, string>('user/updateBio', async (bio) => await userApi.updateUserBio(bio)),
};

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith('user/') && action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<User> =>
                    action.type.startsWith('user/') &&
                    action.type.endsWith('/fulfilled') &&
                    action.type !== 'user/logout/fulfilled',
                (state, action) => {
                    state.status = 'succeeded';
                    state.user = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type === 'user/logout/fulfilled',
                (state) => {
                    state.status = 'idle';
                    state.user = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith('user/') && action.type.endsWith('/rejected'),
                (state, action: any) => {
                    state.status = 'failed';
                    state.error = action.error?.message || 'Unknown error';
                }
            ),
});

export default userSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as userApi from '../api/userApi';
import { RegisterFormData, User, UserState, ValidateAccessTokenResponse, UserProfileResponse, AccountData } from '../types/types';
import i18next from 'i18next';

const savedUser = localStorage.getItem('user');
const savedUserProfile = localStorage.getItem('userProfile');
let state: UserState = {
    user: savedUser ? JSON.parse(savedUser) : null,
    userProfile: savedUserProfile ? JSON.parse(savedUserProfile) : null,
    status: 'idle',
    error: null,
};

// Async actions
export const userActions = {
    register: createAsyncThunk<User, RegisterFormData>('user/register', async (user) => await userApi.register(user)),
    login: createAsyncThunk<User, { email: string; password: string }>('user/login', async ({ email, password }) => await userApi.login(email, password)),
    logout: createAsyncThunk<void>('user/logout', async () => {
        await userApi.logout();
    }),
    getUser: createAsyncThunk<User>('user/getUser', async () => await userApi.getUser()),
    getUserProfile: createAsyncThunk<UserProfileResponse, { _id: string }>('user/getUserProfile', async () => await userApi.getUserProfile()),
    refreshToken: createAsyncThunk<User>('user/refreshToken', async () => await userApi.refreshAccessToken()),
    validateAccessToken: createAsyncThunk<ValidateAccessTokenResponse, void>('user/validateAccessToken', async () => await userApi.validateAccessToken()),
    changePassword: createAsyncThunk<User, { oldPassword: string; newPassword: string }>('user/changePassword', async ({ oldPassword, newPassword }) => await userApi.changeCurrentPassword(oldPassword, newPassword)),
    updateAvatar: createAsyncThunk<User, File>('user/updateAvatar', async (avatar) => await userApi.updateUserAvatar(avatar)),
    updateCoverImage: createAsyncThunk<User, File>('user/updateCoverImage', async (coverImage) => await userApi.updateUserCoverImage(coverImage)),
    updateAccount: createAsyncThunk(
        'user/updateAccount',
        async (accountData: Partial<AccountData>) => {
            const response = await userApi.updateAccount(accountData);
            return response.data;
        }
    ),
    updateProfile: createAsyncThunk<UserProfileResponse, UserProfileResponse>('user/updateuserProfile', async (user) => await userApi.updateUserProfile(user)),
    updateLanguage: createAsyncThunk<User, string>('user/updateLanguage', async (language) => await userApi.updateUserLanguage(language)),
    updateBio: createAsyncThunk<User, string>('user/updateBio', async (bio) => await userApi.updateUserBio(bio)),
};

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState: state,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(userActions.updateAccount.fulfilled, (state, action) => {
                if (state.user && action.payload) {
                    state.user = { ...state.user, ...action.payload };
                    localStorage.setItem('user', JSON.stringify(state.user));

                    // Update userProfile if it exists
                    if (state.userProfile) {
                        state.userProfile = {
                            ...state.userProfile,
                            message: { ...state.userProfile.message, ...action.payload }
                        };
                        localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    }
                }
            })
            .addCase(userActions.updateProfile.fulfilled, (state, action) => {
                if (action.payload && state.userProfile) {
                    // Merge the new data with existing profile data
                    state.userProfile = {
                        ...state.userProfile,
                        message: {
                            ...state.userProfile.message,
                            ...action.payload.message
                        }
                    };
                    localStorage.setItem('userProfile', JSON.stringify(state.userProfile));

                    // Update relevant user fields if they exist in the payload
                    if (state.user && action.payload.message) {
                        const updatedUser = {
                            ...state.user,
                            ...action.payload.message
                        };
                        state.user = updatedUser;
                        localStorage.setItem('user', JSON.stringify(updatedUser));
                    }
                }
            })
            .addCase(userActions.updateBio.fulfilled, (state, action) => {
                if (state.user && action.payload?.data?.bio) {
                    // Update user
                    state.user = { ...state.user, ...action.payload.data };
                    localStorage.setItem('user', JSON.stringify(state.user));

                    // Update userProfile if it exists
                    if (state.userProfile) {
                        state.userProfile = {
                            ...state.userProfile,
                            message: {
                                ...state.userProfile.message,
                                bio: action.payload.data?.bio
                            }
                        };
                        localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    }
                }
            })
            .addCase(userActions.updateLanguage.fulfilled, (state, action) => {
                if (state.user && action.payload?.data?.language) {
                    // Update user
                    state.user = { ...state.user, ...action.payload.data };
                    localStorage.setItem('user', JSON.stringify(state.user));

                    // Update userProfile if it exists
                    if (state.userProfile) {
                        state.userProfile = {
                            ...state.userProfile,
                            message: {
                                ...state.userProfile.message,
                                language: action.payload.data.language
                            }
                        };
                        localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    }
                }
            })
            .addCase(userActions.updateAvatar.fulfilled, (state, action) => {
                if (state.user && action.payload?.data?.avatar) {
                    state.user = { ...state.user, ...action.payload.data };
                    localStorage.setItem('user', JSON.stringify(state.user));

                    if (state.userProfile) {
                        state.userProfile = {
                            ...state.userProfile,
                            message: {
                                ...state.userProfile.message,
                                avatar: action.payload.data.avatar
                            }
                        };
                        localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    }
                }
            })
            .addCase(userActions.updateCoverImage.fulfilled, (state, action) => {
                if (state.user && action.payload?.data?.coverImage) {
                    state.user = { ...state.user, ...action.payload.data };
                    localStorage.setItem('user', JSON.stringify(state.user));

                    if (state.userProfile) {
                        state.userProfile = {
                            ...state.userProfile,
                            message: {
                                ...state.userProfile.message,
                                coverImage: action.payload.data.coverImage
                            }
                        };
                        localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    }
                }
            })
            .addMatcher(
                (action): action is PayloadAction<unknown> =>
                    action.type.startsWith('user/') && action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<User> =>
                    action.type.startsWith('user/') &&
                    action.type.endsWith('/fulfilled') &&
                    action.type !== 'user/logout/fulfilled' &&
                    action.type !== 'user/getUserProfile/fulfilled' &&
                    action.type !== 'user/updateProfile/fulfilled',
                (state, action) => {
                    // Merge new user data with existing data
                    state.user = { ...state.user, ...action.payload };
                    localStorage.setItem('user', JSON.stringify(state.user));
                    i18next.changeLanguage(action.payload.language);
                    state.status = 'succeeded';
                }
            )
            .addMatcher(
                (action): action is PayloadAction<UserProfileResponse> =>
                    action.type === 'user/getUserProfile/fulfilled',
                (state, action) => {
                    if (state.userProfile) {
                        // Merge new profile data with existing data
                        state.userProfile = {
                            ...state.userProfile,
                            message: {
                                ...state.userProfile.message,
                                ...action.payload.message
                            }
                        };
                    } else {
                        state.userProfile = action.payload;
                    }
                    localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
                    state.status = 'succeeded';
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> =>
                    action.type === 'user/logout/fulfilled',
                (state) => {
                    console.log("User logging out");
                    state.status = 'idle';
                    state.user = null;
                    state.userProfile = null;
                    localStorage.removeItem('user');
                    localStorage.removeItem('userProfile');
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> =>
                    action.type.startsWith('user/') && action.type.endsWith('/rejected'),
                (state, action: any) => {
                    state.status = 'failed';
                    state.error = action.error?.message || 'Unknown error';
                }
            ),
});

export default userSlice.reducer;

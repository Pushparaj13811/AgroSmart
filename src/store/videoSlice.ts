import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as videoApi from "../api/videoApi";
import { Video, VideoData, VideoState } from "../types/types";

export interface VideoStateWithUploadProgress extends VideoState {
    uploadProgress: number;
}
const initialState: VideoStateWithUploadProgress = {
    videos: [],
    selectedVideo: null,
    status: "idle",
    error: null,
    uploadProgress: 0,
};

export const videoActions = {
    getAllVideos: createAsyncThunk<Video[]>("videos/getAllVideos", videoApi.getAllVideos),
    getVideoById: createAsyncThunk<Video, string>("videos/getVideoById", videoApi.getVideo),
    createVideo: createAsyncThunk<Video, { videoData: FormData }>(
        "videos/createVideo",
        async ({ videoData }, { dispatch }) => {
            return new Promise<Video>((resolve, reject) => {
                videoApi.uploadVideo(videoData, (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    dispatch({ type: 'videos/updateUploadProgress', payload: progress });
                })
                    .then((video: Video) => {
                        dispatch({ type: 'videos/updateUploadProgress', payload: 0 });
                        resolve(video);
                    })
                    .catch((error) => {
                        dispatch({ type: 'videos/updateUploadProgress', payload: 0 });
                        reject(error);
                    });
            });
        }
    ),

    linkVideoToCrop: createAsyncThunk<void, string>("videos/linkVideoToCrop", videoApi.linkVideoToCrop),
    unlinkVideoFromCrop: createAsyncThunk<void, string>("videos/unlinkVideoFromCrop", videoApi.unlinkVideoFromCrop),
    deleteVideo: createAsyncThunk<void, string>("videos/deleteVideo", videoApi.deleteVideo),
};
const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action) => action.type.startsWith("videos/") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type === "videos/getAllVideos/fulfilled",
                (state, action: PayloadAction<Video[]>) => {
                    state.status = "succeeded";
                    state.videos = action.payload;
                }
            )
            .addMatcher(
                (action) => action.type === "videos/getVideoById/fulfilled",
                (state, action: PayloadAction<Video>) => {
                    state.status = "succeeded";
                    state.selectedVideo = action.payload;
                }
            )
            .addMatcher(
                (action) => action.type === "videos/createVideo/fulfilled",
                (state, action: PayloadAction<Video>) => {
                    state.status = "succeeded";
                    state.videos.push(action.payload);
                }
            )
            .addMatcher(
                (action) => action.type === "videos/updateUploadProgress",
                (state, action: PayloadAction<number>) => {
                    state.uploadProgress = action.payload;
                }
            )
            .addMatcher(
                (action) => action.type === "videos/linkVideoToCrop/fulfilled" || action.type === "videos/unlinkVideoFromCrop/fulfilled",
                (state) => {
                    state.status = "succeeded";
                }
            )
            .addMatcher(
                (action) => action.type === "videos/deleteVideo/fulfilled",
                (state, action: PayloadAction<string>) => {
                    state.status = "succeeded";
                    // Assuming action.payload is the ID of the deleted video
                    state.videos = state.videos.filter(video => video._id !== action.payload);
                }
            )
            .addMatcher(
                (action) => action.type.startsWith("videos/") && action.type.endsWith("/rejected"),
                (state, action: any) => {
                    state.status = "failed";
                    state.error = action.error.message || 'Unknown error';
                }
            ),
});

export default videoSlice.reducer;
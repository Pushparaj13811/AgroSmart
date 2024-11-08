import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as videoApi from "../api/videoApi";
import { Video, VideoData, VideoState } from "../types/types";

const initialState: VideoState = {
    videos: [],
    selectedVideo: null,
    status: "idle",
    error: null,
};

export const videoActions = {
    getAllVideos: createAsyncThunk<Video[]>("videos/getAllVideos", async () => videoApi.getAllVideos()),
    getVideoById: createAsyncThunk<Video, string>("videos/getVideoById", async (id) => videoApi.getVideo(id)),
    createVideo: createAsyncThunk<Video, VideoData>("videos/createVideo", async (videoData) => videoApi.uploadVideo(videoData)),
    linkVideoToCrop: createAsyncThunk<void, string>("videos/linkVideoToCrop", async (cropId) => videoApi.linkVideoToCrop(cropId)),
    unlinkVideoFromCrop: createAsyncThunk<void, string>("videos/unlinkVideoFromCrop", async (cropId) => videoApi.unlinkVideoFromCrop(cropId)),
    deleteVideo: createAsyncThunk<void, string>("videos/deleteVideo", async (id) => videoApi.deleteVideo(id)),
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
                    state.videos = state.videos.filter(video => video.id !== action.payload);
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

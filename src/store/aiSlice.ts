import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as aiApi from "../api/aiApi";
import { DetectionResultData } from "../types/types"; // Import your result type

export const aiActions = {
    diagnoseCrop: createAsyncThunk<DetectionResultData, File>("ai/diagnoseCrop", async (image: File) => {
        return await aiApi.diagnoseCrop(image);
    }),
    history: createAsyncThunk<any, void>("ai/history", aiApi.history),
    historyDetail: createAsyncThunk<any, string>("ai/historyDetail", async (id: string) => {
        return await aiApi.historyDetail(id);
    }),
};

const aiSlice = createSlice({
    name: "ai",
    initialState: {
        data: null as DetectionResultData | null,
        status: "idle",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("ai/diagnoseCrop") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<DetectionResultData> => action.type === "ai/diagnoseCrop/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<string> => action.type === "ai/diagnoseCrop/rejected",
                (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "An error occurred";
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("ai/history") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<DetectionResultData> => action.type === "ai/history/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<string> => action.type === "ai/history/rejected",
                (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "An error occurred";
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("ai/historyDetail") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            ).addMatcher(
                (action): action is PayloadAction<DetectionResultData> => action.type === "ai/historyDetail/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                }
            ).addMatcher(
                (action): action is PayloadAction<string> => action.type === "ai/historyDetail/rejected",
                (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "An error occurred";
                }
            ),

});

export default aiSlice.reducer;
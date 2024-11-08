import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as cropApi from '../api/cropApi';
import { Crop, CropState, Response } from '../types/types';

const initialState: CropState = {
    crops: [],
    selectedCrop: null,
    status: 'idle',
    error: null,
};

export const cropActions = {
    getAllCrops: createAsyncThunk<Crop[]>('crops/getAllCrops', async () => cropApi.getAllCrops()),
    getCropById: createAsyncThunk<Crop, string>('crops/getCropById', async (id) => cropApi.getCropById(id)),
    createCrop: createAsyncThunk<Crop, Crop>('crops/createCrop', async (crop) => cropApi.createCrop(crop)),
    updateCrop: createAsyncThunk<Crop, Crop>('crops/updateCrop', async (crop) => cropApi.updateCrop(crop, crop.id)),
    deleteCrop: createAsyncThunk<Response, string>('crops/deleteCrop', async (id) => cropApi.deleteCrop(id)),
    addCropImage: createAsyncThunk<void, { cropId: string; image: File }>('crops/addCropImage', async ({ cropId, image }) => cropApi.addCropImage(cropId, image)),
    deleteCropImage: createAsyncThunk<void, { cropId: string; imageId: string }>('crops/deleteCropImage', async ({ cropId, imageId }) => cropApi.deleteCropImage(cropId, imageId)),
};

const cropSlice = createSlice({
    name: 'crops',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith('crops/') && action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Crop[]> => action.type.startsWith('crops/') && action.type.endsWith('/fulfilled') && action.type === 'crops/getAllCrops/fulfilled',
                (state, action) => {
                    state.status = 'succeeded';
                    state.crops = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Crop> => action.type.startsWith('crops/') && action.type.endsWith('/fulfilled') && action.type === 'crops/getCropById/fulfilled',
                (state, action) => {
                    state.status = 'succeeded';
                    state.selectedCrop = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Crop> => action.type.startsWith('crops/') && action.type.endsWith('/fulfilled') && action.type === 'crops/createCrop/fulfilled',
                (state, action) => {
                    state.status = 'succeeded';
                    state.crops.push(action.payload);
                }
            )
            .addMatcher(
                (action): action is PayloadAction<string> => action.type.startsWith('crops/') && action.type.endsWith('/fulfilled') && action.type === 'crops/deleteCrop/fulfilled',
                (state, action) => {
                    state.status = 'succeeded';
                    state.crops = state.crops.filter(crop => crop.id !== action.payload);
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith('crops/') && action.type.endsWith('/rejected'),
                (state, action: any) => {
                    state.status = 'failed';
                    state.error = action.error?.message || 'Unknown error';
                }
            ),
});

export default cropSlice.reducer;

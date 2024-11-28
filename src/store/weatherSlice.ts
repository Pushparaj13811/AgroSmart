import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as weatherApi from "../api/weatherApi";

export const getWeather = createAsyncThunk<any, void>("weather/getWeather", weatherApi.getWeather);

export const getContinuousWeatherUpdate = createAsyncThunk<any, void>(
    "weather/getContinuouslyWeather",
    async (_, { dispatch }) => {
        const eventSource = weatherApi.getContinuosWeatherUpdate((weatherData) => {
            dispatch(updateContinuousWeather(weatherData));
        });

        dispatch(setEventSource(eventSource));

        return;
    }
);

export const stopContinuousWeatherUpdate = createAsyncThunk<void, void>(
    "weather/stopContinuouslyWeather",
    (_, { getState, dispatch }) => {
        const state = getState() as any;
        const eventSource = state.weather.eventSource;

        if (eventSource) {
            eventSource.close();
            dispatch(clearEventSource());
        }
    }
);

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null as any,
        continuousUpdates: [] as any[],
        status: "idle",
        error: null as string | null,
        eventSource: null as EventSource | null, // Store the EventSource here
    },
    reducers: {
        updateContinuousWeather: (state, action: PayloadAction<any>) => {
            state.continuousUpdates.push(action.payload);
        },
        setEventSource: (state, action: PayloadAction<EventSource>) => {
            state.eventSource = action.payload;
        },
        clearEventSource: (state) => {
            state.eventSource = null;
        }
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("weather/getWeather") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<any> => action.type === "weather/getWeather/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<string> => action.type === "weather/getWeather/rejected",
                (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "An error occurred";
                }
            ),
});

export const { updateContinuousWeather, setEventSource, clearEventSource } = weatherSlice.actions;

export default weatherSlice.reducer;

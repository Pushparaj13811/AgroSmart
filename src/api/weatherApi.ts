import api from "../services/api";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const getWeather = async () => {
    try {
        const response = await api.get(`${ApiUrl}/weather/`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
}

const getContinuosWeatherUpdate = (callback: (data: any) => void) => {
    const eventSource = new EventSource(`${ApiUrl}/weather/update`);

    eventSource.onmessage = (event) => {
        const weatherData = JSON.parse(event.data);
        callback(weatherData);
    };

    eventSource.onerror = (error) => {
        console.error("Error with SSE connection:", error);
        eventSource.close();
    };

    return eventSource; 
};


export { getWeather, getContinuosWeatherUpdate };

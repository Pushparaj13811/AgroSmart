import api from "../services/api";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const diagnoseCrop = async (file: File) => {
    const formData = new FormData();
    formData.append('cropimage', file);

    try {

        const response = await api.post(`${ApiUrl}/ai/crop-dignosis`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Detailed error:', error.response?.data || error.message);
        throw error;
    }
};

const history = async () => {
    try {
        const response = await api.get(`${ApiUrl}/ai/history`);
        return response.data;
    } catch (error: any) {
        console.error('Detailed error:', error.response?.data || error.message);
        throw error;
    }
}

const historyDetail = async (id: string) => {
    try {
        const response = await api.get(`${ApiUrl}/ai/history/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Detailed error:', error.response?.data || error.message);
        throw error;
    }
}
export { diagnoseCrop, history, historyDetail };
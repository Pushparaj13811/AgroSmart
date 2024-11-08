import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    withCredentials: true,
});


api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            try {

                const response = await axios.post('/api/refreshaccesstoken', {}, { withCredentials: true });
                localStorage.setItem('accessToken', response.data.accessToken);
                error.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                return axios(error.config);
            } catch (err) {
                console.error('Token refresh failed:', err);
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;

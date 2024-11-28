import api from '../services/api';
import { VideoData } from "../types/types";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const getAllVideos = async () => {
    try {
        const response = await api.get(`${ApiUrl}/videos/get-all-videos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getVideo = async (videoId: string) => {
    try {
        const response = await api.get(`${ApiUrl}/videos/get-video/${videoId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const uploadVideo = async (Data: FormData, onProgress: (progressEvent: any) => void) => {
    try {
        console.log('Uploading video...');
        for (let [key, value] of Data.entries()) {
            console.log(`${key}:`, value);
        }
        const response = await api.post(`${ApiUrl}/videos/upload-video`, Data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: onProgress,
        });
        console.log('Upload response:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const linkVideoToCrop = async (cropId: string) => {
    try {
        const response = await api.post(`${ApiUrl}/videos/link-video-to-crop/${cropId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const unlinkVideoFromCrop = async (cropId: string) => {
    try {
        const response = await api.post(`${ApiUrl}/videos/unlink-video-from-crop/${cropId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteVideo = async (videoId: string) => {
    try {
        const response = await api.delete(`${ApiUrl}/videos/delete-video/${videoId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    getAllVideos,
    getVideo,
    uploadVideo,
    linkVideoToCrop,
    unlinkVideoFromCrop,
    deleteVideo
}
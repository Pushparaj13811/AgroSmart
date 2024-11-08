import axios from "axios";
import { VideoData } from "../types/types";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const getAllVideos = async () => {
    try {
        const response = await axios.get(`${ApiUrl}/videos/get-all-videos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getVideo = async (videoId: string) => {
    try {
        const response = await axios.get(`${ApiUrl}/videos/get-video/${videoId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const uploadVideo = async (video: VideoData) => {
    try {
        const formData = new FormData();
        formData.append('video', new Blob([video.video], { type: 'video/mp4' }));
        formData.append('thumbnail', new Blob([video.thumbnail], { type: 'image/png' }));
        formData.append('title', video.title);
        formData.append('description', video.description);
        formData.append('duration', video.duration);
        formData.append('category', video.category);
        const response = await axios.post(`${ApiUrl}/videos/upload-video`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const linkVideoToCrop = async (cropId: string) => {
    try {
        const response = await axios.post(`${ApiUrl}/videos/link-video-to-crop/${cropId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const unlinkVideoFromCrop = async (cropId: string) => {
    try {
        const response = await axios.post(`${ApiUrl}/videos/unlink-video-from-crop/${cropId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteVideo = async (videoId: string) => {
    try {
        const response = await axios.delete(`${ApiUrl}/videos/delete-video/${videoId}`);
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
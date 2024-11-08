import axios from "axios";
import { Crop } from "../types/types";


const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const getAllCrops = async () => {
    try {
        const response = await axios.get(`${ApiUrl}/crops/get-all-crops`);
        return response.data;
    } catch (error) {
        console.error("Error getting crop", error);
        throw error;
    }
}

const getCropById = async (cropId: string) => {
    try {
        const response = await axios.get(`${ApiUrl}/crops/get-crop/${cropId}`);
        return response.data;

    } catch (error) {
        console.error("Error getting crop by id", error);
        throw error;
    }
}

const createCrop = async (crop: Crop) => {
    try {
        const response = await axios.post(`${ApiUrl}/crops/create-crop`, crop);
        return response.data;
    } catch (error) {
        console.error("Error creating crop", error);
        throw error;
    }
}

const updateCrop = async (crop: Crop, cropId: string) => {
    try {
        const response = await axios.put(`${ApiUrl}/crops/update-crop/${cropId}`, crop);
        return response.data;
    } catch (error) {
        console.error("Error updating crop", error);
        throw error;
    }
}

const deleteCrop = async (cropId: string) => {
    try {
        const response = await axios.delete(`${ApiUrl}/crops/delete-crop/${cropId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting crop", error);
        throw error;
    }
}

const addCropImage = async (cropId: string, image: File) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        const response = await axios.post(`${ApiUrl}/crops/add-image/${cropId}`, formData);
        return response.data;
    } catch (error) {
        console.error("Error adding crop image", error);
        throw error;
    }
}

const deleteCropImage = async (cropId: string, imageId: string) => {
    try {
        const response = await axios.delete(`${ApiUrl}/crops/delete-image/${cropId}/${imageId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting crop image", error);
        throw error;
    }
}

export {
    getAllCrops,
    getCropById,
    createCrop,
    updateCrop,
    deleteCrop,
    addCropImage,
    deleteCropImage
}



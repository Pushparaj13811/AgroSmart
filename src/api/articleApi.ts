import axios from 'axios';
import { Article } from '../types/types';

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

const getAllArticles = async () => {
    try {
        const response = await axios.get(`${ApiUrl}/articles/get-all-articles`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getArticle = async (articleId: string) => {
    try {
        const response = await axios.get(`${ApiUrl}/articles/get-article/${articleId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const createArticle = async (article: Article) => {
    try {
        const response = await axios.post(`${ApiUrl}/articles/create-article`, article);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const updateArticle = async (article: Article, articleId: string) => {
    try {
        const response = await axios.put(`${ApiUrl}/articles/update-article/${articleId}`, article);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteArticle = async (articleId: string) => {
    try {
        const response = await axios.delete(`${ApiUrl}/articles/delete-article/${articleId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}
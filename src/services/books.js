import { API_URL } from './settings';
import axios from 'axios';

export const addCategory = (name) => {
    const url = `${API_URL}/books/categories`;
    return axios.post(url, { name });
};

export const getCategories = () => {
    const url = `${API_URL}/books/categories`;
    return axios.get(url);
};


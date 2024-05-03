import axios from 'axios'
import { getToken } from '../utils/storage'

const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    headers: { 'Content-Type' : 'application/json'}
})
api.interceptors.request.use(
    async (config) => {
        const token = getToken();
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api


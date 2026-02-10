import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000', // Uses env var in prod, localhost in dev
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

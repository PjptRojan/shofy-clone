import axios from 'axios';
import { refreshToken } from './auth';
import { getCookie, setCookie } from '../helper/cookie';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 50000, // Set your desired timeout
    timeoutErrorMessage: 'Server time out'
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify the request headers here, such as adding the bearer token
        const token = getCookie('accessToken'); // Replace with your token retrieval logic
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor 
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data if needed 
        return response;
    },
    async (error) => {
        const { response } = error;
        if (response.data.message === 'jwt expired') {
            console.log('response error==>', response);
            try {
                const resp = await refreshToken();
                console.log('res is', resp);
            } catch (error) {
                console.log('generatetoken error == > ', error)
            }
        }

        if (response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response error:', response.data);
            console.error('Status code:', response.status);
        } else if (error.request) {
            // The request was made but no response was received                                                                                                    
            console.error('Request error:', error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error message:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

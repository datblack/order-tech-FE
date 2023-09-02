import axios from 'axios';
const { VITE_REACT_API_URL } = import.meta.env;
export const API = axios.create({
    baseURL: VITE_REACT_API_URL,
});
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.common['RESTAURANT-ID'] = 1;


// Add a request interceptor
API.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
API.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

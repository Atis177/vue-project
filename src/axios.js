import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3004'
});

axiosInstance.interceptors.request.use(function(config) {
    config.headers = {
        'Authorization': 'Bearer ' + 'test'
    }

    return config;
})

export default axiosInstance;
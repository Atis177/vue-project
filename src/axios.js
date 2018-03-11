import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://test-json-vue.herokuapp.com/'
});

axiosInstance.interceptors.request.use(function(config) {
    config.headers = {
        'Authorization': 'Bearer ' + 'test'
    }

    return config;
})

export default axiosInstance;
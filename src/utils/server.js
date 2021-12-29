import axios from "axios";

import { store } from "../index";
import { expire } from "../store/actions/_saga";

const server = axios.create();
server.defaults.baseURL = "https://api.emotie.me";
server.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');
        config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
server.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) // 토큰 만료
            store.dispatch(expire());
        
        return Promise.reject(error);
    }
);

export default server;
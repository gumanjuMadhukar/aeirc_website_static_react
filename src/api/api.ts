import axios from "axios";
import APP_URI from "../config/apiBaseUrl";

const api = axios.create({
    baseURL: `${APP_URI}/api`, 
    // baseURL: APP_URI,
    timeout: 10000,
    withCredentials: true,
});

export default api;
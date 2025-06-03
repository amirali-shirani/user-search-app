import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://randomuser.me",
});

export default axiosInstance;

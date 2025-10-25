import axios from "axios";

// Creación del cliente con axios
const axiosClient = axios.create({
    baseURL: "http://192.168.5.248:8080/api",
});

// Intercepción para añadir al token automáticamente
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosClient;
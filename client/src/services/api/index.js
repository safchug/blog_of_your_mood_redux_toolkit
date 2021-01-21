import axiosInstance from "./axiosInstance";

const api = {
    makeRequest({ url, method, data, query, token }) {
        const addquery = query ? `?query=${query}` : "";

        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return axiosInstance({ method, url: `${url}${addquery}`, headers, data });
    },
};

export default api;
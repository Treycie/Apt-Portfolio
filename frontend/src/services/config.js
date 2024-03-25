import axios from  "axios";

const baseUrl = process.env.REACT_APP_URL

export const apiClient = axios.create({
    baseURL: baseUrl,
})
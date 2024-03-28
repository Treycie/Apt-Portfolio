import { apiClient } from "./config.js";

import {apiClient} from "./config";

export const apiGetAllProjects =async() => {
    return apiClient.get("/skills");
};
export const apiGetProject = async(id) => {
return apiClient
}
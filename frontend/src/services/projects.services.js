import { apiClient } from "./config.js";

<<<<<<< HEAD
export const apiGetAllProjects = async () => {
  return apiClient.get("/projects");
};

export const apiGetProject = async (id) => {
  return apiClient.get(`/projects/${id}`);
};

export const apiAddProject = async (payload) => {
  return apiClient.post(`/projects`, payload);
};

export const apiDeleteProject = async (id) => {
  return apiClient.delete(`/projects/${id}`);
};

export const apiUpdateProject = async (id, payload) => {
  return apiClient.patch(`/projects/${id}`, payload);
};
=======
import {apiClient} from "./config";

export const apiGetAllProjects =async() => {
    return apiClient.get("/skills");
};
export const apiGetProject = async(id) => {
return apiClient
}
>>>>>>> develop

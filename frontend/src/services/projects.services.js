import { apiClient } from "./config.js";

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

  export const apiUpdateProject = async (id) => {
    return apiClient.patch(`/projects/${id}`);
}
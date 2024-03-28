import { apiClient } from "./config.js";

export const apiGetAllExperiences = async () => {
  return apiClient.get("/experiences");
};

export const apiGetExperience = async (id) => {
  return apiClient.get(`/experiences/${id}`);
};

export const apiAddExperience = async (payload) => {
  return apiClient.post(`/experiences`, payload);
};

export const apiDeleteExperience = async (id) => {
  return apiClient.delete(`/experiences/${id}`);
};

export const apiUpdateExperience = async (id, payload) => {
  return apiClient.patch(`/experiences/${id}`, payload);
};

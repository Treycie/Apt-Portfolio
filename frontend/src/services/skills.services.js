import { apiClient } from "./config.js";

export const apiGetAllSkills = async () => {
  return apiClient.get("/skills");
};

export const apiGetSkill = async (id) => {
  return apiClient.get(`/skills/${id}`);
};

export const apiAddSkill = async (payload) => {
  return apiClient.post(`/skills`, payload);
};

export const apiDeleteSkill = async (id) => {
  return apiClient.delete(`/skills/${id}`);
};

export const apiUpdateSkill = async (id, payload) => {
  return apiClient.patch(`/skills/${id}`, payload);
};

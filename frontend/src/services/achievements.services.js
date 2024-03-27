import { apiClient } from "./config.js";

export const apiGetAllAchievements = async () => {
  return apiClient.get("/achievements");
};

export const apiGetAchievement = async (id) => {
  return apiClient.get(`/achievements/${id}`);
};

export const apiAddAchievement = async (payload) => {
  return apiClient.post(`/achievements`, payload);
};

export const apiDeleteAchievement = async (id) => {
  return apiClient.delete(`/achievements/${id}`);
};

export const apiUpdateAchievement = async (id) => {
    return apiClient.patch(`/achievements/${id}`);
}

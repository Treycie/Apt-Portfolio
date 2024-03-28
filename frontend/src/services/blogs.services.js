import { apiClient } from "./config.js";

export const apiGetAllBlogs = async () => {
  return apiClient.get("/blogs");
};

export const apiGetBlog = async (id) => {
  return apiClient.get(`/blogs/${id}`);
};

export const apiAddBlog = async (payload) => {
  return apiClient.post(`/blogs`, payload);
};

export const apiDeleteBlog = async (id) => {
  return apiClient.delete(`/blogs/${id}`);
};

export const apiUpdateBlog = async (id, payload) => {
  return apiClient.patch(`/blogs/${id}`, payload);
};

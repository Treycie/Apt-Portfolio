import { apiClient } from "./config.js";


export const apiGetAllBlogs =async() => {
    return apiClient.get("/blogs");
};
export const apiGetBlog = async(id) => {
return apiClient
}

export const apiAddBlogs = async (newBlog) => {
    return apiClient.post("/blogs", newBlog);
  };
  
  export const apiUpdateBlog = async (id, updates) => {
    return apiClient.patch(`/blogs/${id}`, updates);
  };
  
  export const apiDeleteBlog = async (id) => {
    return apiClient.delete(`/blogs/${id}`);
  };
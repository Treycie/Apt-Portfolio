import { apiClient } from "./config.js";
import { useCallback, useEffect } from 'react';

export const apiGetAllSkills = async () => {
    return apiClient.get("/skills");
};

export const apiGetAllSkill = async => {
    return apiClient.get(`skills/${id}`);
};

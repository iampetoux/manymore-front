import { axiosInstance } from '@/api/axios';

const config = { withCredentials: true };

export const getUser = () => {
  return axiosInstance.get(`/user/current`, config);
};
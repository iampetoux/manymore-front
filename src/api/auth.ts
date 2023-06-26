import { LoginInputs } from '@/components/Login/hooks/useLogin';
import { axiosInstance } from '@/api/axios';


export const login = (credentials: LoginInputs) => {
  return axiosInstance.post('/login_check', credentials, { withCredentials: true });
};

export const logout = () => {
  return axiosInstance.post('/logout');
};
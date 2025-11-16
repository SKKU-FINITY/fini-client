import { api } from './axios';
import { AUTH } from './endpoints';

export const signup = async (username: string, password: string, email: string) => {
  const res = await api.post(AUTH.REGISTER, { username, password, email });
  return res.data;
};

export const login = async (username: string, password: string) => {
  const res = await api.post(AUTH.LOGIN, { username, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.post(AUTH.LOGOUT);
  return res.data;
};

export const getMyInfo = async () => {
  const res = await api.get(AUTH.ME);
  return res.data;
};

import { api } from './axios';

export const signup = async (username: string, password: string, email: string) => {
  const response = await api.post('https://api.finiapp.tech/api/auth/register', {
    username,
    password,
    email,
  });

  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await api.post('https://api.finiapp.tech/api/auth/login', {
    username,
    password,
  });

  return response.data;
};

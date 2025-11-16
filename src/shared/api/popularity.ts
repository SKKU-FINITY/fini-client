import { api } from './axios';
import { POPULARITY } from './endpoints';

export const getPopularSavings = async () => {
  const res = await api.get(POPULARITY.SAVINGS_POPULAR);
  return res.data;
};

export const compareSavings = async (id: number) => {
  const res = await api.get(POPULARITY.SAVINGS_COMPARE(id));
  return res.data;
};

export const getPopularDeposits = async () => {
  const res = await api.get(POPULARITY.DEPOSITS_POPULAR);
  return res.data;
};

export const compareDeposits = async (id: number) => {
  const res = await api.get(POPULARITY.DEPOSITS_COMPARE(id));
  return res.data;
};

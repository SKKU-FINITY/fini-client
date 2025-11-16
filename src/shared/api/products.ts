import { api } from './axios';
import { PRODUCTS } from './endpoints';

export const getSavingsList = async () => {
  const res = await api.get(PRODUCTS.SAVINGS_LIST);
  return res.data;
};

export const getSavingsDetail = async (id: number) => {
  const res = await api.get(PRODUCTS.SAVINGS_DETAIL(id));
  return res.data;
};

export const getDepositsList = async () => {
  const res = await api.get(PRODUCTS.DEPOSITS_LIST);
  return res.data;
};

export const getDepositsDetail = async (id: number) => {
  const res = await api.get(PRODUCTS.DEPOSITS_DETAIL(id));
  return res.data;
};

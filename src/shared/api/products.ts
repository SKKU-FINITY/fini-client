import { api } from './axios';
import { PRODUCTS } from './endpoints';

export const getSavingsList = async () => {
  const res = await api.get(PRODUCTS.SAVINGS_LIST);
  return res.data;
};

export const getSavingsDetail = async (productId: number, optionId: number) => {
  const res = await api.get(PRODUCTS.SAVINGS_DETAIL(productId, optionId));
  return res.data;
};

export const getDepositsList = async () => {
  const res = await api.get(PRODUCTS.DEPOSITS_LIST);
  return res.data;
};

export const getDepositsDetail = async (productId: number, optionId: number) => {
  const res = await api.get(PRODUCTS.DEPOSITS_DETAIL(productId, optionId));
  return res.data;
};

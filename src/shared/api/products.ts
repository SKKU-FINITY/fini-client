import { api } from './axios';
import { PRODUCTS } from './endpoints';

export const getSavingsList = async (bankNames?: string[], term?: number) => {
  const res = await api.get(PRODUCTS.SAVINGS_LIST, {
    params: {
      bankNames: bankNames?.length ? bankNames.join(',') : undefined,
      term: term || undefined,
    },
  });
  return res.data;
};

export const getSavingsDetail = async (productId: number, optionId: number) => {
  const res = await api.get(PRODUCTS.SAVINGS_DETAIL(productId, optionId));
  return res.data;
};

export const getDepositsList = async (bankNames?: string[], term?: number) => {
  const res = await api.get(PRODUCTS.DEPOSITS_LIST, {
    params: {
      bankNames: bankNames?.length ? bankNames.join(',') : undefined,
      term: term || undefined,
    },
  });
  return res.data;
};

export const getDepositsDetail = async (productId: number, optionId: number) => {
  const res = await api.get(PRODUCTS.DEPOSITS_DETAIL(productId, optionId));
  return res.data;
};

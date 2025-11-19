export const AUTH = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
};

export const PRODUCTS = {
  SAVINGS_LIST: '/products/savings',
  SAVINGS_DETAIL: (productId: number, optionId: number) => `/savings/${productId}/${optionId}`,
  DEPOSITS_LIST: '/products/deposits',
  DEPOSITS_DETAIL: (productId: number, optionId: number) => `/deposits/${productId}/${optionId}`,
};

export const POPULARITY = {
  SAVINGS_POPULAR: '/recommendations/savings',
  SAVINGS_COMPARE: (productId: number, optionId: number) =>
    `/recommendations/savings/compare/${productId}/${optionId}`,
  DEPOSITS_POPULAR: '/recommendations/deposits',
  DEPOSITS_COMPARE: (productId: number, optionId: number) =>
    `/recommendations/deposits/compare/${productId}/${optionId}`,
};

export const AUTH = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
};

export const PRODUCTS = {
  SAVINGS_LIST: '/products/savings',
  SAVINGS_DETAIL: (id: number) => `/products/savings/${id}`,
  DEPOSITS_LIST: '/products/deposits',
  DEPOSITS_DETAIL: (id: number) => `/products/deposits/${id}`,
};

export const POPULARITY = {
  SAVINGS_POPULAR: '/recommendations/savings',
  SAVINGS_COMPARE: (id: number) => `/recommendations/savings/compare/${id}`,
  DEPOSITS_POPULAR: '/recommendations/deposits',
  DEPOSITS_COMPARE: (id: number) => `/recommendations/deposits/compare/${id}`,
};

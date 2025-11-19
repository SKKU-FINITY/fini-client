export const AUTH = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
};

export const PRODUCTS = {
  SAVINGS_LIST: '/products/savings',
  SAVINGS_DETAIL: (productId: number, optionId: number) =>
    `products/savings/${productId}/${optionId}`,
  DEPOSITS_LIST: '/products/deposits',
  DEPOSITS_DETAIL: (productId: number, optionId: number) =>
    `products/deposits/${productId}/${optionId}`,
};

export const POPULARITY = {
  SAVINGS_POPULAR: '/recommendations/savings',
  DEPOSITS_POPULAR: '/recommendations/deposits',
};

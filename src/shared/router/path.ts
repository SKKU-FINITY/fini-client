export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SAVINGS_DETAIL: '/savings/:productId/:optionId',
  DEPOSIT_DETAIL: '/deposit/:productId/:optionId',
  SAVINGS_SEARCH: '/savings/search',
  DEPOSIT_SEARCH: '/deposit/search',
  ERROR: '*',
} as const;

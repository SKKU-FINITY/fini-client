import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './path';
import HomePage from '../../pages/home/home-page';
import LoginPage from '../../pages/login/login-page';
import SignupPage from '../../pages/signup/signup-page';
import SavingsDetailPage from '../../pages/savings-detail/savings-detail-page';
import DepositDetailPage from '../../pages/deposit-detail/deposit-detail-page';
import ErrorPage from '../../pages/error/error-page';
import ProtectedRoute from './protected-route';
import SavingsSearchPage from '../../pages/savings-search/savings-search-page';
import DepositSearchPage from '../../pages/deposit-search/deposit-search-page';


export const router = createBrowserRouter([
  { path: PATH.HOME, element: <ProtectedRoute element={<HomePage />} /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.SIGNUP, element: <SignupPage /> },
  { path: PATH.SAVINGS_DETAIL, element: <ProtectedRoute element={<SavingsDetailPage />} /> },
  { path: PATH.DEPOSIT_DETAIL, element: <ProtectedRoute element={<DepositDetailPage />} /> },
  { path: PATH.SAVINGS_SEARCH, element: <ProtectedRoute element={<SavingsSearchPage />} /> },
  { path: PATH.DEPOSIT_SEARCH, element: <ProtectedRoute element={<DepositSearchPage />} /> },
  { path: PATH.ERROR, element: <ErrorPage /> },
]);

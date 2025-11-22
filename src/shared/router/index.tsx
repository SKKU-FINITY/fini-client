import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './path';
import HomePage from '../../pages/home/home-page';
import LoginPage from '../../pages/login/login-page';
import SignupPage from '../../pages/signup/signup-page';
import SavingsDetailPage from '../../pages/savings-detail/savings-detail-page';
import DepositDetailPage from '../../pages/deposit-detail/deposit-detail-page';
import ErrorPage from '../../pages/error/error-page';
import ProtectedRoute from './protected-route';

export const router = createBrowserRouter([
  { path: PATH.HOME, element: <ProtectedRoute element={<HomePage />} /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.SIGNUP, element: <SignupPage /> },
  { path: PATH.SAVINGS_DETAIL, element: <ProtectedRoute element={<SavingsDetailPage />} /> },
  { path: PATH.DEPOSIT_DETAIL, element: <ProtectedRoute element={<DepositDetailPage />} /> },
  { path: PATH.ERROR, element: <ErrorPage /> },
]);

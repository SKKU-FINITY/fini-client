import { Navigate } from 'react-router-dom';
import type { JSX } from 'react/jsx-dev-runtime';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return <Navigate to='/login' replace />;
  }

  return element;
};

export default ProtectedRoute;

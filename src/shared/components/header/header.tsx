import * as styles from './header.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      navigate('/login', { replace: true });
    } catch (e) {
      console.error('Logout failed:', e);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        FINI
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Header;

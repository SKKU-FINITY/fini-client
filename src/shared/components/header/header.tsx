import { useNavigate } from 'react-router-dom';
import { logout } from '@shared/api/auth';
import * as styles from './header.css';

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
      <div className={styles.logoContainer} onClick={() => navigate('/')}>
        <img src='/fini-line.png' alt='FINI Logo' className={styles.logoImg} />
        <div className={styles.logo}>FINI</div>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Header;

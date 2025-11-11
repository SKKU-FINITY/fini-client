<<<<<<< HEAD
import * as styles from './home-page.css';
import Header from '../../shared/components/header/header';
=======
import React from 'react';
import * as styles from './home-page.css';
import { button } from '../../shared/components/button/button.css';
const IS_LOGGED_IN = true;
>>>>>>> d9a8656 (feat: homepage 일부 구성)

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
<<<<<<< HEAD
      <Header />
      <div className={styles.title}>홈 페이지</div>
    </>
  );
};
=======
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <button className={styles.logo} onClick={() => window.location.href = '/'}>
          <span className={styles.logo}>FINI</span>
        </button>
        {IS_LOGGED_IN && (
        <button className={styles.menuButton} onClick={handleMenuToggle}>
          ☰
        </button>
        )}
      </div>
      {IS_LOGGED_IN && isMenuOpen && (
      <nav className={styles.dropdownMenu}>
        <ul>
          <li className={styles.menuItem}><a href="/profile">Profile</a></li>
          <li className={styles.menuItem}><a href="/settings">Settings</a></li>
          <li className={styles.menuItem}><a href="/logout">Logout</a></li>
        </ul>
      </nav>
      )}
    </header>

    <main className={styles.Main}>
      <div className={styles.MainButtonWrapper}>
        <button className={`${button({variant:'blue'})} ${styles.MainButton}`}>예금</button>
        <button className={`${button({variant:'blue'})} ${styles.MainButton}`}>적금</button>
      </div>
    </main>
    </>
)};
>>>>>>> d9a8656 (feat: homepage 일부 구성)

export default HomePage;

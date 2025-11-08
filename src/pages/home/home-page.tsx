import React from 'react';
import * as styles from './home-page.css';

const IS_LOGGED_IN = true;

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
    <header className={styles.header}>
      <div>
        <span className={styles.logo}>FINI</span>
      </div>
      {IS_LOGGED_IN && (
      <button className={styles.menuButton} onClick={handleMenuToggle}>
        ☰
      </button>
      )}
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
    <main style = {{ padding: '20px' }}>
      <h1 className={styles.title}>main</h1>
    </main>
    </>
)};

export default HomePage;

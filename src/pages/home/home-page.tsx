import * as styles from './home-page.css';
import Header from '../../shared/components/header/header';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.title}>홈 페이지</div>
    </>
  );
};

export default HomePage;

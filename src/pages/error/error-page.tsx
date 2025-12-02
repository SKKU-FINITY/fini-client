import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/router/path';
import Button from '@shared/components/button/button';
import Header from '@shared/components/header/header';
import * as styles from './error-page.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.icon}>⚠️</div>
        <div className={styles.title}>문제가 발생했습니다.</div>
        <div className={styles.subtitle}>주소를 다시 확인해주세요.</div>
        <div className={styles.buttonWrapper}>
          <Button onClick={() => navigate(PATH.HOME)}>홈으로 돌아가기</Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

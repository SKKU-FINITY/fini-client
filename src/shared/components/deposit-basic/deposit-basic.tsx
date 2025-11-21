import { useNavigate } from 'react-router-dom';
import * as styles from './deposit-basic.css';

interface DepositBasicProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
}

const DepositBasic = ({
  productId,
  optionId,
  bankName,
  productName,
  saveTerm,
  baseRate,
  maxRate,
}: DepositBasicProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.depositContainer}
      onClick={() => {
        navigate(`/deposit/${productId}/${optionId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className={styles.bank}>{bankName}</div>
      <div className={styles.product}>{productName}</div>
      <div className={styles.detail}>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기간</div>
          <div className={styles.value}>{saveTerm}개월</div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기본 금리</div>
          <div className={styles.value}>{baseRate}%</div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>최대 금리</div>
          <div className={styles.value}>{maxRate}%</div>
        </div>
      </div>
    </div>
  );
};

export default DepositBasic;

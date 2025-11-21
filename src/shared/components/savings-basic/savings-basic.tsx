import { useNavigate } from 'react-router-dom';
import * as styles from './savings-basic.css';

interface SavingsBasicProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  rsrvTypeNm: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
}

const SavingsBasic = ({
  productId,
  optionId,
  bankName,
  productName,
  rsrvTypeNm,
  saveTerm,
  baseRate,
  maxRate,
}: SavingsBasicProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.savingsContainer}
      onClick={() => navigate(`/savings/${productId}/${optionId}`)}
    >
      <div className={styles.bank}>{bankName}</div>
      <div className={styles.product}>{productName}</div>
      <div className={styles.detail}>
        <div className={styles.detailContainer}>
          <div className={styles.title}>유형</div>
          <div className={styles.value}>{rsrvTypeNm}</div>
        </div>
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

export default SavingsBasic;

import { useNavigate } from 'react-router-dom';
import * as styles from './savings-popular.css';

interface SavingsPopularProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  aiSummary: string;
}

const SavingsPopular = ({
  productId,
  optionId,
  bankName,
  productName,
  aiSummary,
}: SavingsPopularProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.savingsContainer}
      onClick={() => {
        navigate(`/savings/${productId}/${optionId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className={styles.bankContainer}>
        <div className={styles.bank}>{bankName}</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.product}>{productName}</div>
      </div>
      <div className={styles.detail}>
        <div className={styles.value}>💡{aiSummary}</div>
      </div>
    </div>
  );
};

export default SavingsPopular;

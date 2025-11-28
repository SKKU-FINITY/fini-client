import { useNavigate } from 'react-router-dom';
import * as styles from './deposit-popular.css';

interface DepositPopularProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  aiSummary: string;
}

const DepositPopular = ({
  productId,
  optionId,
  bankName,
  productName,
  aiSummary,
}: DepositPopularProps) => {
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
        <div className={styles.value}>💡{aiSummary}</div>
      </div>
    </div>
  );
};

export default DepositPopular;

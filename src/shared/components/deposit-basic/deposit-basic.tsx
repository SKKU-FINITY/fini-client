import * as styles from './deposit-basic.css';

interface DepositBasicProps {
  bankName: string;
  productName: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
}

const DepositBasic = ({
  bankName,
  productName,
  saveTerm,
  baseRate,
  maxRate,
}: DepositBasicProps) => {
  return (
    <div className={styles.depositContainer}>
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

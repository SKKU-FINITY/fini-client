import { useNavigate } from 'react-router-dom';
import { getDiffText, getDiffClassName, formatDiffMoney } from '@shared/utils/format';
import * as styles from './savings-compare.css';

interface SavingsCompareProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  interestType: string;
  reserveType: string;
  maxLimitDiff: number;
  termDiff: number;
  baseRateDiff: number;
  maxRateDiff: number;
}

const SavingsCompare = ({
  productId,
  optionId,
  bankName,
  productName,
  interestType,
  reserveType,
  maxLimitDiff,
  termDiff,
  baseRateDiff,
  maxRateDiff,
}: SavingsCompareProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.savingsContainer}
      onClick={() => {
        navigate(`/savings/${productId}/${optionId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className={styles.bank}>{bankName}</div>
      <div className={styles.product}>
        <div className={styles.productName}>{productName}</div>
        <div className={styles.productDetail}>
          ({reserveType} / {interestType})
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detailContainer}>
          <div className={styles.title}>최대 한도</div>
          <div className={`${styles.value} ${getDiffClassName(maxLimitDiff ?? 0, styles)}`}>
            {formatDiffMoney(maxLimitDiff)}
          </div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기간</div>
          <div className={`${styles.value} ${getDiffClassName(termDiff, styles)}`}>
            {getDiffText(termDiff, '개월')}
          </div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기본 금리</div>
          <div className={`${styles.value} ${getDiffClassName(baseRateDiff, styles)}`}>
            {getDiffText(baseRateDiff, '%')}
          </div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>최대 금리</div>
          <div className={`${styles.value} ${getDiffClassName(maxRateDiff, styles)}`}>
            {getDiffText(maxRateDiff, '%')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCompare;

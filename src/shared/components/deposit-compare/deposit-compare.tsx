import { useNavigate } from 'react-router-dom';
import * as styles from './deposit-compare.css';
import { getDiffText, getDiffClassName, formatDiffMoney } from '../../utils/format';

interface DepositCompareProps {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  maxLimitDiff: number;
  termDiff: number;
  baseRateDiff: number;
  maxRateDiff: number;
}

const DepositCompare = ({
  productId,
  optionId,
  bankName,
  productName,
  maxLimitDiff,
  termDiff,
  baseRateDiff,
  maxRateDiff,
}: DepositCompareProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.savingsContainer}
      onClick={() => {
        navigate(`/deposit/${productId}/${optionId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className={styles.bank}>{bankName}</div>
      <div className={styles.product}>{productName}</div>

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

export default DepositCompare;

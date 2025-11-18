import * as styles from './savings.css';

const Savings = () => {
  return (
    <div className={styles.savingsContainer}>
      <div className={styles.bank}>수협은행</div>
      <div className={styles.product}>Sh해양플라스틱Zero!적금</div>
      <div className={styles.detail}>
        <div className={styles.detailContainer}>
          <div className={styles.title}>유형</div>
          <div className={styles.value}>자유적립식</div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기간</div>
          <div className={styles.value}>12개월</div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>기본 금리</div>
          <div className={styles.value}>3.5%</div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.title}>최대 우대 금리</div>
          <div className={styles.value}>4%</div>
        </div>
      </div>
    </div>
  );
};

export default Savings;

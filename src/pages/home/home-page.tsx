import { useState, useEffect } from 'react';
import { getPopularSavings, getPopularDeposits } from '../../shared/api/popularity';
import { button } from '../../shared/components/button/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/components/header/header';
import DepositPopular from '../../shared/components/deposit-popular/deposit-popular';
import SavingsPopular from '../../shared/components/savings-popular/savings-popular';
import * as styles from './home-page.css';

type ProductOptions = {
  optionId: number;
  interestType: string;
  reserveType: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
};

type PopularityProducts = {
  productId: number;
  bankName: string;
  productName: string;
  aiSummary: string;
  maxRate: number;
  options: ProductOptions[];
};

const HomePage = () => {
  const navigate = useNavigate();
  const [deposits, setDeposits] = useState<PopularityProducts[]>([]);
  const [savings, setSavings] = useState<PopularityProducts[]>([]);
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);
      Promise.all([
          getPopularDeposits(),
          getPopularSavings()
      ])
      .then(([depositRes, savingsRes]) => {
        setDeposits(depositRes?.result || []);
        setSavings(savingsRes?.result || []);
      })
      .catch (() => {
        setDeposits([]);
        setSavings([]);
      })
      .finally (() => {
        setIsLoading(false);
      });
  }, []);

  if (Loading) {
    return(
    <>
    <Header/>
    <main className={styles.main}>
      <div className={styles.mainButtonWrapper}>
        <button
          className={`${button({variant:'pink'})} ${styles.mainButton}`}
          onClick={() => {
            navigate('/deposit/search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >예금</button>
        <button
          className={`${button({variant:'blue'})} ${styles.mainButton}`}
          onClick={() => {
            navigate('/savings/search');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >적금</button>
      </div>
    </main>
    </>
    );
  };
 
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <div className={styles.mainButtonWrapper}>
        <button className={`${button({variant:'pink'})} ${styles.mainButton}`}>
          <FontAwesomeIcon icon = {faPiggyBank}/>
          예금
        </button>
        <button className={`${button({variant:'blue'})} ${styles.mainButton}`}>
          <FontAwesomeIcon icon = {faPiggyBank}/>
          적금
        </button>
      </div>
      <div className={styles.popularityContainer}>
        <div className={styles.popularityTitle}>
          이런 상품은 어떠신가요?
        </div>
        <div className={styles.contentWrapper}>
            
            {/* === 1. 예금 섹션 === */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>예금</h2>
              <div className={styles.listContainer}>
                {deposits.length > 0 ? (
                  deposits.map((item) => (
                    <DepositPopular
                      key = {item.productId}
                      productId = {item.productId}
                      optionId = {item.options[0]?.optionId || 0}
                      bankName = {item.bankName}
                      productName = {item.productName}
                      aiSummary = {item.aiSummary}
                    />
                  ))
                ) : (
                  <div className={styles.emptyText}>표시할 예금 상품이 없습니다.</div>
                )}
              </div>
            </section>

            {/* === 2. 적금 섹션 === */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>적금</h2>
              <div className={styles.listContainer}>
                {savings.length > 0 ? (
                  savings.map((item) => (
                    <SavingsPopular
                      key = {item.productId}
                      productId = {item.productId}
                      optionId = {item.options[0]?.optionId || 0}
                      bankName = {item.bankName}
                      productName = {item.productName}
                      aiSummary = {item.aiSummary}
                    />
                  ))
                ) : (
                  <div className={styles.emptyText}>표시할 적금 상품이 없습니다.</div>
                )}
              </div>
            </section>
        </div>
      </div>
    </main>
  </>
)};

export default HomePage;

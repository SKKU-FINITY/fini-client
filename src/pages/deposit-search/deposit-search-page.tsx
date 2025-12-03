import { useState, useEffect } from 'react';
import { getDepositsList } from '@shared/api/products';
import { useDepositSearchStore } from '@shared/stores/useDepositSearchStore';
import { button } from '@shared/components/button/button.css';
import { BANK_LIST } from '@shared/constants/bank-list';
import Header from '@shared/components/header/header';
import DepositBasic from '@shared/components/deposit-basic/deposit-basic';
import DropDown from '@shared/components/dropdown/dropdown';
import Spinner from '@shared/components/spinner/spinner';
import * as styles from './deposit-search-page.css';

const DepositSearchPage = () => {
  const {
    selectedBanks,
    saveTerm,
    depositList,
    initialized,
    setSelectedBanks,
    setSaveTerm,
    setDepositList,
    setInitialized,
  } = useDepositSearchStore();
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchDepositList = async (banks: string[], term: number) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await getDepositsList(banks, term);
      const data = [...(res?.result ?? [])].sort((a, b) => {
        if (a.saveTerm !== b.saveTerm) return b.saveTerm - a.saveTerm;
        if (a.maxRate !== b.maxRate) return b.maxRate - a.maxRate;
        return b.baseRate - a.baseRate;
      });

      setDepositList(data);
    } catch (error) {
      setDepositList([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized) {
      const allBankIds = BANK_LIST.map((b) => b.id);
      setSelectedBanks(allBankIds);
      fetchDepositList(allBankIds, saveTerm);
      setInitialized(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleBankToggle = (bankId: string) => {
    setSelectedBanks((prev) => {
      if (prev.includes(bankId)) {
        return prev.filter((id) => id !== bankId);
      } else {
        return [...prev, bankId];
      }
    });
  };

  const handleTermChange = (term: number) => {
    setSaveTerm(term);
  };

  const handleSearch = () => {
    if (loading) return;
    const targetBanks = selectedBanks.length > 0 ? selectedBanks : BANK_LIST.map((b) => b.id);
    if (selectedBanks.length === 0) {
      setSelectedBanks(targetBanks);
    }
    fetchDepositList(targetBanks, saveTerm);
  };

  const handleSelectAll = () => {
    if (selectedBanks.length === BANK_LIST.length) {
      setSelectedBanks([]);
    } else {
      setSelectedBanks(BANK_LIST.map((b) => b.id));
    }
  };

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {/*은행 선택*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>은행</h2>
          <div className={styles.bankContainer}>
            <div className={styles.bankGrid}>
              {BANK_LIST.map((bank) => {
                const isSelected = selectedBanks.includes(bank.id);
                return (
                  <button
                    key={bank.id}
                    className={`${styles.bankButton} ${isSelected ? styles.bankButtonSelected : ''}`}
                    onClick={() => handleBankToggle(bank.id)}
                  >
                    <div className={styles.bankLogo}>
                      <bank.logo />
                    </div>
                    <span className={styles.bankName}>{bank.name}</span>
                  </button>
                );
              })}
            </div>
            <div className={styles.selectAllContainer}>
              <button
                className={`${styles.selectAllButton} ${button({ variant: 'pink' })}`}
                onClick={() => handleSelectAll()}
              >
                전체선택
              </button>
            </div>
          </div>
        </section>
        {/*기간 선택*/}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>기간</h2>
          <p className={styles.termMent}>선택한 기간보다 짧은 기간의 상품들이 보여져요.</p>
          <div className={styles.termContainer}>
            <DropDown color='pink' value={saveTerm} onChange={handleTermChange} />
          </div>
        </section>
        {/*검색 버튼*/}
        <div className={styles.searchContainer}>
          <button
            className={`${styles.searchButton} ${button({ variant: 'pink' })}`}
            onClick={handleSearch}
            disabled={loading}
          >
            검색
          </button>
        </div>
        {/*상품 리스트*/}
        {loading ? (
          <div className={styles.depositListContainer}>
            <Spinner color='pink' />
          </div>
        ) : !isError ? (
          <div className={styles.depositListContainer}>
            {depositList.length > 0 ? (
              <>
                <div className={styles.depositHowSorted}>
                  ✔️ 상품은 기간, 최대 금리, 기본 금리에 대한 내림차순으로 정렬됩니다.
                </div>
                <div className={styles.depositHowmany}>
                  총 <span className={styles.howManyNumber}>{depositList.length}</span>개의 상품이
                  검색되었습니다.
                </div>
                {depositList.map((item) => (
                  <DepositBasic
                    key={`${item.productId}-${item.optionId}`}
                    productId={item.productId}
                    optionId={item.optionId}
                    bankName={item.bankName}
                    productName={item.productName}
                    saveTerm={item.saveTerm}
                    baseRate={item.baseRate}
                    maxRate={item.maxRate}
                  />
                ))}
              </>
            ) : (
              <div className={styles.notFound}>검색된 예금 상품이 없습니다.</div>
            )}
          </div>
        ) : (
          <div className={styles.notFound}>
            예금 상품을 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.
          </div>
        )}
      </main>
    </>
  );
};

export default DepositSearchPage;

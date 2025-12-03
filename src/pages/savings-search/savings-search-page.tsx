import { useState, useEffect } from 'react';
import { getSavingsList } from '@shared/api/products';
import { useSavingsSearchStore } from '@shared/stores/useSavingsSearchStore';
import { button } from '@shared/components/button/button.css';
import { BANK_LIST } from '@shared/constants/bank-list';
import Header from '@shared/components/header/header';
import SavingBasic from '@shared/components/savings-basic/savings-basic';
import DropDown from '@shared/components/dropdown/dropdown';
import Spinner from '@shared/components/spinner/spinner';
import * as styles from './savings-search-page.css';

const SavingsSearchPage = () => {
  const {
    selectedBanks,
    saveTerm,
    savingsList,
    initialized,
    setSelectedBanks,
    setSaveTerm,
    setSavingsList,
    setInitialized,
  } = useSavingsSearchStore();
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchSavingsList = async (banks: string[], term: number) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await getSavingsList(banks, term);
      const data = [...(res?.result ?? [])].sort((a, b) => {
        if (a.saveTerm !== b.saveTerm) return b.saveTerm - a.saveTerm;
        if (a.maxRate !== b.maxRate) return b.maxRate - a.maxRate;
        return b.baseRate - a.baseRate;
      });
      setSavingsList(data);
    } catch (error) {
      setSavingsList([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized) {
      const allBankIds = BANK_LIST.map((b) => b.id);
      setSelectedBanks(allBankIds);
      fetchSavingsList(allBankIds, saveTerm);
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
    fetchSavingsList(targetBanks, saveTerm);
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
                    <p className={styles.bankName}>{bank.name}</p>
                  </button>
                );
              })}
            </div>
            <div className={styles.selectAllContainer}>
              <button
                className={`${styles.selectAllButton} ${button({ variant: 'blue' })}`}
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
          <h2 className={styles.termMent}>선택한 기간보다 짧은 기간의 상품들이 보여져요.</h2>
          <div className={styles.termContainer}>
            <DropDown color='blue' value={saveTerm} onChange={handleTermChange} />
          </div>
        </section>
        {/*검색 버튼*/}
        <div className={styles.searchContainer}>
          <button
            className={`${styles.searchButton} ${button({ variant: 'blue' })}`}
            onClick={handleSearch}
            disabled={loading}
          >
            검색
          </button>
        </div>
        {/*상품 리스트*/}
        {loading ? (
          <div className={styles.savingListContainer}>
            <Spinner color='blue' />
          </div>
        ) : !isError ? (
          <div className={styles.savingListContainer}>
            {savingsList.length > 0 ? (
              <>
              <div className={styles.savingHowSorted}>
                상품은 기간, 최대 금리, 기본 금리에 대한 내림차순으로 정렬됩니다.
              </div>
              <div className={styles.savingHowmany}>
                총 <span className={styles.howManyNumber}>{savingsList.length}</span>개의 상품이 검색되었습니다.
              </div>
              {savingsList.map((item) => (
                <SavingBasic
                  key={`${item.productId}-${item.optionId}`}
                  productId={item.productId}
                  optionId={item.optionId}
                  bankName={item.bankName}
                  productName={item.productName}
                  rsrvTypeNm={item.rsrvTypeNm}
                  saveTerm={item.saveTerm}
                  baseRate={item.baseRate}
                  maxRate={item.maxRate}
                />
              ))}
              </>
            ) : (
              <div className={styles.notFound}>
                검색된 적금 상품이 없습니다.
              </div>
            )}
          </div>
        ) : (
          <div className={styles.notFound}>
            적금 상품을 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.
          </div>
        )}
      </main>
    </>
  );
};

export default SavingsSearchPage;

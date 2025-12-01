import { useState, useEffect } from 'react';
import { getDepositsList } from '../../shared/api/products';
import { button } from '../../shared/components/button/button.css';
import { BusanGyeongnamBankLogo, DaeguImBankLogo, HanaBankLogo, IBKLogo, JeonbukGwangjuBankLogo, KakaoBankLogo, KBankLogo, KDBLogo, KookminBankLogo, NonghyupBankLogo, ShinhanJejuBankLogo, StandardCharteredBankLogo, SuhyupBankLogo, TossBankLogo, WooriBankLogo } from '../../shared/assets/svg';
import Header from '../../shared/components/header/header';
import DepositBasic from '../../shared/components/deposit-basic/deposit-basic';
import DropDown from '../../shared/components/dropdown/dropdown';
import * as styles from './deposit-search-page.css';

type ProductList = {
    productId: number;
    optionId: number;
    bankName: string;
    productName: string;
    saveTerm: number;
    baseRate: number;
    maxRate: number;
}

const BANK_LIST = [
    { id: '경남은행', name: '경남은행', logo: <BusanGyeongnamBankLogo /> },
    { id: '광주은행', name: '광주은행', logo: <JeonbukGwangjuBankLogo /> },
    { id: '국민은행', name: 'KB국민은행', logo: <KookminBankLogo /> },
    { id: '중소기업은행', name: '기업은행', logo: <IBKLogo /> },
    { id: '농협은행주식회사', name: '농협은행', logo: <NonghyupBankLogo /> },
    { id: '부산은행', name: '부산은행', logo: <BusanGyeongnamBankLogo /> },
    { id: '수협은행', name: '수협은행', logo: <SuhyupBankLogo /> },
    { id: '신한은행', name: '신한은행', logo: <ShinhanJejuBankLogo /> },
    { id: '아이엠뱅크', name: '아이엠은행', logo: <DaeguImBankLogo /> },
    { id: '우리은행', name: '우리은행', logo: <WooriBankLogo /> },
    { id: '전북은행', name: '전북은행', logo: <JeonbukGwangjuBankLogo /> },
    { id: '한국스탠다드차타드은행', name: 'SC제일은행', logo: <StandardCharteredBankLogo /> },
    { id: '제주은행', name: '제주은행', logo: <ShinhanJejuBankLogo /> },
    { id: '주식회사 카카오뱅크', name: '카카오뱅크', logo: <KakaoBankLogo /> },
    { id: '주식회사 케이뱅크', name: '케이뱅크', logo: <KBankLogo /> },
    { id: '토스뱅크 주식회사', name: '토스뱅크', logo: <TossBankLogo /> },
    { id: '주식회사 하나은행', name: '하나은행', logo: <HanaBankLogo /> },
    { id: '한국산업은행', name: '한국산업은행(KDB)', logo: <KDBLogo /> },
];

const DEFAULT_TERM = 36;

const DepositSearchPage = () => {
    const [depositList, setDepositList] = useState<ProductList[]>([]);
    const [loading, setIsLoading] = useState(true);
    const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
    const [saveTerm, setSaveTerm] = useState<number>(DEFAULT_TERM); 
    const [isError, setIsError] = useState(false);
    
    const fetchDepositList = async (banks: string[] | null, term: number) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const res = await getDepositsList(banks || undefined, term);
            const data: ProductList[] = [...(res?.result ?? [])].sort(
                (a, b) => b.maxRate - a.maxRate,
            );
            setDepositList(data);
        } catch (error) {
            setDepositList([]);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const allBankIds = BANK_LIST.map((b)=>b.id);
        setSelectedBanks(allBankIds);
        fetchDepositList(allBankIds, DEFAULT_TERM);
    }, []);

    const handleBankToggle = (bankId: string) => {
        setSelectedBanks((prev)=>{
            if (prev.includes(bankId)) {
                return prev.filter(id=>id !== bankId);
            } else {
                return [...prev, bankId];
            }
        });
    };
    const handleTermChange = (term: number) => {
        setSaveTerm(term);
    }
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
            setSelectedBanks(BANK_LIST.map(b=>b.id));
        }
    };

    return (
        <>
        <Header/>
        <main className={styles.mainContainer}>
            {/*은행 선택*/}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>은행</h2>
                <div className={styles.bankContainer}>
                    <div className={styles.bankGrid}>
                        {BANK_LIST.map((bank) => {
                            const isSelected = selectedBanks.includes(bank.id);
                            return (
                                <button key={bank.id} className={`${styles.bankButton} ${isSelected ? styles.bankButtonSelected : ''}`}
                                onClick={() => handleBankToggle(bank.id)}>
                                <div className={styles.bankLogo}>{bank.logo}</div>
                                <span>{bank.name}</span>
                            </button>
                            );
                        })}
                    </div>
                    <div className={styles.selectAllContainer}>
                        <button
                        className={`${styles.selectAllButton} ${button({variant:'pink'})}`}
                        onClick={()=> handleSelectAll()}
                        >
                            전체선택
                        </button>
                    </div>
                </div>
            </section>
            {/*기간 선택*/}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>기간</h2>
                <div className={styles.termContainer}>
                    <DropDown color='pink' value={saveTerm} onChange={handleTermChange}/>
                </div>
            </section>
            {/*검색 버튼*/}
            <div className={styles.searchContainer}>
                <button
                className={`${styles.searchButton} ${button({variant:'pink'})}`}
                onClick={handleSearch}
                disabled={loading}
                >검색</button>
            </div>
            {/*상품 리스트*/}
            {loading ? (
                <div className={styles.depositListContainer}>
                    <p>상품을 불러오는 중입니다</p>
                </div>
            ) : !isError ? (
                <div className={styles.depositListContainer}>
                    {depositList.length > 0 ? (
                        depositList.map(item => (
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
                        ))
                    ) : (
                        <p>검색된 예금 상품이 없습니다.</p>
                    )}
                </div>
            ) : (
                <p>
                    예금 상품을 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.
                </p>
            )}
        </main>
        </>
    );
};

export default DepositSearchPage;
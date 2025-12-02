import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDepositsDetail } from '../../shared/api/products';
import { formatLimit } from '../../shared/utils/format';
import * as styles from './deposit-detail-page.css';
import Header from '../../shared/components/header/header';
import DepositCompare from '../../shared/components/deposit-compare/deposit-compare';
import Spinner from '../../shared/components/spinner/spinner';

type SimilarProducts = {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  interestType: string;
  maxLimitDiff: number;
  termDiff: number;
  baseRateDiff: number;
  maxRateDiff: number;
};

type ProductDetail = {
  productId: number;
  bankName: string;
  productName: string;
  joinDeny: string;
  joinMember: string;
  joinWay: string;
  specialCondition: string;
  etcNote: string;
  maxLimit: string;
  maturityInterestInfo: string;
  optionId: number;
  interestType: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
  similarProducts: SimilarProducts[];
};

const DepositDetailPage = () => {
  const { productId, optionId } = useParams();

  const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId || !optionId) return;

    setLoading(true);

    getDepositsDetail(Number(productId), Number(optionId))
      .then((res) => {
        setDetail(res.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId, optionId]);

  if (loading) {
    return (
      <>
        <Header />
        <Spinner color='pink' />
      </>
    );
  }

  return (
    <>
      <Header />

      {!detail ? (
        <div className={styles.notFound}>찾으시는 상품이 존재하지 않습니다.</div>
      ) : (
        <>
          <div className={styles.detailContainer}>
            <h2 className={styles.bank}>{detail.bankName}</h2>
            <h1 className={styles.product}>{detail.productName}</h1>
            <div className={styles.detailTextContainer}>
              <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>가입 대상:</h3>
                <p className={styles.textValue}>{detail.joinMember}</p>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>가입 방법:</h3>
                <p className={styles.textValue}>{detail.joinWay}</p>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>가입 제한:</h3>
                <p className={styles.textValue}>{detail.joinDeny}</p>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>최고 한도:</h3>
                <p className={styles.textValue}>{formatLimit(detail.maxLimit)}</p>
              </div>
              <div className={styles.textColContainer}>
                <h3 className={styles.textTitle}>우대 조건</h3>
                <pre className={styles.pre}>{detail.specialCondition}</pre>
              </div>
              <div className={styles.textColContainer}>
                <h3 className={styles.textTitle}>만기 후 이자율</h3>
                <pre className={styles.pre}>{detail.maturityInterestInfo}</pre>
              </div>
              <div className={styles.textColContainer}>
                <h3 className={styles.textTitle}>기타 유의사항</h3>
                <pre className={styles.pre}>{detail.etcNote}</pre>
              </div>
            </div>

            <div className={styles.optionContainer}>
              <h3 className={styles.optionText}>상품 옵션 ⭐</h3>
              <div className={styles.textContainer}>
                <h4 className={styles.textTitle}>이자 유형:</h4>
                <p className={styles.textValue}>{detail.interestType}</p>
              </div>
              <div className={styles.textContainer}>
                <h4 className={styles.textTitle}>저축 기간:</h4>
                <p className={styles.textValue}>{detail.saveTerm}개월</p>
              </div>
              <div className={styles.textContainer}>
                <h4 className={styles.textTitle}>기본 금리:</h4>
                <p className={styles.textValue}>{detail.baseRate}%</p>
              </div>
              <div className={styles.textContainer}>
                <h4 className={styles.textTitle}>최대 금리:</h4>
                <p className={styles.textValue}>{detail.maxRate}%</p>
              </div>
            </div>
          </div>

          <div className={styles.similarProductsContainer}>
            <h3 className={styles.similarTitle}>찾으신 상품과 비슷한 상품들을 추천해드려요</h3>
            <p className={styles.similarText}>
              선택하신 상품과의 비교 결과를 기반으로 추천된 상품입니다.
            </p>
            <div className={styles.similarProductsList}>
              {detail.similarProducts.length === 0 ? (
                <div className={styles.notFound}>유사한 상품이 없습니다.</div>
              ) : (
                detail.similarProducts.map((item) => (
                  <DepositCompare key={`${item.productId}-${item.optionId}`} {...item} />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DepositDetailPage;

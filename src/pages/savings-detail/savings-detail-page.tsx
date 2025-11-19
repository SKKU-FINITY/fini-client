import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSavingsDetail } from '../../shared/api/products';
import { formatLimit } from '../../shared/utils/format';
import * as styles from './savings-detail-page.css';
import Header from '../../shared/components/header/header';

type SimilarProducts = {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
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
  reserveType: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
  similarProducts: SimilarProducts[];
};

const SavingsDetailPage = () => {
  const { productId, optionId } = useParams();

  const [detail, setDetail] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (!productId || !optionId) return;

    getSavingsDetail(Number(productId), Number(optionId)).then((res) => {
      setDetail(res.result);
    });
  }, [productId, optionId]);

  if (!detail) {
    return <div className={styles.notFound}>찾으시는 상품이 존재하지 않습니다.</div>;
  }

  return (
    <>
      <Header />
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
          <div className={styles.optionTextContainer}>
            <h4 className={styles.optionTitle}>이자 유형:</h4>
            <p className={styles.optionValue}>{detail.interestType}</p>
          </div>
          <div className={styles.optionTextContainer}>
            <h4 className={styles.optionTitle}>적립 방식:</h4>
            <p className={styles.optionValue}>{detail.reserveType}</p>
          </div>
          <div className={styles.optionTextContainer}>
            <h4 className={styles.optionTitle}>저축 기간:</h4>
            <p className={styles.optionValue}>{detail.saveTerm}개월</p>
          </div>
          <div className={styles.optionTextContainer}>
            <h4 className={styles.optionTitle}>기본 금리:</h4>
            <p className={styles.optionValue}>{detail.baseRate}%</p>
          </div>
          <div className={styles.optionTextContainer}>
            <h4 className={styles.optionTitle}>최대 금리:</h4>
            <p className={styles.optionValue}>{detail.maxRate}%</p>
          </div>
        </div>
      </div>

      {/* TODO: 유사 상품 리스트 API 연결 후 구현 */}
      <div className={styles.similarProductsContainer}>
        <div>유사 상품 리스트</div>
        <div>유사 상품 리스트</div>
      </div>
    </>
  );
};

export default SavingsDetailPage;

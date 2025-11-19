import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDepositsDetail } from '../../shared/api/products';
import { formatLimit } from '../../shared/utils/format';
import * as styles from './deposit-detail-page.css';
import Header from '../../shared/components/header/header';

type Option = {
  interestType: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
};

type ProductDetail = {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  joinDeny: string;
  joinMember: string;
  joinWay: string;
  specialCondition: string;
  etcNote: string;
  maxLimit: string;
  maturityInterestInfo: string;
  options: Option[];
};

const DepositDetailPage = () => {
  const { productId, optionId } = useParams();

  // TODO:API 연결 후 mockdata 삭제
  const mockDetail: ProductDetail = {
    productId: 34,
    optionId: 293,
    bankName: '주식회사 케이뱅크',
    productName: '코드K 정기예금',
    joinDeny: '제한없음',
    joinMember: '만 17세 이상 실명의 개인 및 개인사업자',
    joinWay: '스마트폰',
    specialCondition: '우대조건 없음',
    etcNote: '가입금액 : 1백만원 이상\n가입기간 : 1개월~36개월',
    maxLimit: '제한 없음',
    maturityInterestInfo:
      '만기 후 \n- 1개월 이내 : 만기시점 기본금리 X 50%\n- 1개월 초과~6개월 이내 : 만기시점 기본금리 X 30%\n- 6개월 초과 : 연 0.20%',
    options: [
      {
        interestType: '단리',
        saveTerm: 6,
        baseRate: 2.86,
        maxRate: 2.86,
      },
    ],
  };

  // TODO: API 연결 후 주석 삭제
  //const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [detail, setDetail] = useState<ProductDetail | null>(mockDetail);

  useEffect(() => {
    if (!productId || !optionId) return;

    getDepositsDetail(Number(productId), Number(optionId)).then((res) => {
      setDetail(res.result);
    });
  }, [productId, optionId]);

  if (!detail) return <div>Loading...</div>;

  const option = detail.options[0];

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

        {option && (
          <div className={styles.optionContainer}>
            <h3 className={styles.optionText}>상품 옵션 ⭐</h3>
            <div className={styles.optionTextContainer}>
              <h4 className={styles.optionTitle}>이자 유형:</h4>
              <p className={styles.optionValue}>{option.interestType}</p>
            </div>
            <div className={styles.optionTextContainer}>
              <h4 className={styles.optionTitle}>저축 기간:</h4>
              <p className={styles.optionValue}>{option.saveTerm}개월</p>
            </div>
            <div className={styles.optionTextContainer}>
              <h4 className={styles.optionTitle}>기본 금리:</h4>
              <p className={styles.optionValue}>{option.baseRate}%</p>
            </div>
            <div className={styles.optionTextContainer}>
              <h4 className={styles.optionTitle}>최대 금리:</h4>
              <p className={styles.optionValue}>{option.maxRate}%</p>
            </div>
          </div>
        )}
      </div>

      {/* TODO: 유사 상품 리스트 API 연결 후 구현 */}
      <div className={styles.similarProductsContainer}>
        <div>유사 상품 리스트</div>
        <div>유사 상품 리스트</div>
      </div>
    </>
  );
};

export default DepositDetailPage;

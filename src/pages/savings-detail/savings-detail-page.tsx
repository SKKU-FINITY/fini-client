import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSavingsDetail } from '../../shared/api/products';
import * as styles from './savings-detail-page.css';
import Header from '../../shared/components/header/header';

type Option = {
  interestType: string;
  reserveType: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
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
  options: Option[];
};

const SavingsDetailPage = () => {
  const { productId, optionId } = useParams();

  // TODO:API 연결 후 mockdata 삭제
  const mockDetail: ProductDetail = {
    productId: 50,
    bankName: '수협은행',
    productName: 'Sh해양플라스틱Zero!적금',
    joinDeny: '제한없음',
    joinMember: '실명의 개인',
    joinWay: '영업점,인터넷,스마트폰',
    specialCondition:
      '* 최대우대금리:0.5%\n1. 해양플라스틱감축서약 : 0.1% (신규시) \n2. 봉사활동 또는 상품홍보 : 0.2% (만기시) \n3. 입출금통장 최초신규 : 0.2% (만기시)\n4. 자동이체 출금실적 : 0.2% (만기시)\n - 수협신용카드 / 당행 펀드 / 수협체크카드',
    etcNote: '- 1인 1계좌 \n- 월 가입한도 : 20만원',
    maxLimit: '200,000',
    maturityInterestInfo:
      '* 만기후 1년 이내\n - 만기당시 상호부금 \n계약기간별 기본금리 1/2\n* 만기후 1년 초과\n - 만기당시 보통예금 기본금리',
    options: [
      {
        interestType: '단리',
        reserveType: '자유적립식',
        saveTerm: 12,
        baseRate: 3.65,
        maxRate: 4.15,
      },
    ],
  };

  // TODO: API 연결 후 주석 삭제
  //const [detail, setDetail] = useState<ProductDetail | null>(null);
  const [detail, setDetail] = useState<ProductDetail | null>(mockDetail);

  useEffect(() => {
    if (!productId || !optionId) return;

    getSavingsDetail(Number(productId), Number(optionId)).then((res) => {
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
            <h3 className={styles.textTitle}>가입대상:</h3>
            <p className={styles.textValue}>{detail.joinMember}</p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.textTitle}>가입방법:</h3>
            <p className={styles.textValue}>{detail.joinWay}</p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.textTitle}>가입제한:</h3>
            <p className={styles.textValue}>{detail.joinDeny}</p>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.textTitle}>최고한도:</h3>
            <p className={styles.textValue}>{detail.maxLimit}원</p>
          </div>
          <h3 className={styles.textTitle}>우대 조건</h3>
          <pre className={styles.pre}>{detail.specialCondition}</pre>

          <h3 className={styles.textTitle}>만기 후 이자율</h3>
          <pre className={styles.pre}>{detail.maturityInterestInfo}</pre>

          <h3 className={styles.textTitle}>기타 유의사항</h3>
          <pre className={styles.pre}>{detail.etcNote}</pre>
        </div>

        {option && (
          <div className={styles.optionContainer}>
            <h3 className={styles.optionText}>상품 옵션 ⭐</h3>

            <div className={styles.optionTextContainer}>
              <h4 className={styles.optionTitle}>적립 방식:</h4>
              <p className={styles.optionValue}>{option.reserveType}</p>
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

export default SavingsDetailPage;

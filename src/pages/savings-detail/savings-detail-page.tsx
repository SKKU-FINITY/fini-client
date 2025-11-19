import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSavingsDetail } from '../../shared/api/products';

const SavingsDetailPage = () => {
  const { productId, optionId } = useParams();

  useEffect(() => {
    if (!productId || !optionId) return;

    getSavingsDetail(Number(productId), Number(optionId)).then((res) => {
      console.log(res);
    });
  }, [productId, optionId]);

  return <div>적금 상세 페이지</div>;
};

export default SavingsDetailPage;

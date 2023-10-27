import ShopHeader from '../ShopHeader';
import DetailsProduct from './content/DetailsProduct';
import PageContainer from '@/common/PageContainer';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DetailsContent = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (productID === undefined) {
      navigate(`${BasicRoutes.ECOMMERCE}${SubRoutes.DETAILS}/2`);
    }
  }, [navigate, productID, location]);

  return (
    <PageContainer>
      <ShopHeader />
      <DetailsProduct productID={productID} />
    </PageContainer>
  );
};

export default DetailsContent;

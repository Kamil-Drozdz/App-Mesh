import ShopHeader from '../ShopHeader';
import ShopProducts from './content/ShopProducts';
import PageContainer from '@/common/PageContainer';

function ShopContent() {
  return (
    <PageContainer>
      <ShopHeader />
      <ShopProducts />
    </PageContainer>
  );
}

export default ShopContent;

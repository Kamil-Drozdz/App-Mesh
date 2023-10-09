import ShopHeader from '../ShopHeader';
import ShopProducts from './content/ShopProducts';
import PageContainer from '@/common/PageContainer';

const ShopContent = () => {
	return (
		<PageContainer>
			<ShopHeader />

			<ShopProducts />
		</PageContainer>
	);
};

export default ShopContent;

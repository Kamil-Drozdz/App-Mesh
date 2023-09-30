import ShopHeader from '../ShopHeader';
import DetailsProduct from './content/DetailsProduct';
import PageContainer from '@/common/PageContainer';
import { useParams } from 'react-router-dom';

const DetailsContent = () => {
	const { productID } = useParams();

	return (
		<PageContainer>
			<ShopHeader />
			<DetailsProduct productID={productID} />
		</PageContainer>
	);
};

export default DetailsContent;

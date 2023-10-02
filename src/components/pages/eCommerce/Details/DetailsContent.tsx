import ShopHeader from '../ShopHeader';
import DetailsProduct from './content/DetailsProduct';
import PageContainer from '@/common/PageContainer';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DetailsContent = () => {
	const { productID } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (productID === undefined) {
			navigate('/ecommerce/details/2');
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

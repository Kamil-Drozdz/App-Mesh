import { useEffect, useState } from 'react';

const DetailsProduct = ({ productID }) => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productID}`)
			.then(res => res.json())
			.then(json => setProduct(json));
	}, [productID]);
	console.log(product);
	return <div>DetailsProducasdasddast</div>;
};

export default DetailsProduct;

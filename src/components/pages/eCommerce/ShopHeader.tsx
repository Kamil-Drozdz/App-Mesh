import { Link, useLocation } from 'react-router-dom';

const ShopHeader = () => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

	return (
		<div className='flex items-center space-x-2 mb-2'>
			<Link to='/ecommerce/shop'>
				<h2 className='border-r px-2 border-gray-600'>Shop</h2>
			</Link>
			{pathSegments.map((segment, index) => {
				if (index === pathSegments.length - 1) {
					const lastSegmentIsNumber = /^\d+$/.test(segment);

					if (lastSegmentIsNumber) {
						return null;
					} else {
						return <span key={segment}>{segment}</span>;
					}
				} else {
					return (
						<Link className='text-violet-500' key={segment} to={`/${segment}`}>
							{`${segment}  `}
							<span className='text-white mx-2'>&gt;</span>
						</Link>
					);
				}
			})}
		</div>
	);
};

export default ShopHeader;

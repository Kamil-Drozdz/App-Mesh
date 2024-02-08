import { Link, useLocation } from 'react-router-dom';

import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';

function ShopHeader() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (
    <div className='mb-2 flex items-center space-x-2'>
      <Link to={`${BasicRoutes.ECOMMERCE}${SubRoutes.SHOP}`}>
        <h2 className='border-r border-gray-600 px-2'>Shop</h2>
      </Link>
      {pathSegments.map((segment, index) => {
        if (index === pathSegments.length - 1) {
          const lastSegmentIsNumber = /^\d+$/.test(segment);
          if (lastSegmentIsNumber) {
            return null;
          }
          return <span key={segment}>{segment.at(0)?.toLocaleUpperCase() + segment.slice(1)}</span>;
        }
        return (
          <Link className='text-buttonPrimary' key={segment} to={`/${segment}`}>
            {segment.at(0)?.toLocaleUpperCase() + segment.slice(1)}
            <span className='mx-2 text-white'>&gt;</span>
          </Link>
        );
      })}
    </div>
  );
}

export default ShopHeader;

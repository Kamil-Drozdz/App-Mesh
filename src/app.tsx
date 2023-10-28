import { ProtectedComponent } from './common/ProtectedComponent';
import { BasicRoutes, SubRoutes } from './lib/enums/routes';
import { FULL_PATHS, publicPaths } from './lib/routeMapping';
import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageContentSkeleton from './UI/skeleton/PageContentSkeleton';
import useCurrentUser from './store/CurrentUser';

const App = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  const pathname = window.location.pathname;
  useEffect(() => {
    if (pathname === '/') {
      if (currentUser) {
        navigate(`${BasicRoutes.LOGIN}`);
      } else {
        navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
      }
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<PageContentSkeleton />}>
        <Routes>
          {FULL_PATHS.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                publicPaths.includes(path) ? (
                  React.createElement(component)
                ) : (
                  <ProtectedComponent component={component} />
                )
              }
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

import Loader from './Loader';
import { auth } from '@/../firebaseConfig';
import { BasicRoutes } from '@/lib/enums/routes';
import useCurrentUser from '@/store/CurrentUser';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedComponent = ({ component: Component }) => {
  const [loading, setLoading] = useState(true);
  const { setCurrentUser, currentUser } = useCurrentUser();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Loader />;
  }

  return currentUser?.email ? <Component /> : <Navigate to={BasicRoutes.UNAUTHORIZED} />;
};

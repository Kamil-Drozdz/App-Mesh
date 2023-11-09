import Loader from './Loader';
import { auth, db } from '@/../firebaseConfig';
import { BasicRoutes } from '@/lib/enums/routes';
import useCurrentUser from '@/store/CurrentUser';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedComponent = ({ component: Component }) => {
  const [loading, setLoading] = useState(true);
  const { setCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', 'btRsHRNa7gSCKkWxLXltVbGsCI93'));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const foundUser = userData.users.find((u) => u.displayName === user.displayName);

          setCurrentUser({
            ...user,
            role: foundUser?.role,
            photoURL: user.photoURL,
          });
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [setCurrentUser]);

  if (loading) {
    return <Loader />;
  }

  if (currentUser?.email) {
    return <Component />;
  } else {
    return <Navigate to={BasicRoutes.UNAUTHORIZED} />;
  }
};

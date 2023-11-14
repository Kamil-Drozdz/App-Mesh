import { useState, useEffect } from 'react';
import { db } from '@/../firebaseConfig';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';
import useCurrentUser from '@/store/CurrentUser';

function useFirebaseData<T extends DocumentData>(arrayName: string, docId?: string, collectionPath: string = 'users') {
  const { currentUser } = useCurrentUser();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const docIdentifier = docId || currentUser?.uid || '';
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, collectionPath, docIdentifier);

    const unsubscribeSnapshot = onSnapshot(
      docRef,
      (docSnap) => {
        setLoading(false);
        if (docSnap.exists()) {
          setData(docSnap.data()[arrayName] as T);
        } else {
          setError('Document does not exist');
        }
      },
      (err) => {
        setLoading(false);
        setError(err.message);
      }
    );
    return () => {
      unsubscribeSnapshot();
    };
  }, [collectionPath, docIdentifier]);

  return { data, loading, error };
}

export default useFirebaseData;

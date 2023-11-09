import { useState, useEffect } from 'react';
import { db } from '@/../firebaseConfig';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';

function useFirebaseData<T extends DocumentData>(collectionPath: string, docId: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, collectionPath, docId);

    const unsubscribeSnapshot = onSnapshot(
      docRef,
      (docSnap) => {
        setLoading(false);
        if (docSnap.exists()) {
          setData(docSnap.data()[collectionPath] as T);
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
  }, [collectionPath, docId]);

  return { data, loading, error };
}

export default useFirebaseData;

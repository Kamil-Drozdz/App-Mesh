import { useQuery } from '@tanstack/react-query';
import { doc, getDoc, DocumentData, collection } from 'firebase/firestore';

import { db } from '@/../firebaseConfig';
import useCurrentUser from '@/store/CurrentUser';

async function fetchDocument<T extends DocumentData>(
  arrayName: string,
  collectionPath: string,
  docId?: string
): Promise<T> {
  if (!docId) {
    throw 'Error getting document';
  }

  const collectionRef = collection(db, collectionPath);
  const docRef = doc(collectionRef, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()[arrayName] as T;
  }
  throw 'Error getting document';
}

const useFirebaseCachedData = <T extends DocumentData>(
  arrayName: string,
  docId?: string,
  collectionPath: string = 'users'
) => {
  const { currentUser } = useCurrentUser();
  const docIdentifier = docId || currentUser?.uid || '';
  const fetchKey = [arrayName, collectionPath, docIdentifier];
  const queryFn = () => fetchDocument<T>(arrayName, collectionPath, docIdentifier);

  const { data, error, isLoading } = useQuery<T, Error>({
    queryKey: fetchKey,
    queryFn,
  });

  return { data, loading: isLoading, error };
};

export default useFirebaseCachedData;

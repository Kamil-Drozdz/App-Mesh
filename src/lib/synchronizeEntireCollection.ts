import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/../firebaseConfig';

export const synchronizeEntireCollection = async (collectionPath, docId, newData) => {
  const documentRef = doc(db, collectionPath, docId);
  await setDoc(documentRef, {  [collectionPath]: newData }, { merge: true });
};

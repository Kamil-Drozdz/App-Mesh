import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/../firebaseConfig';

export const deleteFirestoreDocument = async (collectionPath, docId, itemToDelete) => {
  const docRef = doc(db, collectionPath, docId);
  await updateDoc(docRef, {
    [collectionPath]: arrayRemove(itemToDelete),
  });
};

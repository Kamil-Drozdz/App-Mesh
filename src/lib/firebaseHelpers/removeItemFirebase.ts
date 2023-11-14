import { DocumentData, arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/../firebaseConfig';

export async function removeItemFirebase<T extends DocumentData>(
  key: string,
  docId: string,
  ItemToRemove: T,
  collectionPath: string = 'users'
): Promise<void> {
  const docRef = doc(db, collectionPath, docId);
  try {
    await updateDoc(docRef, {
      [key]: arrayRemove(ItemToRemove),
    });
  } catch (error) {
    console.error('Error removing item:', error);
  }
}

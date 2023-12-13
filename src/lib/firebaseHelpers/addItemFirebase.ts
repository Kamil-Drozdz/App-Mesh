import { DocumentData, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { db } from '@/../firebaseConfig';

export async function addItemFirebase<T extends DocumentData>(
  key: string,
  docId: string,
  newItem: T,
  collectionPath: string = 'users'
): Promise<void> {
  const docRef = doc(db, collectionPath, docId);
  try {
    await updateDoc(docRef, {
      [key]: arrayUnion(newItem),
    });
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

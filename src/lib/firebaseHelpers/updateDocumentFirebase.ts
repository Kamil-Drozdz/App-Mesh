import { DocumentData, doc, setDoc } from 'firebase/firestore';

import { db } from '@/../firebaseConfig';

export async function updateDocumentFirebase<T extends DocumentData>(
  key: string,
  docId: string,
  updatedItems: T,
  collectionPath: string = 'users'
): Promise<void> {
  const docRef = doc(db, collectionPath, docId);
  try {
    await setDoc(docRef, { [key]: updatedItems }, { merge: true });
  } catch (error) {
    console.error('Error updating item:', error);
  }
}

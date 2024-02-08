import { DocumentData, arrayRemove, doc, updateDoc } from 'firebase/firestore';

import { db } from '@/../firebaseConfig';

export async function removeDocumentFirebase<T extends DocumentData>(
  key: string,
  docId: string,
  documentToRemove: T,
  collectionPath: string = 'users'
): Promise<void> {
  const docRef = doc(db, collectionPath, docId);
  try {
    await updateDoc(docRef, {
      [key]: arrayRemove(documentToRemove),
    });
  } catch (error) {
    console.error('Error removing document:', error);
  }
}

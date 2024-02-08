import { DocumentData, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { db } from '@/../firebaseConfig';

export async function addDocumentFirebase<T extends DocumentData>(
  key: string,
  docId: string,
  newDocument: T,
  collectionPath: string = 'users'
): Promise<void> {
  const docRef = doc(db, collectionPath, docId);
  try {
    await updateDoc(docRef, {
      [key]: arrayUnion(newDocument),
    });
  } catch (error) {
    console.error('Error adding document:', error);
  }
}

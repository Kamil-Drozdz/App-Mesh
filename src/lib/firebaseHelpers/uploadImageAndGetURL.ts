import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/../firebaseConfig';
export const uploadImageAndGetURL = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`);

  try {
    const snapshot = await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading file: ', error);
    return null;
  }
};

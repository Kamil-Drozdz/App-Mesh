import { auth, db } from '@/../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export const createUser = async (formData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const docRef = doc(db, 'users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');
    await updateDoc(docRef, {
      users: arrayUnion({
        id: userCredential.user.uid,
        displayName: formData.displayName,
        email: formData.email,
        role: formData.role,
        plan: formData.plan || 'free',
        emailVerified: 'inactive',
        photoURL: `https://ui-avatars.com/api/?name=${formData?.displayName.slice(0, 1)}`,
      }),
    });
    const user = userCredential.user as User;
    const profile = {
      displayName: formData.displayName,
      role: formData.role,
    };
    await updateProfile(user, profile);
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: error };
  }
};

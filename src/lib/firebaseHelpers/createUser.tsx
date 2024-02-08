import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, User } from 'firebase/auth';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { auth, db } from '@/../firebaseConfig';

export const createUser = async (formData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user as User;

    await sendEmailVerification(user)
      .then(() => toast.success('confirm your email, the link has been sent to your mailbox'))
      .catch(() => toast.error('email confirmation link has not been sent'));

    const docRef = doc(db, 'users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');
    const userDocRef = doc(db, 'users', user.uid);
    // set invidual user empty slice  for  data
    await setDoc(userDocRef, {});
    await updateDoc(docRef, {
      users: arrayUnion({
        id: userCredential.user.uid,
        displayName: formData.displayName,
        email: formData.email,
        role: formData.role,
        plan: formData.plan || 'free',
        photoURL:
          userCredential.user.photoURL || `https://ui-avatars.com/api/?name=${formData?.displayName.slice(0, 1)}`,
      }),
    });

    const profile = {
      displayName: formData.displayName,
      role: formData.role,
    };
    await updateProfile(user, profile);
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error };
  }
};

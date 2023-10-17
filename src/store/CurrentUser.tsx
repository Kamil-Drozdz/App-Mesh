import { User } from 'firebase/auth';
import { create } from 'zustand';

interface CustomUser extends User {
  role?: string;
}
interface UserProps {
  currentUser: CustomUser | null;
  setCurrentUser: (user: CustomUser | null) => void;
}

const useCurrentUser = create<UserProps>((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) => set({ currentUser: newUser }),
}));

export default useCurrentUser;

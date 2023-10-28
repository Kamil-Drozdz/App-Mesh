import { create } from 'zustand';

interface FullScreenProps {
  isFullScreen: boolean;
  toggleFullScreen: (boolean) => void;
}
const useFullScreen = create<FullScreenProps>()((set) => ({
  isFullScreen: false,
  toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
}));

export default useFullScreen;

import { FormDataBasic } from '@/components/config/MultiConfigForm';
import { create } from 'zustand';

interface ConfigProps {
  config: FormDataBasic | null;
  setConfig: (boolean) => void;
}
const useConfig = create<ConfigProps>()((set) => ({
  config: null,
  setConfig: (userConfig) => set({ config: userConfig }),
}));

export default useConfig;

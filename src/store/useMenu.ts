import create from 'zustand';

interface MenuProps {
	isMenuOpen: boolean;
	toggleMenu: (boolean) => void;
}
const useMenu = create<MenuProps>()(set => ({
	isMenuOpen: false,
	toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useMenu;

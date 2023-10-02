import { create } from 'zustand';

export interface ProductProps {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	rating: {
		rate: number;
		count?: number;
	};
}
interface ProdusctsStoreProps {
	products: ProductProps[];
	wishlist: ProductProps[];
	cart: ProductProps[];
	setProducts: (newProducts: ProductProps[]) => void;
	addToWishlist: (product: ProductProps) => void;
	addToCart: (product: ProductProps) => void;
	removeFromWishlist: (productId: number) => void;
	removeFromCart: (productId: number) => void;
}

const useProductsStore = create<ProdusctsStoreProps>()(set => ({
	products: [],
	wishlist: [],
	cart: [],
	setProducts: newProducts => set({ products: newProducts }),
	addToWishlist: product => set(state => ({ wishlist: [...state.wishlist, product] })),
	removeFromWishlist: productId => set(state => ({ wishlist: state.wishlist.filter(product => product.id !== productId) })),
	addToCart: product => set(state => ({ cart: [...state.cart, product] })),
	removeFromCart: productId => set(state => ({ cart: state.cart.filter(product => product.id !== productId) })),
}));

export default useProductsStore;

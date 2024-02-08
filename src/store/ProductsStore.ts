import { create } from 'zustand';

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  userQuantity: number;
  rating: {
    rate: number;
    count: number;
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
  setUserQuantity: (productId: number, quantity: number) => void;
}

const useProductsStore = create<ProdusctsStoreProps>()((set) => ({
  products: [],
  wishlist: [],
  cart: [],
  setProducts: (newProducts) => set({ products: newProducts }),
  addToWishlist: (product) => set((state) => ({ wishlist: [...state.wishlist, product] })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((product) => product.id !== productId),
    })),
  addToCart: (product) =>
    set((state) => {
      const cartItem = state.cart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, userQuantity: item.userQuantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, userQuantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  setUserQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === productId ? { ...item, userQuantity: quantity } : item)),
    })),
}));

export default useProductsStore;

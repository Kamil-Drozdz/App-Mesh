import { starRating } from '@/lib/starRating';
import useProductsStore, { ProductProps } from '@/store/ProductsStore';
import useWishlist from '@/hooks/reusable/useWishList';

function useCheckoutStepperItem({ product }: { product: ProductProps }) {
  const { cart, wishlist, setUserQuantity, addToWishlist, removeFromWishlist, removeFromCart } = useProductsStore();
  const cartItem = cart.find((item) => item.id === product.id);
  const userQuantity = cartItem ? cartItem.userQuantity : 1;
  const stars = starRating(product.rating.rate);
  const { isProductInWishlist, toggleWishlist } = useWishlist(wishlist, {
    add: addToWishlist,
    remove: removeFromWishlist,
  });
  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value <= product?.quantity && value >= 1) {
      setUserQuantity(product.id, value);
    }
  };

  const handleRemoveProductFromCart = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    }
  };

  return {
    stars,
    userQuantity,
    setUserQuantity,
    isProductInWishlist,
    handleQuantityChange,
    handleRemoveProductFromCart,
    toggleWishlist,
  };
}

export default useCheckoutStepperItem;

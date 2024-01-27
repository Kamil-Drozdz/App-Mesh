import { useCallback } from 'react';

const useWishlist = (wishlist, modifyWishlist) => {
  const isProductInWishlist = useCallback((product) => wishlist.some((item) => item.id === product.id), [wishlist]);

  const toggleWishlist = useCallback(
    (product) => {
      if (isProductInWishlist(product)) {
        modifyWishlist.remove(product.id);
      } else {
        modifyWishlist.add(product);
      }
    },
    [wishlist, modifyWishlist]
  );

  return { isProductInWishlist, toggleWishlist };
};

export default useWishlist;

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { starRating } from '@/lib/starRating';
import useProductsStore, { ProductProps } from '@/store/ProductsStore';
import useWishlist from '@/hooks/reusable/useWishList';
import useFirebaseCachedData from '@/hooks/reusable/useFirebaseCachedData';

function useDetailsProduct({ productID }: { productID?: number }) {
  if (typeof productID === 'undefined') {
    productID = 2;
  }

  const { data: products, loading, error } = useFirebaseCachedData<ProductProps[]>('products');
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
  const { addToWishlist, cart, addToCart, removeFromWishlist, wishlist } = useProductsStore();
  const { isProductInWishlist, toggleWishlist } = useWishlist(wishlist, {
    add: addToWishlist,
    remove: removeFromWishlist,
  });

  const isProductInCart = cart.some((item) => item.id === product?.id);
  const stars = product ? starRating(product?.rating?.rate) : null;

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((p) => p.id === Number(productID));
      setProduct(foundProduct || null);
    }
  }, [products, productID]);

  useEffect(() => {
    setTimeout(() => setIsCopiedToClipboard(false), 6000);
  }, [isCopiedToClipboard]);

  const handleShare = () => {
    toast.info('Product URL copied to clipboard');
    navigator.clipboard.writeText(location.href);
    setIsCopiedToClipboard(true);
  };
  const handleAddToCart = (product) => {
    if (!isProductInCart) {
      addToCart(product);
    }
  };

  return {
    product,
    loading,
    error,
    stars,
    isCopiedToClipboard,
    handleShare,
    handleAddToCart,
    isProductInWishlist,
    toggleWishlist,
  };
}

export default useDetailsProduct;

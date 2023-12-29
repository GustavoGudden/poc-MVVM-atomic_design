import { useRouter } from 'next/navigation';
import { CartModel } from './model';

export const useCartModel = (): CartModel => {
  const router = useRouter();

  const sendToCart = () => {
    window.alert('voce selecionou um produto');
  };

  const redirectToCart = () => {
    router.push('/cart');
  };

  return { sendToCart, redirectToCart };
};

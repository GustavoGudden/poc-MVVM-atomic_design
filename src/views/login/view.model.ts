import { useRouter } from 'next/navigation';
import { LoginViewModel } from './model';

export const useLoginViewModel = (): LoginViewModel => {
  const router = useRouter();

  const redirectToCart = () => {
    router.push('/cart');
  };

  return { redirectToCart };
};

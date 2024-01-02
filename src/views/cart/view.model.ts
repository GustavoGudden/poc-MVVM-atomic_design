import { useRouter } from 'next/navigation';
import { CartModel } from './model';
import { Products } from '@/mocks/data/responseData.mock';
import { ICart } from '@/models/CartModel';

export const useCartModel = (): CartModel => {
  const router = useRouter();

  const redirectToCart = () => {
    router.push('/cart');
  };

  const getProductsById = (id: string) => {
    return Products.data.find((product) => product.id === id)!;
  };

  const getAllProducsOnCart = (cart: ICart[]) => {
    return cart.map((id) => {
      return getProductsById(id.productId);
    });
  };

  return { redirectToCart, getProductsById, getAllProducsOnCart };
};

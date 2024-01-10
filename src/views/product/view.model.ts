import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ProductPageModel } from './model';
import { Products } from '@/mocks/data/responseData.mock';

export const useProductPageViewModel = (): ProductPageModel => {
  const router = useRouter();

  const GetParams = () => {
    const params = useParams();
    return params;
  };

  const redirectToCart = () => {
    router.push('/cart');
  };
  const getProductsById = (id: string) => {
    return Products.data.find((product) => product.id === id)!;
  };

  return { GetParams, redirectToCart, getProductsById };
};

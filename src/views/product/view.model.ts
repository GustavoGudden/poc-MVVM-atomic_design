import { useParams } from 'next/navigation';
import { ProductPageModel } from './model';

export const useProductPageViewModel = (): ProductPageModel => {
  const getParams = () => {
    const params = useParams();
    return params;
  };

  return { getParams };
};

import { IProduct } from '@/models/ProductModel';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export interface ProductPageModel {
  getParams: () => Params;
  redirectToCart: () => void;
  getProductsById: (id: string) => IProduct;
}

import { ICart } from '@/models/CartModel';
import { IProduct } from '@/models/ProductModel';

export interface CartModel {
  redirectToCart: () => void;
  getProductsById: (id: string) => IProduct;
  getAllProducsOnCart: (cart: ICart[]) => IProduct[];
}

import { ICart } from '@/models/CartModel';
import { IProduct } from '@/models/ProductModel';
import { Dispatch, SetStateAction } from 'react';

export interface CartModel {
  getProductsById: (id: string) => IProduct;
  getAllProductsOnCartWithAmout: (cart: ICart[]) => (IProduct & { amount: number })[];
  handleChangeAmount: (amount: number, id: string) => void;
  setAmount: Dispatch<SetStateAction<{ amount: number; id: String }>>;
  totalValueCart: number;
}

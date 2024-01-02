import { CartProduct } from '@/components/molecules/cartProduct';
import { FC } from 'react';
import { CartTableHeader } from '../cartTableHeader';
import { IProduct } from '@/models/ProductModel';
import { ICart } from '@/models/CartModel';
import { productCart } from '@/mocks/data/responseData.mock';

interface ICartTable {
  getAllProducsOnCart: (cart: ICart[]) => IProduct[];
}

export const CartTable: FC<ICartTable> = ({ getAllProducsOnCart }) => {
  const products = getAllProducsOnCart(productCart.data);

  return (
    <div>
      <CartTableHeader />
      {products.map((product) => (
        <CartProduct product={product} />
      ))}
    </div>
  );
};

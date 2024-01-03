import { FC } from 'react';
import { CartProduct } from '@/components/molecules/cartProduct';
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
      {products.map((product, index) => (
        <CartProduct product={product} key={index} />
      ))}
    </div>
  );
};

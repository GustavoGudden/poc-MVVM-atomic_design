import { Dispatch, FC, SetStateAction } from 'react';
import { CartProduct } from '@/components/molecules/cartProduct';
import { CartTableHeader } from '../cartTableHeader';
import { IProduct } from '@/models/ProductModel';
import { ICart } from '@/models/CartModel';
import { productCart } from '@/mocks/data/responseData.mock';

interface ICartTable {
  getAllProductsOnCartWithAmout: (cart: ICart[]) => (IProduct & { amount: number })[];
  setAmount: Dispatch<SetStateAction<{ amount: number; id: String }>>;
  handleChangeAmount: (amount: number, id: string) => void;
}

export const CartTable: FC<ICartTable> = ({ getAllProductsOnCartWithAmout, setAmount, handleChangeAmount }) => {
  const products = getAllProductsOnCartWithAmout(productCart.data);

  return (
    <div>
      <CartTableHeader />
      {products.map((product, index) => (
        <CartProduct product={product} key={index} setAmount={setAmount} handleChangeAmount={handleChangeAmount} />
      ))}
    </div>
  );
};

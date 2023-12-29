import { CartProduct } from '@/components/molecules/cartProduct';
import { FC } from 'react';
import { CartTableHeader } from '../cartTableHeader';

export const CartTable: FC = () => {
  return (
    <div>
      <CartTableHeader />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  );
};

'use client';

import { Dispatch, FC, SetStateAction } from 'react';

// Organisms
import { CartInfo } from '@/components/organisms/cartInfos';
import { CartTable } from '@/components/organisms/cartTable';
import { ProductPath } from '@/components/organisms/productPath';
import { ICart } from '@/models/CartModel';

// TYPE
import { IProduct } from '@/models/ProductModel';

interface ICartTemplate {
  getAllProductsOnCartWithAmout: (cart: ICart[]) => (IProduct & { amount: number })[];
  totalValueCart: number;
  setAmount: Dispatch<SetStateAction<{ amount: number; id: String }>>;
  handleChangeAmount: (amount: number, id: string) => void;
}

export const CartTemplate: FC<ICartTemplate> = ({ getAllProductsOnCartWithAmout, totalValueCart, setAmount, handleChangeAmount }) => {
  return (
    <>
      <section className="px-20">
        <ProductPath page="Home" category="Cart" />
        <CartTable getAllProductsOnCartWithAmout={getAllProductsOnCartWithAmout} setAmount={setAmount} handleChangeAmount={handleChangeAmount} />
        <CartInfo totalValueCart={totalValueCart} />
      </section>
    </>
  );
};

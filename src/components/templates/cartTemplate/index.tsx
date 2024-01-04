'use client';

import { FC } from 'react';

// Organisms
import { CartInfo } from '@/components/organisms/cartInfos';
import { CartTable } from '@/components/organisms/cartTable';
import { ProductPath } from '@/components/organisms/productPath';
import { ICart } from '@/models/CartModel';

// TYPE
import { IProduct } from '@/models/ProductModel';

interface ICartTemplate {
  redirectToCart: () => void;
  getProductsById: (id: string) => IProduct;
  getAllProducsOnCart: (cart: ICart[]) => IProduct[];
}

export const CartTemplate: FC<ICartTemplate> = ({ redirectToCart, getAllProducsOnCart }) => {
  return (
    <>
      <section className="px-20">
        <ProductPath page="Home" category="Cart" />
        <CartTable getAllProducsOnCart={getAllProducsOnCart} />
        <CartInfo />
      </section>
    </>
  );
};

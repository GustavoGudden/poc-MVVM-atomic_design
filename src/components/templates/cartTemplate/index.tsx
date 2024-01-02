'use client';
import { CartInfo } from '@/components/organisms/cartInfos';
import { CartTable } from '@/components/organisms/cartTable';
import { Footer } from '@/components/organisms/footer/footer';
import { Header } from '@/components/organisms/header';
import { ProductPath } from '@/components/organisms/productPath';
import { ICart } from '@/models/CartModel';
import { IProduct } from '@/models/ProductModel';
import { FC } from 'react';

// Organisms

// Mock data

interface ICartTemplate {
  redirectToCart: () => void;
  getProductsById: (id: string) => IProduct;
  getAllProducsOnCart: (cart: ICart[]) => IProduct[];
}

export const CartTemplate: FC<ICartTemplate> = ({ redirectToCart, getAllProducsOnCart }) => {
  return (
    <>
      <Header redirectToCart={redirectToCart} />
      <section className="px-20">
        <ProductPath page="Home" category="Cart" />
        <CartTable getAllProducsOnCart={getAllProducsOnCart} />
        <CartInfo />
      </section>
      <Footer />
    </>
  );
};

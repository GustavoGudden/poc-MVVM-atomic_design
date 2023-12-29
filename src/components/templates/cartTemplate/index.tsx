'use client';
import { CartInfo } from '@/components/organisms/cartInfos';
import { CartTable } from '@/components/organisms/cartTable';
import { Footer } from '@/components/organisms/footer/footer';
import { Header } from '@/components/organisms/header';
import { ProductPath } from '@/components/organisms/productPath';
import { FC } from 'react';

// Organisms

// Mock data

interface ICartTemplate {
  sendToCart: () => void;
  redirectToCart: () => void;
}

export const CartTemplate: FC<ICartTemplate> = ({ sendToCart, redirectToCart }) => {
  return (
    <>
      <Header redirectToCart={redirectToCart} />
      <section className="px-20">
        <ProductPath page="Home" category="Cart" />
        <CartTable />
        <CartInfo />
      </section>
      <Footer />
    </>
  );
};

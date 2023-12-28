'use client';
import { CartTable } from '@/components/organisms/cartTable';
import { Footer } from '@/components/organisms/footer/footer';
import { Header } from '@/components/organisms/header';
import { ProductPath } from '@/components/organisms/productPath';
import { FC } from 'react';

// Organisms

// Mock data

interface ICartTemplate {
  sendToCart: () => void;
}

export const CartTemplate: FC<ICartTemplate> = ({ sendToCart }) => {
  return (
    <>
      <Header />
      <section className="px-20">
        <ProductPath page="Home" category="Cart" />
        <CartTable />
      </section>
      <Footer />
    </>
  );
};

'use client';

import { FC } from 'react';

// Components
import { IProduct } from '@/models/ProductModel';
import { ProductCard } from '../productsCard';

interface IproductArr {
  data: IProduct[];
  onClickProductCard: (id: string) => void;
}

export const ProductCarrosel: FC<IproductArr> = ({ data, onClickProductCard }) => {
  return (
    <section className="pt-4">
      <div className="flex gap-4 pt-4 ">
        {data.map((product, index) => {
          return <ProductCard data={product} key={index} onClickProductCard={onClickProductCard} />;
        })}
      </div>
    </section>
  );
};

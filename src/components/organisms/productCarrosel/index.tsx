'use client';

import { FC } from 'react';

// Components
import { IProduct } from '@/models/ProductModel';
import { ProductCard } from '../productsCard';
import { Button } from '@nextui-org/react';

interface IproductArr {
  data: IProduct[];
  onClickProductCard: (id: string) => void;
}

export const ProductCarrosel: FC<IproductArr> = ({ data, onClickProductCard }) => {
  return (
    <section className="mt-4">
      <div className="flex gap-4 mt-4 flex-wrap ">
        {data.map((product, index) => {
          return <ProductCard data={product} key={index} onClickProductCard={onClickProductCard} />;
        })}
      </div>
      <div className="flex w-full justify-center mt-4">
        <Button className="bg-red-500 w-[250px] flex justify-center items-center rounded-[4px] text-white p-4 font-medium text-[16px] ">
          View All Products
        </Button>
      </div>
    </section>
  );
};

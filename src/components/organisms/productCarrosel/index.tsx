import { FC } from 'react';
import { Text } from '../../atoms/text';

import { IProduct } from '@/models/ProductModel';
import { ProductCard } from '../productsCard';

interface IproductArr {
  data: IProduct[];
}

export const ProductCarrosel: FC<IproductArr> = ({ data }) => {
  return (
    <section className="pt-4">
      <div className="flex gap-4 pt-4 ">
        {data.map((product, index) => {
          return <ProductCard data={product} key={index} />;
        })}
      </div>
    </section>
  );
};

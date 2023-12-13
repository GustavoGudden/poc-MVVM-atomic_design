import { FC } from 'react';
import { Text } from '../../atoms/text';

import { IProduct } from '@/models/ProductModel';
import { ProductCard } from '../productsCard';

interface IproductArr {
  data: IProduct[];
  title: string;
}

export const ProductCarrosel: FC<IproductArr> = ({ data, title }) => {
  return (
    <section className="pt-4">
      <Text>{title}</Text>
      <div className="flex gap-4 pt-4 h-[250px]">
        {data.map((product, index) => {
          return <ProductCard data={product} key={index} />;
        })}
      </div>
    </section>
  );
};

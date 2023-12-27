import { ProductAllImages } from '@/components/molecules/productAllImages';
import { ProductImageContainer } from '@/components/molecules/productImageContainer';
import { FC } from 'react';
import { ProductInfoArea } from '../productInfoArea';

export const ExhibitionProductArea: FC = () => {
  return (
    <section className="flex mt-16 gap-4">
      <ProductAllImages />
      <ProductImageContainer />
      <ProductInfoArea />
    </section>
  );
};

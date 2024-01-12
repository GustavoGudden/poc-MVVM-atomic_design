import { ProductAllImages } from '@/components/molecules/productAllImages';
import { ProductImageContainer } from '@/components/molecules/productImageContainer';
import { FC } from 'react';
import { ProductInfoArea } from '../productInfoArea';
import { IProduct } from '@/models/ProductModel';

interface IExhibitionProductArea {
  product: IProduct;
}

export const ExhibitionProductArea: FC<IExhibitionProductArea> = ({ product }) => {
  return (
    <section className="flex xl:flex-row flex-col xl:mt-16 mt-4 gap-4">
      <ProductAllImages />
      <ProductImageContainer />
      <ProductInfoArea product={product} />
    </section>
  );
};

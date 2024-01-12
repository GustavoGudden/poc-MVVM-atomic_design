'use client';
import { FC } from 'react';

// Organisms
import { Header } from '../../organisms/header';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { ProductPath } from '@/components/organisms/productPath';
import { ExhibitionProductArea } from '@/components/organisms/exhibitionProductArea';
import { ProductCarrosel } from '@/components/organisms/productCarrosel';

// Mock data
import { Products } from '@/mocks/data/responseData.mock';
import { CarouselText } from '@/components/organisms/carouselText';
import { IProduct } from '@/models/ProductModel';

interface IProductTemplate {
  getParams: () => Params;
  getProductsById: (id: string) => IProduct;
}

export const ProducPageTemplate: FC<IProductTemplate> = ({ getParams, getProductsById }: IProductTemplate) => {
  const param = getParams();

  const product = getProductsById(param.id);

  return (
    <>
      <div className="xl:px-20 px-2 pb-4">
        <ProductPath page="Account" category="Gaming" name={product.name} />
        <ExhibitionProductArea product={product} />
        <CarouselText title="" timeText="Related Item" />
        <ProductCarrosel data={Products.data} onClickProductCard={() => console.log('a')} />
      </div>
    </>
  );
};

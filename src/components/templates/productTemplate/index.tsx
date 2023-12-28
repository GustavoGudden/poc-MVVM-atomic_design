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
import { Footer } from '@/components/organisms/footer/footer';

interface IProductTemplate {
  getParams: () => Params;
}

export const ProducPageTemplate: FC<IProductTemplate> = ({ getParams }: IProductTemplate) => {
  const param = getParams();
  console.log(param.id);

  return (
    <>
      <Header />
      <div className="w-full px-20">
        <ProductPath page="Account" category="Gaming" name="Havic HV G-92 Gamepad" />
        <ExhibitionProductArea />
        <CarouselText title="" timeText="Related Item" />
        <ProductCarrosel data={Products.data} onClickProductCard={() => console.log('a')} />
      </div>
      <Footer />
    </>
  );
};

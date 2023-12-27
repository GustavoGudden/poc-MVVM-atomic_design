'use client';
import { FC } from 'react';

// Organisms
import { Header } from '../../organisms/header';
import { BannerArea } from '../../organisms/bannerArea';
import { Footer } from '../../organisms/footer/footer';
import { ProductCarrosel } from '../../organisms/productCarrosel';
import { Products } from '@/mocks/data/responseData.mock';
import { CarouselText } from '@/components/organisms/carouselText';
import { CateroryBoxs } from '@/components/organisms/categoryBoxs';
import { FourBannerArea } from '@/components/organisms/fourBannerArea';

// Mock data

interface IHomeTemplate {
  sendAlertToScreen: () => void;
  onClickProductCard: (id: string) => void;
  test: string;
}

export const HomeTemplate: FC<IHomeTemplate> = ({ onClickProductCard, test }) => {
  console.log('######', test);
  return (
    <>
      <Header />
      <main className="px-20">
        <BannerArea />
        <CarouselText title="Flash Sales" timeText="Today’s" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <CarouselText title="Browse By Category" timeText="Categories" />
        <CateroryBoxs />
        <CarouselText title="Best Selling Products" timeText="This Month" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <CarouselText title="New Arrival" timeText="Featured" />
        <FourBannerArea />
      </main>
      <Footer />
    </>
  );
};

'use client';
import { FC } from 'react';

// Organisms
import { BannerArea } from '../../organisms/bannerArea';
import { ProductCarrosel } from '../../organisms/productCarrosel';
import { Products } from '@/mocks/data/responseData.mock';
import { CarouselText } from '@/components/organisms/carouselText';
import { CateroryBoxs } from '@/components/organisms/categoryBoxs';
import { AdvantagesContainer } from '@/components/organisms/advantagesContainer';

// Mock data

interface IHomeTemplate {
  sendAlertToScreen: () => void;
  onClickProductCard: (id: string) => void;
}

export const HomeTemplate: FC<IHomeTemplate> = ({ onClickProductCard }) => {
  return (
    <>
      <main className="xl:px-20 w-full px-2">
        <BannerArea />
        <CarouselText title="Flash Sales" timeText="Today’s" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <CarouselText title="Browse By Category" timeText="Categories" />
        <CateroryBoxs />
        <CarouselText title="Best Selling Products" timeText="This Month" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <CarouselText title="New Arrival" timeText="Featured" />
        <AdvantagesContainer />
      </main>
    </>
  );
};

'use client';
import { FC } from 'react';

// Organisms
import { BannerArea } from '../../organisms/bannerArea';
import { ProductCarrosel } from '../../organisms/productCarrosel';
import { Products } from '@/mocks/data/responseData.mock';
import { CarouselText } from '@/components/organisms/carouselText';
import { CateroryBoxs } from '@/components/organisms/categoryBoxs';
import { FourBannerArea } from '@/components/organisms/fourBannerArea';
import { Button } from '@/components/atoms/button';
import { AdvantagesContainer } from '@/components/organisms/advantagesContainer';

// Mock data

interface IHomeTemplate {
  sendAlertToScreen: () => void;
  onClickProductCard: (id: string) => void;
}

export const HomeTemplate: FC<IHomeTemplate> = ({ onClickProductCard }) => {
  return (
    <>
      <main className="px-20 ">
        <BannerArea />
        <CarouselText title="Flash Sales" timeText="Today’s" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <CarouselText title="Browse By Category" timeText="Categories" />
        <CateroryBoxs />
        <CarouselText title="Best Selling Products" timeText="This Month" />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <ProductCarrosel data={Products.data} onClickProductCard={onClickProductCard} />
        <div className="flex w-full justify-center mt-4">
          <Button className="bg-red-500 w-[250px] flex justify-center items-center rounded-[4px] text-white p-4 font-medium text-[16px] ">
            View All Products
          </Button>
        </div>
        <CarouselText title="New Arrival" timeText="Featured" />
        <FourBannerArea />
        <AdvantagesContainer />
      </main>
    </>
  );
};

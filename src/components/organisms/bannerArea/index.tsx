'use client';

import { FC } from 'react';
import { ProductNav } from '../categoryNav';
import { BannerCarrosel } from '@/components/molecules/bannerCarousel';

export const BannerArea: FC = () => {
  return (
    <section className=" xl:flex xl:gap-1 xl:h-[400px]  sm:flex-wrap sm:flex-col sm:w-full">
      <ProductNav />
      <div className="xl:border xl:w-[70%] xl:h-[100%]  xl:m-4  xl:relative xl:z-1 xl:overflow-hidden sm:w-full">
        <BannerCarrosel />
      </div>
    </section>
  );
};

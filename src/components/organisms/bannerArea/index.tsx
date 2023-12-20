'use client';

import { FC } from 'react';
import { ProductNav } from '../categoryNav';
import { Carrosel } from '@/components/molecules/carousel';

export const BannerArea: FC = () => {
  return (
    <section className="flex gap-1 h-[400px] ">
      <ProductNav />
      <div className="border w-[70%] h-[100%] rounded-[20px] m-4  relative z-1 overflow-hidden">
        <Carrosel />
      </div>
    </section>
  );
};

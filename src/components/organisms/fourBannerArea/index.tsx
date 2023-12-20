import { FC } from 'react';

// Components
import { Banner } from '@/components/molecules/banner';
import { BannerText } from '@/components/molecules/bannerText';

export const FourBannerArea: FC = () => {
  return (
    <div className="grid grid-cols-2 h-[600px] gap-[30px]">
      <Banner className="w-full h-full border bg-image bg-no-repeat relative">
        <BannerText link="Shop Now" text="Black and White version of the PS5 coming out on sale." title="PlayStation 5" />
      </Banner>
      <div className="grid grid-rows-2 gap-[30px]">
        <div>
          <Banner className="w-full h-full border   bg-women bg-no-repeat  relative">
            <BannerText link="Shop Now" text="Featured woman collections that give you another vibe." title="Women’s Collections" />
          </Banner>
        </div>
        <div className="flex gap-[30px] ">
          <Banner className="w-[50%]  border  bg-alexa bg-no-repeat relative">
            <BannerText link="Shop Now" text="Amazon wireless speakers" title="Speakers" />
          </Banner>
          <Banner className="w-[50%]  border   bg-perfume bg-no-repeat relative">
            <BannerText link="Shop Now" text="Amazon wireless speakers" title="Fragrance" />
          </Banner>
        </div>
      </div>
    </div>
  );
}; 

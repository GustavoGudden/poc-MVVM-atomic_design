import { FourBanner } from '@/components/molecules/fourBanner';
import { FourBannerText } from '@/components/molecules/fourBannerText';
import { FC } from 'react';

export const FourBannersContainer: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2  gap-4 flex flex-col xl:h-[600px]  mt-4">
        <FourBanner className=" relative row-span-2 rounded-[4px]" imagenSrc="/images/fourBannerImages/banner-playStation.png">
          <FourBannerText title="PlayStation 5" text="Black and White version of the PS5 coming out on sale." />
        </FourBanner>
        <FourBanner className=" relative rounded-[4px] " imagenSrc="/images/fourBannerImages/banner-women.png">
          <FourBannerText title="Women’s Collections" text="Featured woman collections that give you another vibe." />
        </FourBanner>
        <div className="flex w-full gap-4">
          <FourBanner className="w-full relative rounded-[4px]" imagenSrc="/images/fourBannerImages/banner-alexa.png">
            <FourBannerText title="Speakers" text="Amazon wireless speakers" />
          </FourBanner>
          <FourBanner className="w-full relative rounded-[4px] " imagenSrc="/images/fourBannerImages/banner-perfume.png">
            <FourBannerText title="Perfume" text="GUCCI INTENSE OUD EDP" />
          </FourBanner>
        </div>
      </div>
    </div>
  );
};

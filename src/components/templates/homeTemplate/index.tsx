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

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <main className="px-20">
        <BannerArea />
        <CarouselText title="Flash Sales" timeText="Today’s" />
        <ProductCarrosel data={Products.data} />
        <CarouselText title="Browse By Category" timeText="Categories" />
        <CateroryBoxs />
        <CarouselText title="Best Selling Products" timeText="This Month" />
        <ProductCarrosel data={Products.data} />
        <CarouselText title="New Arrival" timeText="Featured" />
        <FourBannerArea />
      </main>
      <Footer />
    </>
  );
};

import { FC } from 'react';

// Organisms
import { Header } from '../../organisms/header';
import { Nav } from '../../organisms/nav';
import { BannerArea } from '../../organisms/bannerArea';
import Footer from '../../organisms/footer/footer';
import { ProductCarrosel } from '../../organisms/productCarrosel';
import { Line } from '../../atoms/line';
import { Products } from '@/mocks/data/responseData.mock';

// Mock data


export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Line />
      <main className="px-8">
        <BannerArea />
        <ProductCarrosel data={Products.data} title="Best Sellers" />
      </main>
      <Footer />
    </>
  );
};

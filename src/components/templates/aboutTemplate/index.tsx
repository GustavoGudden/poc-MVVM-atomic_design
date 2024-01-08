import { CardAboutArea } from '@/components/organisms/cardAboutArea';
import { OwnesCarousel } from '@/components/organisms/ownersCarousel';
import { ProductPath } from '@/components/organisms/productPath';
import { StoryBannerArea } from '@/components/organisms/storyBannerArea';
import { FC } from 'react';

export const AboutTemplate: FC = () => {
  return (
    <section className="px-20">
      <ProductPath page="Home" category="About" />
      <StoryBannerArea />
      <CardAboutArea />
      <OwnesCarousel />
    </section>
  );
};

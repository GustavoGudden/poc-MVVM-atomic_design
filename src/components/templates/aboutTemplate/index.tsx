import { AdvantagesContainer } from '@/components/organisms/advantagesContainer';
import { CardAboutArea } from '@/components/organisms/cardAboutArea';
import { OwnesCarousel } from '@/components/organisms/ownersCarousel';
import { ProductPath } from '@/components/organisms/productPath';
import { StoryBannerArea } from '@/components/organisms/storyBannerArea';
import { FC } from 'react';

export const AboutTemplate: FC = () => {
  return (
    <section className="xl:px-20 px-4">
      <ProductPath page="Home" category="About" />
      <StoryBannerArea />
      <CardAboutArea />
      <OwnesCarousel />
      <AdvantagesContainer />
    </section>
  );
};
